# CommonDocs

**An open documentation repo for creating and administering group health plans.**

CommonCare gives employers, plan professionals, and healthcare innovators the structures and tools they need to build better health plans without surrendering control to insurance carriers or legacy networks.

This repository documents the concepts, data structures, administrative processes, and integration standards that make that possible. Thousands of pages of regulation are written on these concepts. Thousands of pages are written as web content regarding how to interpret that regulation. That content rarely, if ever, serves the purposes of outlining how to practically implement real-world plan structures that are both compliant and provide practical value in improving health plans.

This guide is meant to be both a human and AI readable data store that enables real implementation of the concepts herein.

## 🧭 What a group health plan actually is

> [!IMPORTANT]
> **A group health plan is not the same thing as health insurance, and it is not healthcare.**

It is a legal and administrative construct through which an employer can help people purchase health insurance and healthcare. It allows employees to pay for eligible benefits through payroll and allows employers to provide credits toward those benefits as compensation—often with favorable tax treatment.

> **Health insurance can be part of a group health plan. It does not have to define or control the entire plan.**

That distinction creates room for employers to make better choices about how healthcare is financed, purchased, accessed, and administered. Yet in practice, most group health plans are designed around the systems, products, and incentives of health insurance carriers. It's not a controversial matter to say those incentives are largely conflicting with a employer or even participant. Presuming insurance should fully manage healthcare ignores this conflict of incentives entirely and requires altruism from insurers. Significant scrutiny and dissatisfaction is currently (and fairly) pointed at the results of this assumption. 

## 🧱 Why the status quo persists

The employer-sponsored market is enormous, highly regulated, and resistant to change.

Three forces help keep the existing model in place:

### ⚖️ Force 1: Regulatory complexity and risk

The Affordable Care Act introduced substantial complexity for employers. It constrained many previously available plan-design options, created potentially severe consequences for noncompliance, and potentially exposes employers to unlimited financial risk due to the inability to underwrite or create annual or lifetime dollar limits for covered care.

Designing something different is difficult. Designing something different that is also compliant, administratively workable, and financially responsible requires significant expertise. (Open-source is the best documented process for overcoming such high-stakes technical complexity)

### 🏢 Force 2: The importance of employer plans to insurers

Employer-sponsored plans represent the overwhelming majority (~85%) of the private payer market. If treated as an industry of their own, they would rank among the top 5 largest industries in the United States.

This market is foundational to health insurance carriers. It is also the only market where they are able to underwrite their risk. They modify premiums based on the historical claims performance of a given group. In the private marketplace, they cannot do this. 

### 💰 Force 3: Distribution is paid to preserve the status quo

Most employers do not design group health plans themselves. They rely on brokers and consultants to explain the market, recommend a plan, select vendors, and manage implementation.

That makes brokers and consultants the practical distribution layer for nearly every alternative to the status quo. Unfortunately, their incentives often run in the opposite direction.

CommonCare has a highly technical staff in matters of both tax law and technology and we accept no commissions; it's still a behemoth effort to organize the expansive and competing landscapes of the natural and dire complexity of healthcare as a science and service, the tax code and ACA legal landscape, employer priorities and incentives, participant preferences and incentives - and to provide adaptable pathways forward for managing these elements simultaneously. 

Forgive us, but we're just not sure your commissioned insurance agent is really grasping these matters rather than simply drinking from the well of insurance incentives (which favors them financially). Even if hearts were pure, which they aren't, knowing how to tackle these concerns is beyond challenging. 

For many brokers and consultants, recommending a structurally different plan means:

- Doing substantially more work
- Accepting lower or less predictable compensation
- Taking responsibility for unfamiliar decisions
- Challenging carrier and vendor relationships
- Asking clients to understand complexity they have historically outsourced
- Narrowing the addressable market to early adopters and organizations willing to depart from convention

Selling the incumbent model is easier. The products are familiar, carrier relationships already exist, implementation is repeatable, and compensation is often embedded within premiums or vendor arrangements that receive little scrutiny from the employer paying for them.

This does not require bad actors. It is what the system predictably produces.

Even an excellent advisor must choose between recommending the conventional arrangement—which is easier to sell, easier to administer, and often better compensated—or asking the client to undertake a more demanding change that may reduce the advisor’s own revenue, and eating every complaint and failing that produces along the way. 

> [!CAUTION]
> **The people employers depend on to challenge the status quo are frequently paid more to preserve it.**

## 🚀 Why CommonCare exists

CommonCare is designed to make structurally better group health plans practical.

It provides three complementary layers.

### 1. 📖 Open plan structures and data specifications

CommonCare documents the legal, operational, and administrative structures that plans can use to reduce their dependence on the unfavorable incentives of insurance carriers and legacy networks.

These materials include:

- Canonical and complete plan structure models
- Plan-document templates and patterns
- Administrative workflows
- Data models and relationships
- Compliance considerations
- Implementation guidance
- Integration standards

The rules governing group health plans are cumbersome, and better structures are rarely obvious. Developing a compliant approach requires expertise across benefits, healthcare, law, finance, operations, and technology.

CommonCare publishes its models and data stores so that others can inspect them, challenge them, improve them, and adapt them - and have their AI tools interact with them.

### 2. 🛠️ Low-cost administrative tools

Good plan design is useful only when it can be implemented and operated reliably.

CommonCare provides the software and administrative tooling needed to put these structures into practice. Our goal is turnkey implementation at a flat, all-inclusive price of **$5 per employee per month**.

Keeping the operational cost low removes one of the largest barriers to adopting better plan structures.

### 3. 🧩 A pluggable ecosystem of specialists

Many of the best solutions in healthcare do not come from large insurance carriers. They come from focused professionals and organizations with deep expertise in areas such as:

- Healthcare delivery
- Benefits and healthcare law
- Plan finance
- Pharmacy
- Care navigation
- Clinical advocacy
- Claims and payment
- Access to high-quality providers

CommonCare allows these specialists to work with group health plans through consistent, documented, and transparent interfaces and built-in billing and contracting.

This creates an alternative to opaque arrangements funded by commissions and fees buried inside enormous premiums. Plans can understand who is providing a service, what that service does, and what it costs.

CommonCare is designed to support self-service. We also recognize that most people do not want to administer a health plan by themselves. An open system lets trusted professionals help without requiring the plan to surrender ownership or visibility.

> [!IMPORTANT]
> These arrangements are always transparent and a-la-carte.  **We never accept or pay commissions from or to anyone - EVER.**

## 📚 The purpose of this documentation

These documents serve three audiences and three related purposes.

### A shared body of knowledge

They make CommonCare’s plan structures, assumptions, and implementation patterns available for inspection and improvement. Contributors can propose corrections, clarify ambiguous concepts, identify risks, and introduce better approaches.

### An official reference for plans

Organizations using CommonCare can understand how their plan is structured, how its components work together, and how important administrative decisions should be handled.

### Official guidance for third parties

Advisors, administrators, healthcare providers, legal professionals, financial partners, and technology vendors can use these specifications to work with CommonCare plans in a consistent and predictable way.

## 🧠 Our principles

### Plans should own their structure

An employer should be able to understand and control the plan it sponsors. Important rules and relationships should not be hidden inside carrier systems or proprietary administrative processes.

### Participants should benefit from aligned incentives

Plan structures should help people access high-quality care without forcing them to navigate unnecessary complexity or bear the consequences of incentives they cannot see.

### Administrative systems should be transparent

A plan should be able to determine what happened, why it happened, who made the decision, and how money moved.

### Components should be replaceable

No carrier, network, administrator, vendor, or professional should become indispensable merely because the plan’s information and processes are trapped inside a proprietary system.

### Expertise should be composable

Specialists should be able to contribute their expertise through clear interfaces without needing to control the entire plan.

### Better ideas should be able to spread

Plan sponsors and professionals repeatedly solve similar problems in isolation. Shared specifications allow improvements to become reusable infrastructure rather than private, one-off knowledge.

## 🤖 How these documents work

Each document describes a defined concept, structure, workflow, or interface within the CommonCare model.

Documents use stable identifiers, consistent metadata, explicit relationships, and predictable sections. This makes the material:

- Readable as conventional documentation
- Searchable through the public documentation site
- Reviewable through pull requests
- Suitable for AI-assisted retrieval and analysis
- Usable as a foundation for software integrations
- Traceable as the underlying model evolves

The Markdown files in this repository are the canonical source. Websites, indexes, AI retrieval artifacts, and other formats should be generated from them.

## 🙌 Contributing

CommonCare welcomes contributions from people with practical expertise in group health plans, healthcare, law, finance, administration, data, and technology.

Useful contributions include:

- Correcting an error
- Clarifying an explanation
- Identifying a legal or operational risk
- Improving a data model
- Documenting an edge case
- Proposing a new plan structure
- Adding an integration pattern
- Providing evidence that challenges an existing assumption

Changes should be proposed through a pull request so that the reasoning, review, and resulting decision remain visible and beautiful git tracking for change history.

Disagreement is useful. Unsupported certainty is not. Contributions should distinguish among legal requirements, operational conventions, design recommendations, and opinion.

## ⚠️ A note on legal and tax guidance

> [!WARNING]
> This repository documents CommonCare’s models and approach. It is not a substitute for legal, tax, actuarial, accounting, or medical advice. We have to say that - you know why. It's not to say we don't get into the meat of these issues or shouldn't. It's to say, we can't know how you proofread, interpret, or implement those ideas. 

Group health plan requirements depend on plan design, employer characteristics, jurisdiction, funding arrangements, and other facts. Plans and their advisors remain responsible for evaluating how any concept described here applies to their circumstances.

## 🌄 The goal

CommonCare is not trying to create another closed benefits platform.

We are building shared infrastructure for group health plans: open structures, affordable administration, and transparent access to specialized expertise.

The purpose is simple:

> ### Make it practical for group health plans to choose a better way of financing, purchasing, and accessing healthcare.

## 🌐 Licensing
This repository grants the Creative Commons Zero v1.0 Universal license to all visitors and users. 

Except where otherwise noted, CommonCare’s documentation, specifications, schemas, diagrams, and synthetic example data are dedicated to the public domain under CC0 1.0 Universal.
CommonCare names, logos, trademarks, and other brand assets are expressly excluded. The dedication does not apply to private employer, plan, participant, patient, production, or third-party data.
Software included in this repository, if any, is licensed separately as identified in the applicable files.
These materials are informational and do not constitute legal, tax, medical, actuarial, or accounting advice.
