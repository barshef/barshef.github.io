/* Everything the page says about me, apart from the projects (see projects.ts). Change the text here, never in a component. */

/** The public address of the site. Used for the link preview image and the canonical link. */
export const siteUrl = "https://barshef.github.io";

/**
 * Switch to true when I am looking for a role. It shows the "Open to new roles" badge in the hero and the hiring wording in the
 * contact section. Leave false otherwise: a current employer can read this page.
 */
export const openToRoles = false;

/**
 * Switch to true to show the Download CV button in the hero. It is false by default: recruiters contact me and I send the CV
 * tailored to the job. When true, the button downloads `public/cv/<cvFile>`, which must exist. Everything in `public/` is public,
 * so use a copy without a phone number.
 */
export const showCvDownload = false;
export const cvFile = "adebayo-ishola-cv.pdf";

export const profile = {
  name: "Adebayo Ishola",
  /** The short title, used in the browser tab and the link preview image. */
  roles: ["Senior Software Engineer", "Solutions Architect"],
  /** The full title as on LinkedIn, shown centred above the hero. One inner list per line. */
  titleLines: [
    ["Senior Software Engineer", "Solutions Architect", "Identity & Application Security", "Dynamics 365 CE / Power Platform Developer"],
    ["C# .NET", "Microsoft Azure", "Distributed Systems & Integration", "Technical Leadership"],
  ],
  headline: "I build the software that moves money and keeps the record straight.",
  summary:
    "Ten years in C# and .NET across banking, payments, government revenue and logistics. I design secure, distributed systems on Azure, build on Dynamics 365 CE and the Power Platform, and have led teams as a Technical Lead. Alongside my day job I design, build and run my own products, including a core banking platform that is live with a microfinance bank.",
  description:
    "Senior Software Engineer and Solutions Architect. Ten years in C# and .NET across banking, payments, government revenue and logistics, and nine independent products.",
  location: "Sheffield, UK",
  locationLong: "Sheffield, United Kingdom",
  portraitCaption: "C# · .NET · Azure",
  email: "engr.isholaicma@gmail.com",
  github: "https://github.com/barshef",
  linkedin: "https://linkedin.com/in/ishola-adebayo",
  contact: {
    heading: "Get in touch.",
    text: "I am based in Sheffield, United Kingdom. Email is the quickest way to reach me.",
    openHeading: "Hiring for a senior .NET or technical lead role?",
    openText: "I am based in Sheffield and open to remote or hybrid work across the UK. Email is the quickest way to reach me.",
  },
};

export const proof: { figure: string; text: string }[] = [
  { figure: "10 yrs", text: "building production systems in C# and .NET" },
  { figure: "9", text: "independent products designed and built end to end" },
  { figure: "20,000+", text: "users on revenue platforms I led across three Nigerian states" },
  { figure: "Billions", text: "of naira in monthly revenue processed for those three states" },
  { figure: "100k+", text: "API requests a day on the logistics services I build and run today" },
];

export const capabilities: { title: string; text: string }[] = [
  {
    title: "Solutions architecture",
    text: "I pick the shape that fits the problem: modular monoliths, microservices and event-driven messaging, with Azure hosting chosen through written trade-offs on security, cost and resilience.",
  },
  {
    title: "APIs and integrations",
    text: "RESTful services that connect payment gateways (Interswitch, Remita, NIBSS, Stripe), ERP systems and government platforms. Idempotent writes, signed webhooks, and an outbox with reconciliation so nothing is lost or sent twice.",
  },
  {
    title: "Identity and application security",
    text: "I built Authly, my own OpenID Connect identity provider, on OpenIddict; it gives single sign-on across my products. For an employer I architected an API gateway on YARP with Keycloak single sign-on. In both, tokens stay on the server, behind CSRF protection and rate limiting.",
  },
  {
    title: "Dynamics 365 CE and Power Platform",
    text: "Dataverse data models and security roles, C# plugins and Custom APIs, Power Automate flows, model-driven apps and PCF controls in TypeScript and React, integrated with Azure Service Bus and Functions and released through solution ALM.",
  },
  {
    title: "Financial-grade engineering",
    text: "General ledgers whose closed periods stay closed, maker-checker approval, tamper-evident audit trails, settlement reconciliation and strict separation between tenants.",
  },
  {
    title: "Technical leadership",
    text: "As Technical Lead I set standards, coached a team of five and led state-wide rollouts that trained 700+ staff. I have presented platforms to 90+ stakeholders and run releases from development through to production.",
  },
  {
    title: "Legacy modernisation",
    text: "Moved VB.NET, Web Forms and WPF systems to ASP.NET Core APIs with React front ends, bringing in tests, CI/CD and structured logging along the way.",
  },
  {
    title: "AI-assisted engineering",
    text: "I write the technical design first, then use Claude Code and GitHub Copilot to build against it. Every generated change is reviewed and tested, and no client data goes into a prompt.",
  },
];

/** Platforms built or led in employment. The source belongs to the employer; `url` is the public site where there is one. */
export const employerWork: { employer: string; title: string; text: string; url?: string }[] = [
  {
    employer: "ICMA Professional Services",
    title: "TaxSmart and PayOnline",
    text: "State revenue platforms I led into production across Delta, Ogun and Oyo. Taxpayers pay by tax ID or assessment reference through Interswitch and XpressPayments.",
    url: "https://payment.deltabir.com",
  },
  {
    employer: "ICMA Professional Services",
    title: "Consolidated MDA Billing System",
    text: "Brings the assessments of every state agency into one bill per taxpayer, ending the duplicate bills that were often read as multiple taxation. I was lead developer.",
    url: "https://cmbs.deltabir.com",
  },
  {
    employer: "ICMA Professional Services",
    title: "Taxpayer Self Service Platform",
    text: "Moved from Web Forms to ASP.NET Core APIs with a React and TypeScript front end. I built the API and its third-party integrations.",
    url: "https://selfservice.deltairs.com",
  },
  {
    employer: "ICMA Professional Services",
    title: "Enterprise API gateway",
    text: "Microsoft YARP with Keycloak single sign-on, a backend-for-frontend so browsers never hold tokens, and Redis-backed sessions. I architected it and led the build.",
  },
  {
    employer: "ICMA Professional Services",
    title: "Payout disbursement platform",
    text: "Built on secondment to a sister payments company: fund disbursement integrated with the NIBSS processor, plus revenue collection platforms for state banks. Asynchronous processing made it 30% faster.",
  },
  {
    employer: "Advanced Supply Chain",
    title: "Warehouse and logistics APIs",
    text: "Mission-critical APIs on .NET and Azure for 10 enterprise clients, with ERP integrations and event-driven messaging to a transport provider.",
  },
];

/** Employers are named without a country, on purpose. */
export const experience: { period: string; title: string; employer: string; text: string }[] = [
  {
    period: "Feb 2023 – Present",
    title: "Software Developer",
    employer: "Advanced Supply Chain Ltd",
    text: "Build and run the warehouse and logistics APIs and the background-services platform. Set up the team's release manager rota, mentor three junior developers and work with distributed teams.",
  },
  {
    period: "Apr 2022 – Feb 2023",
    title: "Technical Lead / Senior Software Developer",
    employer: "ICMA Professional Services",
    text: "Set technical direction and coding standards, coached 5+ developers, architected the API gateway and project-managed revenue system deployments to two states.",
  },
  {
    period: "Apr 2021 – Mar 2022",
    title: "Senior Software Developer",
    employer: "ICMA Professional Services",
    text: "Architected revenue collection platforms for state banks and, on secondment to a sister payments company, designed secure payment platforms including the Payout disbursement platform on NIBSS.",
  },
  {
    period: "Feb 2019 – Mar 2021",
    title: "Software Developer",
    employer: "ICMA Professional Services",
    text: "Lead developer on the web rewrite of the TaxSmart Suite, the billing system and the PayOnline portal. Introduced event-driven messaging, QR-code receipt verification, unit testing and CI/CD.",
  },
  {
    period: "Jul 2016 – Jan 2019",
    title: "Junior Software Developer",
    employer: "ICMA Professional Services",
    text: "Co-developed the original TaxSmart Suite, ran its deployment at a state internal revenue service and integrated with the Federal Road Safety Commission.",
  },
  {
    period: "Jun 2013 – Jul 2016",
    title: "Head, Application Implementation Officer",
    employer: "ICMA Professional Services",
    text: "Headed the deployment, support and user training for all company software on site at a state internal revenue service: revenue monitoring, receipts, tax clearance certificates, reconciliation and audit.",
  },
  {
    period: "Nov 2011 – Jun 2013",
    title: "Information Technology Officer",
    employer: "ICMA Professional Services",
    text: "IT support and training for staff and clients, system repairs and software installation. Designed and deployed Arms-Trend, an offline taxpayer monitoring system, my first production software.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages and frameworks", items: ["C#", ".NET 10", "ASP.NET Core", "Minimal APIs", "EF Core", "Blazor", "SignalR", "Hangfire", "Quartz.NET", "TypeScript", "React", "Next.js", ".NET MAUI", "T-SQL"] },
  { group: "Architecture", items: ["Modular monolith", "Microservices", "Clean Architecture", "Vertical Slice", "CQRS", "Domain-Driven Design", "Event-driven messaging", "Outbox pattern", "Backend-for-Frontend"] },
  { group: "APIs and integrations", items: ["REST API design", "Webhooks", "Idempotent APIs", "NIBSS", "Interswitch", "Remita", "Stripe", "MassTransit", "RabbitMQ", "Azure Service Bus", "ERP integrations"] },
  { group: "Identity and security", items: ["OAuth 2.0", "OpenID Connect", "OpenIddict", "Keycloak", "ASP.NET Identity", "YARP gateway", "CSRF protection", "Rate limiting", "Maker-checker", "Audit trails"] },
  { group: "Dynamics 365 and Power Platform", items: ["Dynamics 365 CE", "Dataverse", "C# plugins", "Custom APIs", "Power Automate", "Model-driven apps", "PCF controls", "Solution ALM"] },
  { group: "Cloud and DevOps", items: ["Azure App Service", "Azure Functions", "Key Vault", "AKS", "Bicep", "Terraform", "Docker", "GitHub Actions", "Azure Pipelines", "Blue-green deployments"] },
  { group: "Data", items: ["SQL Server", "PostgreSQL", "MySQL", "Redis", "Dapper", "Schema design", "Performance tuning"] },
  { group: "Quality and delivery", items: ["TDD", "xUnit", "Moq", "Serilog", "Seq", "Sentry", "Agile Scrum", "Release management", "ITIL change control", "Mentoring"] },
];

export const recognition: { title: string; text: string }[] = [
  { title: "BSc Communication Technology", text: "Lagos State University. Second Class Honours." },
  { title: "Most Hardworking Staff of the Year", text: "ICMA Professional Services, 2021–2022." },
  { title: "Chairman's Award", text: "National Youth Service Corps, 2011, for building a broadcasting corporation's database and network." },
];
