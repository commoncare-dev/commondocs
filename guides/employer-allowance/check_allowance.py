#!/usr/bin/env python3
# SPDX-License-Identifier: CC0-1.0
"""Evaluate a CommonDocs employer allowance assessment from local JSON."""

import argparse
import hashlib
import json
from fractions import Fraction
from pathlib import Path

from jsonschema import Draft202012Validator, FormatChecker, ValidationError

RULES_VERSION = "1.0.0"
DIRECTORY = Path(__file__).resolve().parent
BLOCKED = {"fail", "review_required", "missing_evidence"}
ICHRA_PURPOSES = {"ichra_36b", "ichra_4980h", "reporting_ichra"}
SECTION_125 = ("https://uscode.house.gov/us/usc/119-118/t26/s125/", "26 USC §125")
PTC = "https://www.ecfr.gov/current/title-26/section-1.36B-2"
ICHRA = "https://www.ecfr.gov/current/title-26/section-54.9802-4"
NOTICE = "https://www.irs.gov/irb/2015-52_IRB"
AUTHORITIES = {
    "cafeteria": (SECTION_125,),
    "flex": ((PTC, "26 CFR §1.36B-2(c)(3)(v)(A)(6)"), (NOTICE, "IRS Notice 2015-87, Q&A 8")),
    "waiver": ((NOTICE, "IRS Notice 2015-87, Q&A 9"),
               ("https://www.govinfo.gov/content/pkg/FR-2016-07-08/pdf/2016-15940.pdf", "2016 proposed opt-out rule")),
    "wages": (("https://www.irs.gov/irb/2015-14_IRB#NOT-2015-17", "IRS Notice 2015-17, Q&A 4"),),
    "individual": (SECTION_125,
                   ("https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/aca-part-22", "DOL FAQ Part XXII, Q1"),
                   ("https://www.irs.gov/irb/2019-28_IRB", "Final ICHRA rule, off-Exchange salary reductions")),
    "private": (("https://www.ecfr.gov/current/title-29/section-2510.3-1", "29 CFR §2510.3-1(j)"),
                ("https://uscode.house.gov/us/usc/t29/s1002/", "29 USC §1002(1)")),
    "class": ((ICHRA, "26 CFR §54.9802-4(c)(2), (d)"),),
    "same": ((ICHRA, "26 CFR §54.9802-4(c)(3)"),),
    "admin": ((ICHRA, "26 CFR §54.9802-4(c)(1), (4)–(6), (e)"),
              ("https://www.federalregister.gov/d/2019-20034", "Proposed ICHRA rules, §105(h) and reliance")),
    "fsa": (("https://www.irs.gov/pub/irs-drop/n-12-40.pdf", "IRS Notice 2012-40, §125(i)"),
            ("https://www.ecfr.gov/current/title-45/section-146.145", "45 CFR §146.145(b)(3)(v)")),
    "group_affordability": ((PTC, "26 CFR §1.36B-2(c)(3)"),
                            ("https://www.ecfr.gov/current/title-26/section-54.4980H-5", "26 CFR §54.4980H-5(e)")),
    "ichra_affordability": ((PTC, "26 CFR §1.36B-2(c)(5)"),
                            ("https://www.federalregister.gov/d/2019-20034", "Proposed §54.4980H-5(f) and reliance")),
    "ichra_flex": ((PTC, "26 CFR §1.36B-2(c)(3)(v)(A)(6), (c)(5)"),
                   ("https://www.irs.gov/instructions/i109495c", "Form 1095-C instructions, Line 15")),
    "reporting": (("https://www.irs.gov/instructions/i109495c", "Form 1095-C instructions, Line 15"),),
}


def validate(name, data):
    with (DIRECTORY / f"assessment-{name}.schema.json").open(encoding="utf-8") as source:
        schema = json.load(source)
    Draft202012Validator(schema, format_checker=FormatChecker()).validate(data)


def combine_status(findings):
    statuses = {finding["status"] for finding in findings}
    return next((status for status in ("fail", "review_required", "missing_evidence", "pass")
                 if status in statuses), "not_applicable")


def exact_cents(value):
    if value is None:
        return None
    fraction = Fraction(value)
    return {"numerator": str(fraction.numerator), "denominator": str(fraction.denominator)}


class Assessment:
    def __init__(self, data):
        self.data = data
        self.findings = []
        self.purpose = data["purpose"]
        if not data["planYearStart"] <= data["asOf"] <= data["planYearEnd"]:
            raise ValueError("The assessment date must fall within the supplied plan year.")
        ids = [tranche["id"] for tranche in data["tranches"]]
        if len(set(ids)) != len(ids):
            raise ValueError("Tranche IDs must be unique.")
        for identifier, evidence in data["evidence"].items():
            if evidence.get("effectiveThrough", "9999-12-31") < evidence["effectiveFrom"]:
                raise ValueError(f"Evidence {identifier} has an inverted effective period.")

    def fact(self, path):
        node = self.data
        for key in path.split("."):
            node = node[int(key)] if isinstance(node, list) else node.get(key, {})
        refs = node.get("evidenceIds", [])
        records = [self.data["evidence"].get(key) for key in refs]
        as_of = self.data["asOf"]
        if any(item and item["verification"] == "conflicted" for item in records):
            return None, refs, "review_required"
        value = node.get("value")
        if value is None or not records or not all(
            item and item["verification"] == "verified"
            and item["effectiveFrom"] <= as_of <= item.get("effectiveThrough", "9999-12-31")
            for item in records
        ):
            return None, refs, "missing_evidence"
        return int(value) if isinstance(value, float) and value.is_integer() else value, refs, None

    def add(self, rule, scope, status, message, paths=(), authority=None):
        facts = [(path, *self.fact(path)) for path in paths]
        if status is None:
            status = ("review_required" if any(issue == "review_required" for _, _, _, issue in facts)
                      else "missing_evidence")
        finding = {
            "ruleId": rule, "scope": scope, "status": status, "message": message,
            "factPaths": list(dict.fromkeys(paths)),
            "unresolvedFactPaths": list(dict.fromkeys(path for path, _, _, issue in facts if issue)),
            "evidenceIds": sorted({ref for _, _, refs, _ in facts for ref in refs}),
            "authorities": [{"url": url, "pinpoint": pinpoint} for url, pinpoint in AUTHORITIES.get(authority, ())],
        }
        self.findings.append(finding)
        return finding

    def values(self, paths):
        return [self.fact(path)[0] for path in paths]

    def condition(self, rule, scope, path, authority, message):
        value = self.fact(path)[0]
        return self.add(rule, scope, None if value is None else ("pass" if value else "fail"),
                        message, [path], authority)

    def compare(self, rule, scope, paths, predicate, authority, message):
        values = self.values(paths)
        status = None if None in values else ("pass" if predicate(*values) else "fail")
        return self.add(rule, scope, status, message, paths, authority)

    def cafeteria(self):
        self.condition("cafeteria.written_plan", "plan", "cafeteria.writtenPlan", "cafeteria",
                       "Check that the effective written cafeteria plan supports the adopted elections.")
        exception = "cafeteria.nondiscriminationExceptionVerified"
        if self.fact(exception)[0] is True:
            self.add("cafeteria.nondiscrimination_exception", "plan", "pass",
                     "A reviewer verified an exception covering all three nondiscrimination checks.", [exception], "cafeteria")
            return
        for name, path in [("eligibility", "eligibilityTestPass"), ("contributions", "contributionsTestPass")]:
            self.condition(f"cafeteria.{name}", "plan", f"cafeteria.{path}", "cafeteria",
                           "Use the applicable plan-year nondiscrimination test result.")
        paths = ["cafeteria.keyQualifiedBenefitCents", "cafeteria.totalQualifiedBenefitCents"]
        key, total = self.values(paths)
        status = None
        if key is not None and total is not None:
            status = "review_required" if not total or key > total else ("fail" if 4 * key > total else "pass")
        self.add("cafeteria.key_concentration", "plan", status,
                 "The qualifying key-employee share may not exceed 25% for this test. Review a zero or inconsistent denominator.",
                 paths, "cafeteria")

    def health_flex(self, scope, prefix, claimed):
        terms = [
            ("currentYearSection125", True), ("taxableElectionAvailable", False),
            ("canPayApplicableMec", True), ("medicalCareOnly213", True),
        ]
        paths = [f"{prefix}.{key}" for key, _ in terms]
        values = self.values(paths)
        if any(value is not None and value != expected for value, (_, expected) in zip(values, terms)):
            self.add("flex.health", scope, "fail" if claimed else "not_applicable",
                     "The terms disqualify these dollars from the health-flex affordability reduction.", paths, "flex")
            return 0
        if None in values:
            self.add("flex.health", scope, None, "Verify all four health-flex facts.", paths, "flex")
            return None
        if self.purpose in ICHRA_PURPOSES:
            off_exchange_path = f"{prefix}.eligibleOffExchangeMecUse"
            paths.append(off_exchange_path)
            off_exchange = self.fact(off_exchange_path)[0]
            if off_exchange is not True:
                self.add("flex.health", scope, "not_applicable" if off_exchange is False else None,
                         "Verify that the ICHRA scenario credit can pay eligible unreimbursed off-Exchange MEC premiums.",
                         paths, "ichra_flex")
                return 0 if off_exchange is False else None
        paths.extend([f"{prefix}.separateAndNotInBaseline", f"{prefix}.monthlyAvailableCents"])
        separate, monthly = self.values(paths[-2:])
        if separate is False:
            self.add("flex.health", scope, "not_applicable",
                     "Apply no separate reduction for an amount the reviewer identified as already included or inseparable.",
                     paths[:-1], "flex")
            return 0
        self.add("flex.health", scope, None if separate is None or monthly is None else "pass",
                 "Verify separately available health flex, its monthly amount, and the absence of double counting.", paths, "flex")
        return monthly if separate is True else None

    def cash_gate(self, scope, prefix):
        minimum_path = f"{prefix}.minimumMonthlyCents"
        minimum = self.fact(minimum_path)[0]
        if minimum == 0:
            self.add("cash.unlock", scope, "pass", "The adopted cash gate has no minimum election amount.", [minimum_path])
            return
        paths = [minimum_path, f"{prefix}.eligibilityScope", f"{prefix}.elections"]
        minimum, eligibility, elections = self.values(paths)
        if None in (minimum, eligibility, elections):
            self.add("cash.unlock", scope, None, "Verify the cash minimum, qualifying coverage scope and elections.", paths)
            return
        seen = {election["coverageId"] for election in elections}
        if len(seen) != len(elections):
            self.add("cash.unlock", scope, "review_required", "Aggregate elections into one verified row per coverage.", paths)
            return
        included = set(eligibility["coverageIds"])
        total = sum(int(election["monthlyCents"]) for election in elections
                    if election["qualifies"] and (eligibility["scope"] == "any_qualified_benefit" or election["coverageId"] in included))
        self.add("cash.unlock", scope, "pass" if total >= minimum else "fail",
                 f"Qualifying elections total {total} cents against a {minimum}-cent cash minimum. This result applies to the election.",
                 paths)

    def waiver(self, scope, prefix):
        paths = [f"{prefix}.{field}" for field in ("kind", "adoptedOn", "monthlyPaymentCents")]
        kind, adopted, monthly = self.values(paths)
        approval_path = f"{prefix}.approvedMonthlyAdditionCents"
        approved, approval_refs, _ = self.fact(approval_path)
        employer_or_reporting = self.purpose in {"group_4980h", "reporting_group"}
        if employer_or_reporting and kind == "unconditional" and adopted and adopted > "2015-12-16":
            if monthly is None:
                self.add("cash.waiver", scope, None, "Verify the monthly amount of the unconditional opt-out payment.", paths, "waiver")
                return None
            if approved is not None and approved != monthly:
                self.add("cash.waiver", scope, "review_required", "The supplied decision conflicts with the unconditional opt-out rule.",
                         [*paths, approval_path], "waiver")
                return None
            self.add("cash.waiver", scope, "pass", "Include the known unconditional opt-out amount under Notice 2015-87.", paths, "waiver")
            return monthly
        if None in (kind, adopted, monthly):
            self.add("cash.waiver", scope, None, "Verify the waiver arrangement, adoption date, and attributable monthly payment.", paths, "waiver")
            return None
        if approved is not None and approved <= monthly and any(
            self.data["evidence"][ref]["kind"] == "review_decision" for ref in approval_refs
        ):
            self.add("cash.waiver", scope, "pass", "Use the verified, purpose-specific waiver decision.", [*paths, approval_path], "waiver")
            return approved
        self.add("cash.waiver", scope, "review_required",
                 "Obtain a purpose-specific decision with an addition no greater than the attributable waiver payment.",
                 [*paths, approval_path], "waiver")
        return None

    def individual_premium(self, scope, prefix):
        checks = [
            ("section125ExchangePurchase", "statutoryExchangeExceptionVerified", "exchange",
             "An Exchange QHP purchased through Section 125 needs a verified statutory exception."),
            ("employerFundingOrConditionedPayment", "compliantVehicleVerified", "vehicle",
             "Employer-funded or conditioned individual premiums require a verified compliant vehicle."),
            ("offExchangeIChraSalaryReduction", "unreimbursedPremiumOnly", "off_exchange",
             "Off-Exchange ICHRA salary reduction covers only eligible unreimbursed premium."),
        ]
        for trigger, requirement, name, message in checks:
            path = f"{prefix}.{trigger}"
            rule = f"individual.{name}"
            value = self.fact(path)[0]
            if value is not True:
                self.add(rule, scope, "not_applicable" if value is False else None, message, [path], "individual")
                continue
            required_path = f"{prefix}.{requirement}"
            self.compare(rule, scope, [path, required_path], lambda _, met: met, "individual", message)

    def ichra(self):
        for rule, field in [("class", "regulatoryClassVerified"), ("dual_offer", "noProhibitedDualOffer")]:
            self.condition(f"ichra.{rule}", "class", f"ichra.{field}", "class",
                           "Use the actual regulatory class and documented pattern of offers.")
        mixed_path = "ichra.mixedOffer"
        applies_path = "ichra.sizeRuleApplies"
        mixed, applies = self.values([mixed_path, applies_path])
        if mixed is False and applies is True:
            self.add("ichra.class_size", "class", "review_required", "The stated applicability conflicts with the stated offer pattern.",
                     [mixed_path, applies_path], "class")
        elif mixed is False or (mixed is True and applies is False):
            paths = [mixed_path] if mixed is False else [mixed_path, applies_path]
            self.add("ichra.class_size", "class", "not_applicable", "The verified offer pattern or exception makes the size rule inapplicable.", paths, "class")
        elif mixed is True and applies is True:
            paths = [mixed_path, applies_path, "ichra.expectedEmployerHeadcount", "ichra.classOfferHeadcount"]
            _, _, workforce, offers = self.values(paths)
            if workforce is None or offers is None:
                self.add("ichra.class_size", "class", None, "Verify expected first-day workforce and employees offered the ICHRA.", paths, "class")
            else:
                minimum = 10 if workforce < 100 else min(20, workforce // 10)
                self.add("ichra.class_size", "class", "pass" if offers >= minimum else "fail",
                         f"The class has {offers} offers and a minimum of {minimum} for the reported workforce of {workforce}.", paths, "class")
        else:
            self.add("ichra.class_size", "class", None, "Verify whether the employer uses a mixed offer and the size rule applies to this class.",
                     [mixed_path, applies_path] if mixed is True else [mixed_path], "class")

        self.condition("ichra.same_terms", "class", "ichra.sameTermsVerified", "same",
                       "Verify permitted variation bases, same-age and dependent terms, and permitted proration against the adopted schedule.")
        age_path = "ichra.usesAgeVariation"
        age = self.fact(age_path)[0]
        if age is True:
            paths = [age_path, "ichra.oldestComparableMaximumCents", "ichra.youngestComparableMaximumCents"]
            self.compare("ichra.age_ratio", "class", paths, lambda _, oldest, youngest: youngest <= oldest <= 3 * youngest, "same",
                         "Check the comparable oldest and youngest maxima against the 3:1 limit.")
        else:
            self.add("ichra.age_ratio", "class", "not_applicable" if age is False else None, "Verify whether the amount varies by age.", [age_path], "same")
        for field in ("coverageIntegration", "annualSubstantiation", "ongoingSubstantiation",
                      "optOutAndTermination", "notice", "additionalTestsReviewed"):
            self.condition(f"ichra.admin.{field}", "plan", f"ichra.{field}", "admin",
                           "Use verified administration evidence or a documented determination for this control.")

    def fsa(self):
        inputs = ["healthFsa.salaryReductionCents", "healthFsa.cashableCreditElectedCents"]
        self.compare("fsa.salary_reduction", "plan", [*inputs, "healthFsa.annualSalaryReductionLimitCents"],
                     lambda salary, cash, limit: salary + cash <= limit, "fsa",
                     "Add cashable credits elected into the FSA to other employee salary reduction before testing the annual limit.")
        path = "healthFsa.claimsExceptedStatus"
        excepted = self.fact(path)[0]
        if excepted is not True:
            self.add("fsa.excepted_status", "plan", "not_applicable" if excepted is False else None,
                     "Determine whether excepted Health FSA treatment is being claimed.", [path], "fsa")
            return
        self.condition("fsa.other_coverage", "plan", "healthFsa.otherGroupCoverageAvailable", "fsa",
                       "Verify other group coverage beyond excepted benefits is made available to the class.")
        self.compare("fsa.maximum_benefit", "plan", [*inputs, "healthFsa.annualMaximumBenefitCents"],
                     lambda salary, cash, benefit: benefit <= max(2 * (salary + cash), salary + cash + 50_000), "fsa",
                     "The maximum benefit may not exceed the greater of twice salary reduction or salary reduction plus $500.")

    def private_option(self):
        path = "privateOption.kind"
        kind = self.fact(path)[0]
        if kind is None:
            self.add("private.classification", "plan", None, "Verify what kind of independent option is being assessed.", [path], "private")
        elif kind == "insured_safe_harbor":
            for field in ("noEmployerFunding", "voluntary", "neutralLimitedFunctions", "noDisallowedConsideration"):
                self.condition(f"private.safe_harbor.{field}", "plan", f"privateOption.{field}", "private",
                               "Verify this condition of the voluntary-insurance safe harbor.")
        else:
            self.condition("private.noninsurance_review", "plan", "privateOption.nonInsuranceSponsorshipReviewed", "private",
                           "Use a documented establishment or maintenance analysis for the noninsurance arrangement.")

    def affordability(self, reconciled, flex, waivers):
        values = dict.fromkeys(("baselineCents", "ordinaryOperativeCents", "ichraFlexScenarioCents",
                               "healthFlexCents", "waiverCents", "otherGroupNetAdjustmentCents", "monthlyThresholdCents"))
        if self.purpose == "design":
            return {**values, "status": "not_applicable", "ordinaryThresholdResult": "not_applicable", "blockingFindings": []}
        ichra = self.purpose in ICHRA_PURPOSES
        reporting = self.purpose.startswith("reporting_")
        authority = "reporting" if reporting else ("ichra_affordability" if ichra else "group_affordability")
        offer = self.condition("affordability.offer_method", "subject", "affordability.methodAndOfferVerified", authority,
                               "Verify the offer, target purpose, benchmark or premium, and any safe-harbor or reporting method.")
        complete = self.condition("affordability.adjustments_complete", "subject", "affordability.allAdjustmentsIdentified", authority,
                                   "Verify all possible adjustments and document how each is treated for this purpose.")
        blockers = [finding for finding in (reconciled, offer, complete) if finding["status"] in BLOCKED]
        paths = (["affordability.lowestCostSilverCents", "affordability.newHraAmountCents", "affordability.monthsAvailable"]
                 if ichra else ["affordability.netGroupPremiumCents", "affordability.otherGroupNetAdjustmentCents"])
        inputs = self.values(paths)
        missing_amount = self.add("affordability.amount_inputs", "subject", "pass" if None not in inputs else None,
                                  "Use verified cents for the applicable offer and adjustments.", paths, authority)
        if missing_amount["status"] in BLOCKED:
            blockers.append(missing_amount)
        health_flex = None if None in flex else sum(flex)
        waiver_amount = None if None in waivers else sum(waivers)
        values.update(healthFlexCents=health_flex, waiverCents=waiver_amount)

        if waiver_amount is None:
            blockers.extend(item for item in self.findings if item["ruleId"] == "cash.waiver" and item["status"] in BLOCKED)
        flex_blockers = [item for item in self.findings if item["ruleId"] == "flex.health" and item["status"] in BLOCKED] if health_flex is None else []

        if ichra:
            silver, hra, months = inputs
            baseline = max(0, silver - Fraction(hra, months)) if None not in inputs else None
            values["baselineCents"] = baseline
            if waiver_amount:
                blockers.append(self.add("affordability.ichra_waiver", "subject", "review_required",
                                         "A nonzero waiver effect needs a purpose-specific ICHRA calculation.", (), "waiver"))
            if not blockers:
                values["ordinaryOperativeCents"] = baseline
                if health_flex:
                    values["ichraFlexScenarioCents"] = max(0, baseline - health_flex)
                    blockers.append(self.add("affordability.ichra_flex", "subject", "review_required",
                                             "The extra subtraction is an interpretive scenario. The ordinary regulatory result is shown separately.",
                                             (), "ichra_flex"))
            blockers.extend(flex_blockers)
        else:
            blockers.extend(flex_blockers)
            baseline, other = inputs
            values.update(baselineCents=baseline, otherGroupNetAdjustmentCents=other)
            if not blockers:
                values["ordinaryOperativeCents"] = max(0, baseline + other + waiver_amount - health_flex)

        threshold_result = "not_applicable" if reporting else "undetermined"
        if not reporting:
            path = "affordability.monthlyThresholdCents"
            threshold = self.fact(path)[0]
            if isinstance(threshold, dict):
                threshold = Fraction(int(threshold["numerator"]), int(threshold["denominator"]))
            threshold_check = self.add("affordability.threshold_input", "subject", "pass" if threshold is not None else None,
                                       "Use a verified monthly threshold for the applicable year and purpose.", [path], authority)
            values["monthlyThresholdCents"] = threshold
            if threshold is None:
                blockers.append(threshold_check)
            elif values["ordinaryOperativeCents"] is not None:
                threshold_result = "affordable" if values["ordinaryOperativeCents"] <= threshold else "above_threshold"
        status = "determined"
        if blockers:
            status = "review_required" if any(item["status"] in {"fail", "review_required"} for item in blockers) else "undetermined"
        return {
            **{key: exact_cents(value) for key, value in values.items()},
            "status": status, "ordinaryThresholdResult": threshold_result,
            "blockingFindings": [{"ruleId": item["ruleId"], "scope": item["scope"]} for item in blockers],
        }

    def run(self):
        reconciled = self.condition("terms.reconcile", "plan", "termsReconciled", None,
                                    "Verify governing terms, offer, elections and payroll agree for the complete set of funded rights.")
        flex, waivers = [], []
        vehicles = {tranche["vehicle"] for tranche in self.data["tranches"]}
        if "cafeteria" in vehicles or any(t["kind"] in {"health_flex", "general_flex"} for t in self.data["tranches"]):
            self.cafeteria()
        if "ichra" in vehicles or self.purpose in ICHRA_PURPOSES:
            self.ichra()
        if "healthFsa" in self.data or "health_fsa" in vehicles:
            self.fsa()
        if "privateOption" in self.data:
            self.private_option()
        for index, tranche in enumerate(self.data["tranches"]):
            scope = f"tranche:{tranche['id']}"
            prefix = f"tranches.{index}"
            if tranche["vehicle"] == "cafeteria" or tranche["kind"] in {"health_flex", "general_flex"}:
                flex.append(self.health_flex(scope, f"{prefix}.healthFlex", tranche["kind"] == "health_flex"))
            if "cashGate" in tranche:
                self.cash_gate(scope, f"{prefix}.cashGate")
            if tranche["kind"] == "waiver_payment":
                waivers.append(self.waiver(scope, f"{prefix}.waiver"))
            if "individualPremium" in tranche:
                self.individual_premium(scope, f"{prefix}.individualPremium")
            if tranche["kind"] == "unrestricted_wages":
                for field in ("taxablePayroll", "employeeControlsSpending", "noPurchaseOrCoverageCondition"):
                    self.condition(f"wages.{field}", scope, f"{prefix}.unrestrictedWages.{field}", "wages",
                                   "Verify the terms and actual payroll treatment of ordinary unrestricted compensation.")
            if tranche["vehicle"] in {"other_hra", "hsa", "other"}:
                self.condition("vehicle.review", scope, f"{prefix}.vehicleReviewPassed", None,
                               "Obtain a verified vehicle-specific determination under the applicable authority.")
        affordability = self.affordability(reconciled, flex, waivers)
        payload = json.dumps(self.data, sort_keys=True, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
        return {
            "schemaVersion": 1, "rulesVersion": RULES_VERSION, "inputDigest": "sha256:" + hashlib.sha256(payload).hexdigest(),
            **{key: self.data[key] for key in ("revisionId", "planId", "subjectRef", "asOf", "purpose")},
            "status": combine_status(self.findings), "findings": self.findings, "affordability": affordability,
        }


def evaluate(data):
    validate("input", data)
    result = Assessment(data).run()
    validate("result", result)
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", type=argparse.FileType("r", encoding="utf-8"), help="Assessment JSON file, or - for stdin")
    arguments = parser.parse_args()
    try:
        with arguments.input as source:
            result = evaluate(json.load(source))
    except ValidationError as error:
        location = "/" + "/".join(str(part) for part in error.absolute_path)
        parser.exit(2, f"Invalid assessment at {location}: {error.message}\n")
    except ValueError as error:
        parser.exit(2, f"Invalid assessment: {error}\n")
    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
