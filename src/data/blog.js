/**
 * Sample blog articles — replace with real posts and authors when publishing.
 */
export const blogCategories = [
  'Technology',
  'AI',
  'Web Development',
  'Cloud',
  'Cybersecurity',
  'Design',
  'Business',
];

export const blogPosts = [
  {
    slug: 'choosing-right-tech-stack-2026',
    title: 'How to Choose the Right Tech Stack for Your Next Product',
    excerpt:
      'A practical framework for evaluating frameworks, languages, and infrastructure without chasing trends or over-engineering early decisions.',
    content: `Selecting a technology stack is less about finding the "best" tools and more about matching constraints: team skills, timeline, integration needs, compliance, and how long you expect the product to evolve. Start by listing non-negotiable requirements — data residency, offline support, existing ERP connections — before comparing React vs. Vue or AWS vs. Azure.

We recommend documenting two or three viable options with explicit trade-offs rather than a single recommendation disguised as certainty. Consider operational costs: who will deploy, monitor, and patch the system in year two? A stack your team can maintain beats a fashionable one that creates dependency on external specialists.

Finally, plan for change. Modular boundaries, automated tests on critical paths, and infrastructure as code make future migrations less painful. The goal is a decision you can explain to stakeholders and revisit with evidence, not a permanent lock-in on day one.`,
    category: 'Technology',
    author: 'TechMitra Editorial (Sample)',
    date: '2026-01-15',
    readTime: '6 min read',
    featured: true,
    isSample: true,
  },
  {
    slug: 'practical-ai-integration-business-apps',
    title: 'Practical AI Integration in Business Applications',
    excerpt:
      'Where large language models add value in real products — and where simpler automation is the better first step.',
    content: `AI features attract attention, but durable value comes from narrow, measurable use cases: summarizing support tickets, extracting fields from documents, or improving search over internal knowledge bases. Begin with a workflow your users already perform manually and define success criteria — accuracy thresholds, time saved, or reduction in escalations.

Grounding models in approved data through retrieval reduces hallucination risk compared to open-ended prompts. Design human review paths for high-stakes outputs and log prompts and responses (with privacy controls) so quality can be monitored over time. Cost and latency matter at scale; cache frequent queries and batch processing where real-time responses are unnecessary.

Treat AI as an evolving component, not a one-time integration. Models, pricing, and provider APIs change. Build abstraction layers and evaluation suites so you can swap components without rewriting the entire product.`,
    category: 'AI',
    author: 'TechMitra Editorial (Sample)',
    date: '2026-02-03',
    readTime: '7 min read',
    featured: true,
    isSample: true,
  },
  {
    slug: 'modern-web-performance-checklist',
    title: 'A Modern Web Performance Checklist for Product Teams',
    excerpt:
      'Core Web Vitals, asset strategy, and backend patterns that keep web applications fast as they grow.',
    content: `Performance is a feature users feel before they read your marketing copy. Start with measurement: real-user monitoring in production plus lab tests on representative pages and devices. Largest Contentful Paint often ties to hero images and font loading — use responsive images, modern formats, and preload only what the initial view needs.

JavaScript bundle size remains a common bottleneck. Code-split routes, defer non-critical scripts, and audit third-party tags that marketing adds over time. On the server, caching strategies — CDN edge cache, HTTP cache headers, and query optimization — reduce time-to-first-byte without hiding stale data where accuracy is critical.

Performance work is ongoing. Set budgets in CI for bundle size regressions, review new features for media weight, and revisit after major launches. Small incremental wins compound into measurably better experiences.`,
    category: 'Web Development',
    author: 'TechMitra Editorial (Sample)',
    date: '2026-02-20',
    readTime: '5 min read',
    featured: false,
    isSample: true,
  },
  {
    slug: 'cloud-cost-governance-basics',
    title: 'Cloud Cost Governance Basics for Growing Teams',
    excerpt:
      'Tagging, budgets, and architectural habits that prevent surprise cloud bills as usage scales.',
    content: `Cloud spending grows quietly when environments multiply — dev sandboxes left running, oversized instances, and unmonitored storage buckets. Establish tagging standards early (environment, product, cost center) so finance and engineering share the same view of spend.

Right-sizing and scheduled shutdown of non-production resources deliver quick wins without sacrificing developer productivity. Reserved capacity or savings plans may help steady-state production workloads once usage patterns stabilize. Review data transfer paths: cross-region traffic and unoptimized media delivery often hide in line items rather than headline compute costs.

Cost governance is a collaboration between engineering and operations. Monthly reviews with actionable tickets — resize, archive, or refactor — keep cloud investment aligned with business value rather than reactive firefighting after invoice shock.`,
    category: 'Cloud',
    author: 'TechMitra Editorial (Sample)',
    date: '2026-03-08',
    readTime: '6 min read',
    featured: false,
    isSample: true,
  },
  {
    slug: 'secure-sdlc-small-teams',
    title: 'Building a Secure SDLC Without Slowing Small Teams',
    excerpt:
      'Lightweight security practices — dependency scanning, secrets hygiene, and review checkpoints — that fit agile delivery.',
    content: `Security programs fail when they exist only as annual audits disconnected from daily development. Integrate basics into the pipeline: dependency scanning on pull requests, secret detection in repositories, and branch protection rules that require review before merge to main.

Threat modeling does not require month-long workshops. A one-page diagram of data flows, trust boundaries, and external integrations surfaces obvious gaps — missing authentication on admin routes, PII in logs, or upload endpoints without validation. Fix high-severity items before launch; schedule medium items in the backlog with owners.

Developers adopt practices that are automated and fast. Provide secure defaults in starter templates — HTTP security headers, environment-based configuration, and examples of parameterized queries — so new services begin from a safer baseline.`,
    category: 'Cybersecurity',
    author: 'TechMitra Editorial (Sample)',
    date: '2026-03-22',
    readTime: '5 min read',
    featured: true,
    isSample: true,
  },
  {
    slug: 'design-systems-scale-startups',
    title: 'When (and How) Startups Should Invest in Design Systems',
    excerpt:
      'Signals that a component library will pay off — and how to start small without blocking shipping speed.',
    content: `Design systems make sense when inconsistency slows development or dilutes brand trust — multiple button styles, conflicting spacing, and engineers rebuilding the same modal for every feature. Before a full system, audit recurring UI patterns and extract the top ten components used across flows.

Start with tokens for color, typography, and spacing plus a handful of primitives: buttons, inputs, alerts, and layout grids. Document usage in Storybook or Figma with do-and-don't examples. Pair designers and developers on ownership so the library reflects real constraints, not idealized comps.

Avoid premature abstraction. A design system should accelerate delivery, not become a separate product with its own backlog paralysis. Expand components as patterns prove stable across two or more features.`,
    category: 'Design',
    author: 'TechMitra Editorial (Sample)',
    date: '2026-04-05',
    readTime: '6 min read',
    featured: false,
    isSample: true,
  },
  {
    slug: 'fixed-scope-vs-time-materials',
    title: 'Fixed Scope vs. Time and Materials: Choosing an Engagement Model',
    excerpt:
      'How to pick a commercial model that matches uncertainty, budget control, and the way your team collaborates.',
    content: `Fixed-scope contracts work when requirements are well understood and change is unlikely before launch. They give budget predictability but require disciplined change control when new priorities emerge mid-project. Under-scoped fixed bids often lead to cut corners or adversarial change requests.

Time-and-materials engagements suit exploratory work, evolving products, and situations where stakeholder feedback will reshape priorities. Transparency in timesheets and weekly progress builds trust, but clients need active product ownership to avoid endless expansion without decisions.

Hybrid approaches are common: fixed discovery and architecture phase, then T&M for implementation with capped sprints and regular reprioritization. Discuss risk allocation openly — who owns unknown integrations, third-party delays, or compliance surprises — before signing.`,
    category: 'Business',
    author: 'TechMitra Editorial (Sample)',
    date: '2026-04-18',
    readTime: '5 min read',
    featured: false,
    isSample: true,
  },
  {
    slug: 'api-versioning-strategies',
    title: 'API Versioning Strategies That Minimize Client Disruption',
    excerpt:
      'URL paths, headers, and deprecation policies that keep integrators confident as your platform evolves.',
    content: `APIs outlive first-generation mobile apps and partner integrations. Versioning strategy should be chosen early and communicated in developer documentation. URL path versioning (/v1/, /v2/) is explicit and easy to route; header-based versioning keeps URLs stable but demands client discipline.

Breaking changes — removing fields, altering semantics — require new versions and migration windows. Prefer additive changes within a version when possible: optional fields, new endpoints, and feature flags for behavior toggles. Publish deprecation timelines with sunset dates and monitoring on legacy endpoint traffic.

Automated contract tests and OpenAPI specs help catch accidental breaks before release. Treat external API consumers as users with their own upgrade cycles; provide changelogs, sandbox environments, and support channels during migrations.`,
    category: 'Web Development',
    author: 'TechMitra Editorial (Sample)',
    date: '2026-05-02',
    readTime: '6 min read',
    featured: false,
    isSample: true,
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

export function getFeaturedPost() {
  return blogPosts.find((post) => post.featured) ?? blogPosts[0] ?? null;
}

export function getPostsByCategory(category) {
  return blogPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase(),
  );
}

export default blogPosts;
