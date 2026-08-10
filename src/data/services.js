/**
 * TechMitra service offerings.
 * icon: Phosphor icon name (string) for use with @phosphor-icons/react or similar.
 */
export const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDescription:
      'Custom websites and web applications built for performance, accessibility, and long-term maintainability.',
    longDescription:
      'We design and develop modern web experiences — from marketing sites and customer portals to complex multi-tenant applications. Our approach emphasizes responsive layouts, semantic markup, API-driven architecture, and deployment pipelines that support continuous delivery.',
    businessChallenge:
      'Organizations need web properties that load quickly, work across devices, integrate with existing systems, and can evolve without costly rewrites.',
    solution:
      'We deliver tailored web solutions using proven frameworks and component-based frontends, backed by scalable APIs and cloud-ready hosting configurations.',
    capabilities: [
      'Single-page and multi-page applications',
      'Progressive Web Apps (PWA)',
      'Content management integrations',
      'SEO-friendly server and client rendering',
      'Third-party API and payment integrations',
      'Performance optimization and Core Web Vitals',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    benefits: [
      'Faster time-to-market with iterative delivery',
      'Accessible, mobile-first user experiences',
      'Codebases structured for team handoff and growth',
      'Monitoring and analytics integration from day one',
    ],
    workflow: [
      'Requirements and technical discovery',
      'Information architecture and UI design',
      'Frontend and backend implementation',
      'QA, accessibility review, and launch',
      'Post-launch optimization and support',
    ],
    faqs: [
      {
        q: 'Do you build both frontend and backend?',
        a: 'Yes. We deliver full-stack web applications or can focus on frontend or backend depending on your team structure.',
      },
      {
        q: 'Can you work with our existing CMS?',
        a: 'We integrate with headless CMS platforms and traditional systems like WordPress when that best fits your content workflow.',
      },
    ],
    icon: 'Globe',
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Development',
    shortDescription:
      'Native and cross-platform mobile apps that deliver consistent experiences on iOS and Android.',
    longDescription:
      'We build mobile applications for field teams, consumer products, and internal tools. Whether you need a native feel, shared codebase efficiency, or offline-capable workflows, we align platform choice with your users, budget, and release timeline.',
    businessChallenge:
      'Mobile users expect fast, reliable apps with offline support, push notifications, and secure access to backend services — often under tight release schedules.',
    solution:
      'We develop mobile apps with clear navigation, robust API integration, app store compliance, and analytics to measure adoption and performance.',
    capabilities: [
      'Cross-platform development (React Native, Flutter)',
      'Native iOS and Android modules when required',
      'Offline sync and local storage',
      'Push notifications and deep linking',
      'App Store and Play Store submission support',
      'Mobile-specific security (biometrics, secure storage)',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'REST & GraphQL APIs'],
    benefits: [
      'Consistent branding across platforms',
      'Reduced duplication with shared business logic',
      'Structured release and beta testing process',
      'Performance profiling and crash monitoring setup',
    ],
    workflow: [
      'Platform and architecture decision',
      'UX flows and mobile-specific design',
      'Sprint-based development with device testing',
      'Beta distribution and store submission',
      'Maintenance and OS compatibility updates',
    ],
    faqs: [
      {
        q: 'Native or cross-platform — how do you decide?',
        a: 'We weigh factors like performance needs, device APIs, team skills, timeline, and long-term maintenance. We document the recommendation before build.',
      },
      {
        q: 'Do you handle app store publishing?',
        a: 'We can prepare builds, metadata, and guide you through submission, or manage releases under agreed access.',
      },
    ],
    icon: 'DeviceMobile',
  },
  {
    slug: 'software-development',
    title: 'Custom Software Development',
    shortDescription:
      'Bespoke business applications tailored to your workflows, data models, and integration requirements.',
    longDescription:
      'When off-the-shelf products do not fit, we build custom software — internal tools, workflow automation platforms, data processing pipelines, and line-of-business applications designed around how your organization actually operates.',
    businessChallenge:
      'Generic software forces teams into workarounds, duplicate data entry, and manual processes that slow operations and increase error rates.',
    solution:
      'We capture domain logic in purpose-built applications with role-based access, audit trails, and integrations to your existing ERP, CRM, or databases.',
    capabilities: [
      'Line-of-business application development',
      'Workflow and approval engines',
      'Reporting and dashboard modules',
      'Legacy system modernization',
      'Multi-tenant and role-based architectures',
      'Batch processing and scheduled jobs',
    ],
    technologies: ['Java', 'C#/.NET', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
    benefits: [
      'Software aligned to actual business processes',
      'Reduced manual work and data silos',
      'Documented architecture for future enhancements',
      'Integration with tools your teams already use',
    ],
    workflow: [
      'Domain modeling and process mapping',
      'Technical specification and prototyping',
      'Modular development with demos',
      'User acceptance testing',
      'Training, deployment, and handoff',
    ],
    faqs: [
      {
        q: 'How do you prevent scope creep on custom projects?',
        a: 'We use phased delivery with signed-off milestones, change request process, and a prioritized backlog so new ideas are captured without derailing core delivery.',
      },
      {
        q: 'Can you maintain software built by another vendor?',
        a: 'We often take over existing codebases after a technical audit. We assess quality, risks, and a stabilization plan before committing.',
      },
    ],
    icon: 'Code',
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    shortDescription:
      'Multi-tenant SaaS platforms with subscription billing, onboarding, and scalable infrastructure.',
    longDescription:
      'We help founders and product teams build SaaS products from MVP through growth stages — including tenant isolation, subscription management, admin consoles, usage metering, and the operational tooling needed to run a software business.',
    businessChallenge:
      'Launching SaaS requires more than features: billing, onboarding, security boundaries between tenants, and observability must work reliably from early customers onward.',
    solution:
      'We implement SaaS foundations — auth, billing hooks, tenant models, and deployment automation — so you can focus on product differentiation.',
    capabilities: [
      'Multi-tenant data architecture',
      'Subscription and billing integration',
      'Self-service onboarding and trials',
      'Admin and analytics dashboards',
      'Feature flags and plan-based entitlements',
      'Usage tracking and rate limiting',
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Redis', 'React'],
    benefits: [
      'Production-ready SaaS patterns from the start',
      'Clear separation between tenant data and configs',
      'Billing and plan changes without custom rewrites',
      'Infrastructure that scales with customer growth',
    ],
    workflow: [
      'Product and tenant model design',
      'MVP feature prioritization',
      'Core platform and billing setup',
      'Beta with early adopters',
      'Hardening, monitoring, and growth features',
    ],
    faqs: [
      {
        q: 'Which billing providers do you integrate?',
        a: 'We commonly integrate Stripe and Paddle. Other providers are supported when they offer robust APIs and webhook models.',
      },
      {
        q: 'How do you handle tenant isolation?',
        a: 'Approaches range from schema-per-tenant to row-level isolation. We recommend based on compliance needs, scale, and operational complexity.',
      },
    ],
    icon: 'CloudArrowUp',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription:
      'User-centered design that clarifies flows, strengthens brand presence, and improves conversion and usability.',
    longDescription:
      'Our design practice covers research, information architecture, wireframing, visual design, and design systems. We create interfaces that balance aesthetics with usability, accessibility standards, and developer-ready specifications.',
    businessChallenge:
      'Poor UX leads to abandoned flows, support burden, and low adoption — even when underlying technology is sound.',
    solution:
      'We map user journeys, test assumptions with prototypes, and deliver cohesive design systems that development teams can implement consistently.',
    capabilities: [
      'User research and journey mapping',
      'Wireframes and interactive prototypes',
      'Visual design and brand application',
      'Design systems and component libraries',
      'Accessibility (WCAG) review',
      'Developer handoff with specs and assets',
    ],
    technologies: ['Figma', 'Adobe XD', 'Design tokens', 'Storybook', 'Usability testing tools'],
    benefits: [
      'Reduced rework by validating flows early',
      'Consistent UI across products and teams',
      'Accessible patterns that widen your audience',
      'Clear handoff that speeds development',
    ],
    workflow: [
      'Discovery and user understanding',
      'Structure and wireframe iteration',
      'Visual design and component definition',
      'Prototype review with stakeholders',
      'Handoff and design QA during build',
    ],
    faqs: [
      {
        q: 'Do you design without development?',
        a: 'Yes. Design-only engagements include research, prototypes, and specifications suitable for your in-house or external dev team.',
      },
      {
        q: 'Can you audit an existing product UX?',
        a: 'We offer UX audits with prioritized recommendations covering navigation, forms, accessibility, and visual consistency.',
      },
    ],
    icon: 'PaintBrush',
  },
  {
    slug: 'ai-development',
    title: 'AI Development',
    shortDescription:
      'Practical AI features — search, classification, assistants, and automation — integrated responsibly into your products.',
    longDescription:
      'We help teams adopt AI where it adds measurable value: document processing, semantic search, chat assistants grounded in your data, recommendation logic, and workflow automation. We emphasize evaluation, guardrails, and cost control rather than hype.',
    businessChallenge:
      'Teams want AI capabilities but struggle with data readiness, model selection, latency, cost, and ensuring outputs are trustworthy for their users.',
    solution:
      'We design AI features with clear use cases, retrieval or fine-tuning strategies where appropriate, human-in-the-loop patterns, and monitoring for quality drift.',
    capabilities: [
      'LLM integration and prompt engineering',
      'Retrieval-augmented generation (RAG)',
      'Document parsing and classification',
      'Chat and copilot interfaces',
      'Model evaluation and benchmarking',
      'Cost and latency optimization',
    ],
    technologies: ['OpenAI API', 'LangChain', 'Python', 'Vector databases', 'Azure OpenAI', 'Hugging Face'],
    benefits: [
      'AI features tied to specific business outcomes',
      'Grounded responses using your approved data',
      'Documented limitations and fallback behavior',
      'Observable pipelines for quality and cost',
    ],
    workflow: [
      'Use case definition and feasibility',
      'Data preparation and pipeline design',
      'Prototype and evaluation against criteria',
      'Integration into product workflows',
      'Monitoring, feedback loops, and iteration',
    ],
    faqs: [
      {
        q: 'Do we need large amounts of data to start?',
        a: 'Not always. Many integrations use existing documents, FAQs, or structured records. We assess data quality and gaps during discovery.',
      },
      {
        q: 'How do you address AI accuracy concerns?',
        a: 'We use retrieval grounding, confidence thresholds, human review paths, and logging so teams can trace and improve responses over time.',
      },
    ],
    icon: 'Brain',
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDescription:
      'Cloud architecture, migration, and managed infrastructure on AWS, Azure, and Google Cloud.',
    longDescription:
      'We plan and implement cloud environments that match your reliability, compliance, and cost goals — from lift-and-shift migrations to cloud-native redesigns with auto-scaling, managed services, and disaster recovery.',
    businessChallenge:
      'On-premise or ad hoc cloud setups create cost overruns, single points of failure, and difficulty meeting security or compliance expectations.',
    solution:
      'We architect cloud landing zones, migrate workloads methodically, and implement cost monitoring, backup strategies, and infrastructure as code.',
    capabilities: [
      'Cloud readiness assessment',
      'Migration planning and execution',
      'Serverless and container workloads',
      'Networking, DNS, and CDN configuration',
      'Backup and disaster recovery',
      'Cost optimization and tagging strategy',
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'CloudFront'],
    benefits: [
      'Improved scalability and availability',
      'Documented infrastructure reproducible across environments',
      'Security baselines aligned with provider best practices',
      'Visibility into spend and resource utilization',
    ],
    workflow: [
      'Current state and target architecture review',
      'Migration or greenfield plan with rollback options',
      'Environment provisioning and workload move',
      'Validation, performance tuning, and cutover',
      'Runbooks and ongoing optimization',
    ],
    faqs: [
      {
        q: 'Which cloud provider do you recommend?',
        a: 'We are provider-agnostic. Choice depends on existing contracts, team skills, regional availability, and specific service requirements.',
      },
      {
        q: 'Can you reduce our existing cloud bill?',
        a: 'We review utilization, reserved capacity options, and architectural inefficiencies. Savings depend on current setup; we report findings before changes.',
      },
    ],
    icon: 'Cloud',
  },
  {
    slug: 'devops',
    title: 'DevOps',
    shortDescription:
      'CI/CD pipelines, infrastructure as code, and release automation for reliable, repeatable deployments.',
    longDescription:
      'We implement DevOps practices that shorten feedback loops — automated testing in pipelines, environment parity, container orchestration, and observability so teams ship confidently and recover quickly from incidents.',
    businessChallenge:
      'Manual deployments, inconsistent environments, and slow release cycles increase defects and make it hard to respond to business or security needs.',
    solution:
      'We build automated pipelines, standardize environments, and integrate monitoring and alerting aligned with your release and compliance requirements.',
    capabilities: [
      'CI/CD pipeline design and implementation',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Containerization and orchestration',
      'Secrets and configuration management',
      'Log aggregation and APM setup',
      'Incident response runbooks',
    ],
    technologies: ['GitHub Actions', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana'],
    benefits: [
      'Faster, lower-risk releases',
      'Reproducible environments from dev to production',
      'Clear visibility when issues occur',
      'Foundation for compliance and audit trails',
    ],
    workflow: [
      'Assessment of current delivery process',
      'Pipeline and IaC implementation',
      'Staging and production hardening',
      'Team training and documentation',
      'Continuous improvement and SLO definition',
    ],
    faqs: [
      {
        q: 'We deploy manually today — is automation worth it?',
        a: 'For most teams shipping regularly, yes. We start with high-impact steps — automated tests and staged deploys — before full pipeline maturity.',
      },
      {
        q: 'Do you support on-premise or hybrid setups?',
        a: 'Yes. We adapt tooling for hybrid models where some workloads remain on-premise or in private data centers.',
      },
    ],
    icon: 'GitBranch',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    shortDescription:
      'Security assessments, hardening, and secure development practices to protect applications and data.',
    longDescription:
      'We help organizations identify vulnerabilities, implement security controls, and embed secure coding practices into delivery. Services include application reviews, dependency scanning, access model design, and guidance for compliance-oriented environments.',
    businessChallenge:
      'Applications face evolving threats — misconfigurations, outdated dependencies, weak authentication, and insufficient logging leave organizations exposed.',
    solution:
      'We combine automated scanning with manual review, prioritize remediation, and work with development teams to prevent recurrence through process and tooling.',
    capabilities: [
      'Application and API security review',
      'Dependency and supply chain scanning',
      'Authentication and authorization design',
      'Secrets management guidance',
      'Security headers and TLS configuration',
      'Incident preparedness documentation',
    ],
    technologies: ['OWASP tooling', 'SAST/DAST', 'Vault', 'WAF', 'SIEM integrations', 'Pen-test coordination'],
    benefits: [
      'Reduced attack surface through prioritized fixes',
      'Security requirements defined early in SDLC',
      'Better audit readiness with documented controls',
      'Developer awareness through practical guidance',
    ],
    workflow: [
      'Scope and threat model outline',
      'Automated and manual assessment',
      'Findings report with severity ranking',
      'Remediation support and verification',
      'Optional ongoing monitoring recommendations',
    ],
    faqs: [
      {
        q: 'Is this a replacement for formal penetration testing?',
        a: 'Our reviews complement specialized pen tests. For regulated industries, we coordinate with certified third-party testers when required.',
      },
      {
        q: 'Can you help with compliance frameworks?',
        a: 'We align technical controls with frameworks like SOC 2 or HIPAA-oriented requirements. Formal certification is handled by accredited assessors.',
      },
    ],
    icon: 'ShieldCheck',
  },
  {
    slug: 'erp-solutions',
    title: 'ERP Solutions',
    shortDescription:
      'ERP customization, integration, and extensions that connect finance, inventory, and operations.',
    longDescription:
      'We extend and integrate ERP platforms so data flows between sales, warehouse, finance, and custom applications without duplicate entry. Work includes module configuration, custom reports, API bridges, and middleware for legacy compatibility.',
    businessChallenge:
      'ERP systems are powerful but rigid — teams need custom workflows, external integrations, and reporting that standard modules do not provide out of the box.',
    solution:
      'We map business processes to ERP capabilities, build extensions where needed, and create reliable integrations with clear error handling and reconciliation.',
    capabilities: [
      'ERP module customization',
      'Third-party system integration',
      'Custom reporting and dashboards',
      'Data migration and validation',
      'Workflow automation around ERP events',
      'Training and documentation for end users',
    ],
    technologies: ['SAP', 'Oracle NetSuite', 'Microsoft Dynamics', 'Odoo', 'REST/SOAP APIs', 'ETL tools'],
    benefits: [
      'Single source of truth across departments',
      'Fewer manual exports and spreadsheet workarounds',
      'Integrations designed for failure recovery',
      'Reports tailored to operational decision-making',
    ],
    workflow: [
      'Process and data flow analysis',
      'Gap analysis against ERP capabilities',
      'Configuration, custom development, or integration build',
      'Parallel testing with finance and ops stakeholders',
      'Cutover planning and hypercare support',
    ],
    faqs: [
      {
        q: 'Which ERP platforms do you support?',
        a: 'We work with several major platforms and custom ERP-adjacent systems. Share your platform and version for a fit assessment.',
      },
      {
        q: 'Can you integrate ERP with our e-commerce or CRM?',
        a: 'Yes. Order, inventory, and customer sync are common integration patterns we implement with idempotent, auditable jobs.',
      },
    ],
    icon: 'Stack',
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce Development',
    shortDescription:
      'Online stores and marketplaces with catalog management, checkout, and fulfillment integrations.',
    longDescription:
      'We build e-commerce experiences on custom stacks or established platforms — handling product catalogs, search, cart and checkout, payment gateways, tax and shipping rules, and admin tools for merchandising teams.',
    businessChallenge:
      'E-commerce sites must handle peak traffic, accurate inventory, secure payments, and integrations with logistics — while staying fast and easy to merchandise.',
    solution:
      'We deliver storefronts with performance-focused frontends, reliable payment flows, and back-office integrations to ERP, WMS, and marketing tools.',
    capabilities: [
      'Custom storefront development',
      'Platform customization (Shopify, WooCommerce, etc.)',
      'Payment and tax provider integration',
      'Inventory and order sync',
      'Promotions, coupons, and loyalty hooks',
      'Analytics and conversion tracking',
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'Next.js', 'Elasticsearch', 'Headless CMS'],
    benefits: [
      'Checkout flows optimized for trust and clarity',
      'Merchandising tools matched to team workflow',
      'Integrations that keep inventory and orders accurate',
      'Performance tuning for catalog and search at scale',
    ],
    workflow: [
      'Catalog and fulfillment requirements',
      'UX for browse, cart, and checkout',
      'Platform build or customization',
      'Payment and shipping integration testing',
      'Launch, monitoring, and seasonal readiness',
    ],
    faqs: [
      {
        q: 'Headless or traditional e-commerce — which is better?',
        a: 'Headless offers frontend flexibility; traditional platforms speed time-to-market. We recommend based on catalog complexity, team skills, and budget.',
      },
      {
        q: 'Do you handle PCI compliance?',
        a: 'We use compliant payment providers and avoid storing card data directly. Full PCI scope depends on architecture; we document responsibilities clearly.',
      },
    ],
    icon: 'ShoppingCart',
  },
  {
    slug: 'consulting',
    title: 'IT Consulting',
    shortDescription:
      'Technology strategy, architecture reviews, and delivery guidance for teams planning their next move.',
    longDescription:
      'Our consulting engagements help leadership and product teams make informed decisions — technology roadmaps, build-vs-buy analysis, architecture assessments, vendor selection support, and interim technical leadership during transitions.',
    businessChallenge:
      'Without experienced technical guidance, organizations risk costly platform choices, unclear scope, or vendor relationships that do not align with long-term goals.',
    solution:
      'We provide structured assessments, written recommendations, and optional embedded support to execute on agreed priorities.',
    capabilities: [
      'Technology roadmap development',
      'Architecture and code quality reviews',
      'Build vs. buy analysis',
      'Vendor and tool evaluation',
      'Interim CTO / tech lead support',
      'Due diligence for acquisitions or investments',
    ],
    technologies: ['Architecture diagrams', 'Cost modeling', 'Risk registers', 'Agile delivery frameworks'],
    benefits: [
      'Decisions backed by documented analysis',
      'Reduced risk before major investments',
      'Alignment between business and engineering leadership',
      'Actionable next steps rather than generic reports',
    ],
    workflow: [
      'Stakeholder interviews and data gathering',
      'Analysis and option comparison',
      'Presentation of findings and recommendations',
      'Optional implementation planning',
      'Follow-up checkpoints as needed',
    ],
    faqs: [
      {
        q: 'How long does a typical consulting engagement last?',
        a: 'Assessments often run two to six weeks depending on scope. Advisory retainers can extend for ongoing guidance.',
      },
      {
        q: 'Will you implement what you recommend?',
        a: 'Implementation is optional. Many clients engage us for delivery after approving the roadmap; others use internal teams with our documentation.',
      },
    ],
    icon: 'ChatsCircle',
  },
  {
    slug: 'automation',
    title: 'Automation',
    shortDescription:
      'Workflow automation, RPA-adjacent scripts, and integration bots that eliminate repetitive manual work.',
    longDescription:
      'We automate repetitive business processes — data entry between systems, scheduled reports, approval routing, file processing, and notification workflows — using reliable scripts, low-code platforms, or custom services with proper logging and error handling.',
    businessChallenge:
      'Teams lose hours to copy-paste between spreadsheets, emails, and legacy tools, introducing delays and human error.',
    solution:
      'We identify high-volume, rule-based tasks and replace them with monitored automations that integrate with your existing software.',
    capabilities: [
      'Business process automation',
      'Scheduled jobs and ETL pipelines',
      'Email and document processing workflows',
      'Integration with SaaS via APIs and webhooks',
      'Human approval steps where required',
      'Monitoring and failure alerts',
    ],
    technologies: ['Python', 'Node.js', 'Zapier/Make', 'Airflow', 'Power Automate', 'REST APIs'],
    benefits: [
      'Time returned to staff for higher-value work',
      'Consistent execution of repeatable tasks',
      'Audit logs for automated actions',
      'Incremental automation without big-bang projects',
    ],
    workflow: [
      'Process observation and ROI estimation',
      'Automation design with exception handling',
      'Build, test with real data samples',
      'Pilot with limited users',
      'Scale, monitor, and refine rules',
    ],
    faqs: [
      {
        q: 'What processes are good candidates for automation?',
        a: 'High-volume, rule-based tasks with stable inputs — invoicing exports, CRM updates, report generation — are ideal starting points.',
      },
      {
        q: 'What happens when an automation fails?',
        a: 'We build retries, dead-letter queues, and alerts so failures are visible and recoverable without silent data loss.',
      },
    ],
    icon: 'Robot',
  },
  {
    slug: 'api-integration',
    title: 'API Integration',
    shortDescription:
      'Connect applications, data sources, and third-party services through robust, documented APIs.',
    longDescription:
      'We design and build APIs and integration layers that let your systems exchange data reliably — REST and GraphQL endpoints, webhook processors, middleware, and sync jobs with idempotency, rate limiting, and versioning.',
    businessChallenge:
      'Disconnected systems create data silos, stale records, and brittle point-to-point integrations that break when vendors change APIs.',
    solution:
      'We implement integration architectures with clear contracts, error handling, observability, and documentation so connections remain maintainable.',
    capabilities: [
      'REST and GraphQL API design',
      'Third-party SaaS integration',
      'Webhook receivers and event processing',
      'ETL and real-time sync patterns',
      'API versioning and deprecation strategy',
      'Developer portals and OpenAPI documentation',
    ],
    technologies: ['Node.js', 'Python', 'Kong', 'Apache Kafka', 'GraphQL', 'OpenAPI'],
    benefits: [
      'Reliable data flow between critical systems',
      'Reduced custom one-off scripts',
      'APIs other teams and partners can consume',
      'Monitoring for latency, errors, and throughput',
    ],
    workflow: [
      'Integration mapping and data contract definition',
      'API or middleware implementation',
      'Sandbox testing with partner systems',
      'Production rollout with feature flags',
      'Documentation and consumer onboarding',
    ],
    faqs: [
      {
        q: 'Can you integrate with legacy systems without modern APIs?',
        a: 'Often via database exports, file drops, or screen-scraping as a last resort. We document trade-offs and migration paths toward cleaner interfaces.',
      },
      {
        q: 'How do you handle API rate limits?',
        a: 'We implement backoff, queuing, and batching strategies aligned with provider limits, with metrics to tune concurrency.',
      },
    ],
    icon: 'PlugsConnected',
  },
  {
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    shortDescription:
      'Ongoing updates, monitoring, bug fixes, and enhancements for applications in production.',
    longDescription:
      'After launch, products need care — security patches, dependency updates, incident response, minor features, and performance tuning. Our maintenance engagements provide predictable support with defined SLAs and transparent reporting.',
    businessChallenge:
      'Without dedicated support, production issues linger, technical debt accumulates, and teams struggle to balance new features with stability.',
    solution:
      'We offer tiered support plans with ticket channels, scheduled health checks, and capacity for planned enhancements each cycle.',
    capabilities: [
      'Bug triage and resolution',
      'Security and dependency updates',
      'Uptime and performance monitoring',
      'Backup verification and restore drills',
      'Small feature and UI improvements',
      'Knowledge transfer and runbook updates',
    ],
    technologies: ['Monitoring stacks', 'Ticketing integrations', 'CI/CD for hotfixes', 'Log analysis tools'],
    benefits: [
      'Predictable response for production issues',
      'Proactive patching reduces emergency firefighting',
      'Continuity from the team that knows the codebase',
      'Roadmap capacity for incremental improvements',
    ],
    workflow: [
      'Support agreement and SLA definition',
      'Environment access and monitoring setup',
      'Regular health checks and patch cycles',
      'Incident handling and post-mortems',
      'Monthly reporting and backlog grooming',
    ],
    faqs: [
      {
        q: 'Do you support apps you did not build?',
        a: 'Yes, after a technical onboarding review. We assess codebase quality and document risks before accepting responsibility.',
      },
      {
        q: 'What SLAs are available?',
        a: 'Response times are defined per plan — business hours, extended coverage, or on-call for critical systems. Terms are customized in the agreement.',
      },
    ],
    icon: 'Wrench',
  },
];

/** Six primary services for home page and featured sections */
export const featuredServices = services.filter((s) =>
  [
    'web-development',
    'mobile-development',
    'saas-development',
    'cloud-solutions',
    'ai-development',
    'ui-ux-design',
  ].includes(s.slug),
);

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) ?? null;
}

export default services;
