# SPDX-License-Identifier: CC0-1.0

import json
import unittest
from fractions import Fraction
from pathlib import Path

from jsonschema import ValidationError

from check_allowance import evaluate


def fact(value, evidence="terms"):
    return {"value": value, "evidenceIds": [evidence]}


def cents(value):
    return None if value is None else Fraction(int(value["numerator"]), int(value["denominator"]))


class CheckAllowanceTests(unittest.TestCase):
    def setUp(self):
        with Path(__file__).with_name("example-assessment.json").open(encoding="utf-8") as source:
            self.data = json.load(source)

    def finding(self, rule, scope=None):
        return next(result for result in evaluate(self.data)["findings"]
                    if result["ruleId"] == rule and (scope is None or result["scope"] == scope))

    def set_ichra(self):
        self.data["purpose"] = "ichra_36b"
        self.data["tranches"][0]["healthFlex"]["eligibleOffExchangeMecUse"] = fact(True)
        self.data["tranches"].append({"id": "hra", "vehicle": "ichra", "kind": "direct_benefit"})
        self.data["affordability"].update({
            "lowestCostSilverCents": fact(50000), "newHraAmountCents": fact(240000), "monthsAvailable": fact(12),
        })

    def set_waiver(self, kind="unconditional"):
        self.data["tranches"].append({
            "id": "waive", "kind": "waiver_payment", "vehicle": "payroll",
            "waiver": {"kind": fact(kind), "adoptedOn": fact("2026-04-01"), "monthlyPaymentCents": fact(1500)},
        })
        return self.data["tranches"][-1]["waiver"]

    def test_split_allowance_reduces_only_protected_flex(self):
        result = evaluate(self.data)
        self.assertEqual(result["status"], "pass")
        self.assertEqual(result["affordability"]["ordinaryThresholdResult"], "affordable")
        self.assertEqual(cents(result["affordability"]["ordinaryOperativeCents"]), 22000)
        self.assertEqual(self.finding("flex.health", "tranche:cashable-flex")["status"], "not_applicable")

    def test_nonmedical_health_flex_is_noncreditable(self):
        self.data["tranches"][0]["healthFlex"]["medicalCareOnly213"] = fact(False)
        result = evaluate(self.data)
        self.assertEqual(result["status"], "fail")
        self.assertEqual(result["affordability"]["ordinaryThresholdResult"], "above_threshold")
        self.assertEqual(cents(result["affordability"]["ordinaryOperativeCents"]), 27000)

    def test_missing_and_conflicted_evidence_are_distinguished(self):
        self.data["tranches"][0]["healthFlex"]["canPayApplicableMec"] = fact(True, "expired")
        self.data["evidence"]["expired"] = dict(self.data["evidence"]["terms"], effectiveThrough="2027-05-31")
        result = evaluate(self.data)
        self.assertEqual(result["affordability"]["status"], "undetermined")
        self.assertIsNone(result["affordability"]["ordinaryOperativeCents"])
        self.assertEqual(self.finding("flex.health")["status"], "missing_evidence")
        self.data["evidence"]["expired"]["verification"] = "conflicted"
        self.assertEqual(self.finding("flex.health")["status"], "review_required")

    def test_no_double_count_for_credit_already_in_premium(self):
        self.data["tranches"][0]["healthFlex"]["separateAndNotInBaseline"] = fact(False)
        result = evaluate(self.data)
        self.assertEqual(cents(result["affordability"]["ordinaryOperativeCents"]), 27000)

    def test_cash_gate_only_counts_matching_coverage(self):
        self.data["tranches"][1]["cashGate"] = {
            "minimumMonthlyCents": fact(10000),
            "eligibilityScope": fact({"scope": "specified_coverages", "coverageIds": ["medical"]}),
            "elections": fact([
                {"coverageId": "medical", "qualifies": True, "monthlyCents": 8000},
                {"coverageId": "dental", "qualifies": True, "monthlyCents": 3000},
            ]),
        }
        result = evaluate(self.data)
        self.assertEqual(self.finding("cash.unlock")["status"], "fail")
        self.assertEqual(result["affordability"]["ordinaryThresholdResult"], "affordable")

    def test_unconditional_waiver_is_added_for_employer_method(self):
        self.data["purpose"] = "group_4980h"
        self.set_waiver()
        result = evaluate(self.data)
        self.assertEqual(cents(result["affordability"]["ordinaryOperativeCents"]), 23500)
        self.assertEqual(result["affordability"]["ordinaryThresholdResult"], "above_threshold")

    def test_unconditional_waiver_amount_must_be_known_for_employer_method(self):
        self.data["purpose"] = "group_4980h"
        waiver = self.set_waiver()
        del waiver["monthlyPaymentCents"]
        waiver["approvedMonthlyAdditionCents"] = fact(0, "threshold")
        result = evaluate(self.data)
        self.assertEqual(self.finding("cash.waiver")["status"], "missing_evidence")
        self.assertIsNone(result["affordability"]["ordinaryOperativeCents"])

    def test_conditional_waiver_needs_a_review_decision(self):
        self.data["purpose"] = "group_4980h"
        waiver = self.set_waiver("conditional")
        self.assertEqual(self.finding("cash.waiver")["status"], "review_required")
        waiver["approvedMonthlyAdditionCents"] = fact(0, "threshold")
        self.assertEqual(self.finding("cash.waiver")["status"], "pass")

    def test_ichra_baseline_separate_from_flex_scenario(self):
        self.set_ichra()
        self.data["tranches"][0]["healthFlex"]["monthlyAvailableCents"] = fact(7500)
        result = evaluate(self.data)["affordability"]
        self.assertEqual(cents(result["ordinaryOperativeCents"]), 30000)
        self.assertEqual(cents(result["ichraFlexScenarioCents"]), 22500)
        self.assertEqual(result["status"], "review_required")
        self.assertEqual(result["ordinaryThresholdResult"], "above_threshold")

    def test_missing_ichra_flex_does_not_erase_ordinary_baseline(self):
        self.set_ichra()
        del self.data["tranches"][0]["healthFlex"]["monthlyAvailableCents"]
        result = evaluate(self.data)["affordability"]
        self.assertEqual(cents(result["ordinaryOperativeCents"]), 30000)
        self.assertIsNone(result["ichraFlexScenarioCents"])
        self.assertEqual(result["status"], "undetermined")

    def test_ichra_flex_requires_eligible_off_exchange_use(self):
        self.set_ichra()
        self.data["tranches"][0]["healthFlex"]["eligibleOffExchangeMecUse"] = fact(False)
        result = evaluate(self.data)["affordability"]
        self.assertEqual(cents(result["ordinaryOperativeCents"]), 30000)
        self.assertIsNone(result["ichraFlexScenarioCents"])
        self.assertEqual(result["status"], "determined")

    def test_ichra_fractional_month_comparison(self):
        self.set_ichra()
        self.data["tranches"].pop(0)
        self.data["affordability"]["newHraAmountCents"] = fact(240001)
        self.data["affordability"]["monthlyThresholdCents"] = fact({"numerator": "359999", "denominator": "12"})
        result = evaluate(self.data)["affordability"]
        self.assertEqual(cents(result["ordinaryOperativeCents"]), Fraction(359999, 12))
        self.assertEqual(result["ordinaryThresholdResult"], "affordable")

    def test_ichra_class_size_and_age_ratio(self):
        self.set_ichra()
        self.data["ichra"] = {key: fact(value) for key, value in {
            "mixedOffer": True, "sizeRuleApplies": True, "expectedEmployerHeadcount": 145, "classOfferHeadcount": 13,
            "usesAgeVariation": True, "oldestComparableMaximumCents": 31000, "youngestComparableMaximumCents": 10000,
        }.items()}
        self.assertEqual(self.finding("ichra.class_size")["status"], "fail")
        self.assertEqual(self.finding("ichra.age_ratio")["status"], "fail")
        self.data["ichra"]["sizeRuleApplies"] = fact(False)
        self.data["ichra"]["mixedOffer"] = fact(False)
        self.assertEqual(self.finding("ichra.class_size")["status"], "not_applicable")

    def test_individual_funding_checks_actual_conditions(self):
        self.data["tranches"][1]["individualPremium"] = {
            "section125ExchangePurchase": fact(True),
            "statutoryExchangeExceptionVerified": fact(False),
            "employerFundingOrConditionedPayment": fact(True),
            "compliantVehicleVerified": fact(False),
            "offExchangeIChraSalaryReduction": fact(False),
        }
        self.assertEqual(self.finding("individual.exchange")["status"], "fail")
        self.assertEqual(self.finding("individual.vehicle")["status"], "fail")

    def test_elected_cash_counts_toward_both_fsa_tests(self):
        self.data["healthFsa"] = {key: fact(value) for key, value in {
            "claimsExceptedStatus": True, "otherGroupCoverageAvailable": True, "salaryReductionCents": 100000,
            "cashableCreditElectedCents": 50000, "annualMaximumBenefitCents": 300000,
            "annualSalaryReductionLimitCents": 140000,
        }.items()}
        self.assertEqual(self.finding("fsa.salary_reduction")["status"], "fail")
        self.assertEqual(self.finding("fsa.maximum_benefit")["status"], "pass")

    def test_duplicate_ids_or_invalid_input_rejected(self):
        original = self.data["tranches"].pop()
        self.data["tranches"].append(self.data["tranches"][0])
        with self.assertRaisesRegex(ValueError, "unique"):
            evaluate(self.data)
        self.data["tranches"][-1] = original
        self.data["asOf"] = "2027-02-30"
        with self.assertRaises(ValidationError):
            evaluate(self.data)


if __name__ == "__main__":
    unittest.main()
