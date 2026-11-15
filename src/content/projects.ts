export type Category = "fintech" | "marketplace" | "bookings" | "identity" | "business";
export type Status = "live" | "testing" | "development" | "service" | "source";

export type Project = {
  slug: string;
  name: string;
  /** Short line under the name. */
  tagline: string;
  category: Category;
  status: Status;
  /** Public site or repository, without the scheme. Leave out when there is none; the row then says Private. */
  url?: string;
  /** Featured projects get a full card above the register. Keep it to two. */
  featured?: boolean;
  /** One or two sentences for the card and the register. */
  blurb: string;
  /** Three engineering decisions, one sentence each. */
  decisions: string[];
  /** What I did on it. The first sentence is shown on the featured card. */
  role: string;
  /** The main technologies, one line. */
  stack: string;
};

export const CATEGORIES: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "fintech", label: "Fintech" },
  { key: "marketplace", label: "Marketplaces" },
  { key: "bookings", label: "Bookings" },
  { key: "identity", label: "Identity" },
  { key: "business", label: "Business apps" },
];

export const CATEGORY_LABEL: Record<Category, string> = {
  fintech: "Fintech",
  marketplace: "Marketplace",
  bookings: "Bookings",
  identity: "Identity",
  business: "Business app",
};

export const STATUS_LABEL: Record<Status, string> = {
  live: "Live",
  testing: "In testing",
  development: "In development",
  service: "Live · shared service",
  source: "Code on GitHub",
};

/** The pill colour for each status. */
export const STATUS_TONE: Record<Status, "live" | "test" | "idle"> = {
  live: "live",
  testing: "test",
  development: "idle",
  service: "live",
  source: "live",
};

/**
 * Adding a project: add an entry here. The featured cards, the register, its filters and its count all read this list.
 * A test fails if a company name appears in this file or in profile.ts.
 */
export const projects: Project[] = [
  {
    slug: "moniqora",
    name: "Moniqora",
    tagline: "Core banking platform",
    category: "fintech",
    status: "live",
    url: "moniqora.kaass.co.uk",
    featured: true,
    blurb: "A multi-tenant banking platform for microfinance banks, lenders, cooperatives and government revenue offices. Live in production with a client microfinance bank.",
    decisions: [
      "General ledger, NIBSS interbank transfers with settlement reconciliation, lending, AML screening and regulatory returns.",
      "Every institution's data is scoped to that institution in every query. No report, cache or export crosses that line.",
      "Sensitive actions need a second person, and every transaction posts to the ledger exactly once.",
    ],
    role: "Architect, sole engineer and operator. First built in 2022, rebuilt in 2025–26 as a modular monolith with blue-green deployments.",
    stack: ".NET 10 modular monolith · Vertical Slice Architecture · Next.js · Expo · PostgreSQL / SQL Server · Quartz.NET · Azure Pipelines",
  },
  {
    slug: "rotaro",
    name: "Rotaro",
    tagline: "Savings circles, kept honest",
    category: "fintech",
    status: "testing",
    url: "getrotaro.co.uk",
    featured: true,
    blurb: "A consumer app for rotating savings circles (ajo, esusu, susu, pardner) in the UK and Nigeria. One shared, tamper-evident record of who paid and who was paid. It never holds money.",
    decisions: [
      "Every contribution and payout is an append-only entry carrying a hash of the one before it, so any change would show.",
      "Idempotency keys on every write, signed webhooks, and an outbox with reconciliation so a crash never loses or duplicates an instruction.",
      "Payment providers sit behind ports; which one serves each country is data, switched on with a second person's approval.",
    ],
    role: "I wrote the specifications and reviewed every change. Built agentically with Claude Code from those specs.",
    stack: ".NET 10 · Expo for iOS, Android and web · Next.js · PostgreSQL · Stripe · Azure DevOps CI",
  },
  {
    slug: "authly",
    name: "Authly",
    tagline: "Identity and single sign-on",
    category: "identity",
    status: "service",
    blurb: "The OpenID Connect identity provider behind my products, built on OpenIddict. Each product is a client of Authly, so there is one sign-in and one place to harden.",
    decisions: [
      "Authorization code with PKCE for web and mobile, client credentials for service-to-service calls.",
      "A gateway keeps tokens on the server and hands the browser an opaque session.",
      "Per-tenant sign-in strength, second factor and session length, with every sign-in audited.",
    ],
    role: "Designed and built. Gives single sign-on across Moniqora, Rotaro, HireVanAndMan and Kaass Auto.",
    stack: ".NET · ASP.NET Identity · OpenIddict · YARP gateway · SQL Server / PostgreSQL",
  },
  {
    slug: "u-orda",
    name: "U-Orda",
    tagline: "Afro-Caribbean groceries online",
    category: "marketplace",
    status: "testing",
    url: "u-orda.co.uk",
    blurb: "A multi-vendor grocery marketplace in the UK. Customers fill one basket across several vendors; ordering, payment, delivery and disputes run on the platform.",
    decisions: [
      "One checkout, with the order split per vendor behind the scenes.",
      "Card payments with idempotency keys, so a retried payment never charges twice.",
      "Payment and order services talk through events, so a failure is retried and never lost.",
    ],
    role: "Built the catalogue, basket, ordering, payment and notification services.",
    stack: ".NET services · Next.js storefront · PostgreSQL · Redis · RabbitMQ",
  },
  {
    slug: "kaass-auto",
    name: "Kaass Auto",
    tagline: "Vehicle marketplace",
    category: "marketplace",
    status: "live",
    url: "kaass.co.uk",
    blurb: "A UK vehicle listing platform with a dealer dashboard, verified listings, buyer enquiries and admin review.",
    decisions: [
      "Every listing is reviewed before buyers see it, and reviewed again when it changes.",
      "A dealer sees only its own vehicles and enquiries.",
      "The platform checks its own database, mail and SMS providers and reports a failing one early.",
    ],
    role: "Designed and built end to end, single-handed, for a client.",
    stack: ".NET · Next.js · SQL Server · OpenIddict",
  },
  {
    slug: "hirevanandman",
    name: "HireVanAndMan",
    tagline: "Removals bookings",
    category: "bookings",
    status: "testing",
    url: "hirevanandman.co.uk",
    blurb: "A UK removals and man-and-van platform: instant quotes, scheduled bookings, driver onboarding, customer accounts and an operations back office, on web and mobile.",
    decisions: [
      "Rates, rules and platform settings are data the operator changes, with no code release.",
      "Web push through SignalR, mobile push through FCM and email, all orchestrated by background jobs.",
      "SQL Server or PostgreSQL, switchable by configuration.",
    ],
    role: "Architected and built the web app, the mobile app and the back office.",
    stack: "Blazor Server · .NET MAUI · CQRS · Stripe · Google Maps · Redis HybridCache · Hangfire",
  },
  {
    slug: "driveready",
    name: "DriveReady",
    tagline: "Driving lesson bookings",
    category: "bookings",
    status: "development",
    blurb: "Learners find verified driving instructors nearby and book, pay for and rate lessons by the hour. Instructors manage availability, pricing tiers and ratings.",
    decisions: [
      "Instructors are verified before they appear in search.",
      "A booking is paid once; refunds follow the cancellation rules both sides agreed to.",
      "A first lesson can be booked as a guest, with the account created afterwards.",
    ],
    role: "Wrote the technical design document and built the instructor portal, admin portal and guest booking flow.",
    stack: "Blazor Server · MudBlazor · Stripe Connect · OpenIddict · Hangfire · Redis",
  },
  {
    slug: "invoicepro",
    name: "InvoicePro",
    tagline: "Multi-tenant invoicing",
    category: "business",
    status: "development",
    blurb: "A software-as-a-service invoicing platform where each business has its own separated workspace, with card payments and PDF and Excel output.",
    decisions: [
      "Tenant separation through Finbuckle, applied at the data layer.",
      "Invoices rendered to PDF with QuestPDF and exported to Excel with ClosedXML.",
      "All six planned build phases are complete.",
    ],
    role: "Designed and built.",
    stack: "Blazor Server · Finbuckle · OpenIddict · Stripe · QuestPDF · ClosedXML",
  },
  {
    slug: "casedesk",
    name: "CaseDesk",
    tagline: "Case management on Dynamics 365",
    category: "business",
    status: "source",
    url: "github.com/barshef/CustomerCaseDeskManagement",
    blurb: "A complete customer case-management solution on Dynamics 365 Customer Engagement and Dataverse, built to show an end-to-end Power Platform delivery.",
    decisions: [
      "C# plugins for SLA due dates, close-guard validation and notifications, unit-tested with xUnit and FakeXrmEasy.",
      "A custom API called from a ribbon command and from Power Automate, plus a React control showing a live SLA countdown.",
      "Dataverse events published to Azure Service Bus and handled by an Azure Function; the solution is deployed by GitHub Actions.",
    ],
    role: "Designed and built. Source and managed solution are on GitHub.",
    stack: "Dynamics 365 CE · Dataverse · C# plugins · Power Automate · PCF (TypeScript, React) · Azure Functions · GitHub Actions",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
