/**
 * Sample case studies — all marked isSample: true. Replace with real projects when available.
 */
export const projectCategories = [
  'Web Application',
  'Mobile App',
  'SaaS Platform',
  'E-Commerce',
  'Integration',
  'Internal Tool',
];

export const projectTechnologies = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'React Native',
  'PostgreSQL',
  'AWS',
  'Python',
  'Flutter',
  'Stripe',
  'GraphQL',
  'Docker',
];

export const projects = [
  {
    slug: 'sample-patient-portal',
    title: '[Sample] Patient Appointment Portal',
    isSample: true,
    client: 'Sample Client — Healthcare Provider',
    category: 'Web Application',
    industry: 'healthcare',
    featured: true,
    summary:
      'A demo case study describing a secure patient portal for scheduling, reminders, and account management integrated with clinic workflows.',
    challenge:
      'The sample scenario involved a regional clinic network relying on phone-based scheduling, leading to long hold times, missed appointments, and staff overload.',
    research:
      'User interviews (synthetic scenario) highlighted demand for self-service booking, SMS reminders, and clear pre-visit instructions. Staff needed a single view of daily appointments.',
    strategy:
      'Prioritize online booking and reminders for the first release; defer billing views to a later phase. Integrate with existing calendar APIs rather than replacing core EHR functions.',
    design:
      'Mobile-first flows with large tap targets, plain-language forms, and accessibility contrast checks. Admin views optimized for front-desk quick actions.',
    architecture:
      'React frontend, Node.js API layer, PostgreSQL for appointments, Redis for session cache. HL7/FHIR-style integration adapter (conceptual) for EHR sync.',
    development:
      'Delivered in three milestones: authentication and profile, booking engine, notifications. Automated tests on booking rules and timezone handling.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'TypeScript'],
    results: [
      'Demonstrated reduction in phone scheduling volume in pilot scenario documentation',
      'Improved appointment reminder reach via email and SMS channels',
      'Staff reported faster check-in through consolidated daily lists',
      'Foundation documented for future telehealth module expansion',
    ],
    screenshots: [
      { id: 'dashboard', label: 'Patient dashboard', gradient: 'from-teal-500 to-cyan-600' },
      { id: 'booking', label: 'Booking flow', gradient: 'from-emerald-400 to-teal-500' },
      { id: 'admin', label: 'Front desk admin', gradient: 'from-slate-600 to-slate-800' },
    ],
    feedback: {
      quote:
        'Sample testimonial — the portal gave our front desk breathing room during peak hours and patients appreciated booking on their own schedule.',
      author: 'Operations Director (Sample)',
      isSample: true,
    },
  },
  {
    slug: 'sample-field-service-app',
    title: '[Sample] Field Service Mobile App',
    isSample: true,
    client: 'Sample Client — Logistics Operator',
    category: 'Mobile App',
    industry: 'logistics',
    featured: true,
    summary:
      'Demo project for a cross-platform mobile app supporting drivers with route lists, proof-of-delivery capture, and offline sync.',
    challenge:
      'Drivers in the sample scenario used paper manifests and phone photos, causing delayed updates and disputes over delivery confirmation.',
    research:
      'Ride-along observations (fictional) noted intermittent connectivity at rural stops and need for barcode scanning at warehouse handoff.',
    strategy:
      'Build offline-first mobile client with background sync; integrate with existing dispatch API; roll out to one depot before wider release.',
    design:
      'High-contrast UI for outdoor use, minimal steps per stop, camera capture with compression, clear sync status indicators.',
    architecture:
      'React Native app with local SQLite store, sync queue, and REST backend on AWS. Push notifications for route changes.',
    development:
      'Implemented offline queue with conflict resolution rules, POD photo upload with retry, and admin dashboard for exception monitoring.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript'],
    results: [
      'Sample documentation shows faster status updates upon return to connectivity',
      'Reduced photo-sharing via personal messaging apps among drivers',
      'Dispatch gained near-real-time exception visibility in demo environment',
      'Structured POD records supported dispute resolution workflows in scenario',
    ],
    screenshots: [
      { id: 'route-list', label: 'Daily route list', gradient: 'from-blue-500 to-indigo-600' },
      { id: 'pod', label: 'Proof of delivery', gradient: 'from-violet-500 to-purple-600' },
      { id: 'sync', label: 'Offline sync status', gradient: 'from-sky-400 to-blue-500' },
    ],
    feedback: {
      quote:
        'Sample feedback — drivers adapted quickly because the app mirrored their existing stop sequence without extra paperwork.',
      author: 'Fleet Supervisor (Sample)',
      isSample: true,
    },
  },
  {
    slug: 'sample-saas-analytics',
    title: '[Sample] B2B SaaS Analytics Dashboard',
    isSample: true,
    client: 'Sample Client — Technology Startup',
    category: 'SaaS Platform',
    industry: 'technology',
    featured: true,
    summary:
      'Illustrative SaaS platform with multi-tenant analytics, subscription billing, and team collaboration features.',
    challenge:
      'The fictional startup needed to move from spreadsheet reporting for early customers to a scalable product with plan-based feature access.',
    research:
      'Customer development interviews (sample) identified dashboard customization and CSV export as must-haves for initial paid tier.',
    strategy:
      'Launch MVP with core metrics widgets, Stripe billing, and email invites; add custom dashboards in phase two based on usage telemetry.',
    design:
      'Modular widget library, drag-and-drop layout (phase two), consistent chart styling, empty states guiding first-time setup.',
    architecture:
      'Next.js frontend, multi-tenant PostgreSQL with row-level tenant isolation, background workers for report generation, Stripe webhooks.',
    development:
      'Built tenant onboarding, RBAC roles, widget API, and export jobs. Load-tested report generation path with representative datasets.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'TypeScript'],
    results: [
      'Sample metrics show shortened onboarding time with guided setup wizard',
      'Subscription upgrades handled through self-service billing portal in demo',
      'Export feature reduced ad-hoc data requests in fictional support logs',
      'Architecture documented for horizontal scaling of worker tier',
    ],
    screenshots: [
      { id: 'overview', label: 'Analytics overview', gradient: 'from-indigo-500 to-blue-600' },
      { id: 'billing', label: 'Billing settings', gradient: 'from-amber-400 to-orange-500' },
      { id: 'widgets', label: 'Widget configuration', gradient: 'from-rose-400 to-pink-500' },
    ],
    feedback: {
      quote:
        'Sample quote — having billing and analytics in one place let us focus on sales instead of manual account provisioning.',
      author: 'Founder (Sample)',
      isSample: true,
    },
  },
  {
    slug: 'sample-retail-storefront',
    title: '[Sample] Omnichannel Retail Storefront',
    isSample: true,
    client: 'Sample Client — Mid-size Retailer',
    category: 'E-Commerce',
    industry: 'retail',
    featured: false,
    summary:
      'Demo headless commerce build connecting online catalog, inventory sync, and streamlined checkout for a multi-location retailer.',
    challenge:
      'Online and in-store inventory discrepancies and a slow legacy storefront limited confidence in buy-online-pickup-in-store options.',
    research:
      'Sample analysis of cart abandonment pointed to shipping cost surprise and account creation friction at checkout.',
    strategy:
      'Headless frontend for performance; real-time inventory checks against ERP adapter; guest checkout with optional account creation post-purchase.',
    design:
      'Category navigation with faceted search, prominent BOPIS selector, trust signals at checkout, responsive imagery with lazy loading.',
    architecture:
      'Next.js storefront, commerce API middleware, ERP integration service, Elasticsearch for search, CDN for static assets.',
    development:
      'Catalog sync jobs, cart and checkout flows, payment provider integration, admin tooling for merchandising overrides.',
    technologies: ['Next.js', 'Node.js', 'Elasticsearch', 'Stripe', 'AWS', 'TypeScript'],
    results: [
      'Sample pilot noted improved page load scores versus previous theme',
      'Inventory accuracy improved in documented test scenarios with sync jobs',
      'BOPIS option usage increased in fictional A/B comparison notes',
      'Merchandising team gained scheduled publish capability',
    ],
    screenshots: [
      { id: 'catalog', label: 'Product catalog', gradient: 'from-orange-400 to-red-500' },
      { id: 'checkout', label: 'Checkout flow', gradient: 'from-lime-400 to-green-500' },
      { id: 'bopis', label: 'Pickup selector', gradient: 'from-yellow-400 to-amber-500' },
    ],
    feedback: {
      quote:
        'Sample feedback — synchronized inventory finally made our online promotions trustworthy for store managers.',
      author: 'E-Commerce Manager (Sample)',
      isSample: true,
    },
  },
  {
    slug: 'sample-erp-integration',
    title: '[Sample] ERP & CRM Integration Hub',
    isSample: true,
    client: 'Sample Client — Manufacturing Company',
    category: 'Integration',
    industry: 'manufacturing',
    featured: false,
    summary:
      'Demonstration integration layer syncing orders, inventory, and customer records between ERP and CRM with auditable job processing.',
    challenge:
      'Sales and operations teams in the sample org maintained duplicate customer records and manual CSV transfers twice daily.',
    research:
      'Process mapping revealed eight handoff points with no centralized error queue when sync failed silently.',
    strategy:
      'Introduce middleware with canonical data model, idempotent sync jobs, and admin UI for replay and conflict resolution.',
    design:
      'Operations dashboard showing job status, error detail, and manual override forms for edge cases.',
    architecture:
      'Python worker services, message queue for jobs, PostgreSQL staging tables, REST adapters for ERP and CRM APIs.',
    development:
      'Implemented entity mapping, retry policies, dead-letter handling, and reconciliation reports for finance review.',
    technologies: ['Python', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL'],
    results: [
      'Sample documentation cites elimination of twice-daily manual CSV routine',
      'Conflict queue provided visibility into mismatched account records',
      'Reconciliation reports supported month-end close in demo scenario',
      'Extensible adapter pattern documented for future WMS connection',
    ],
    screenshots: [
      { id: 'jobs', label: 'Sync job monitor', gradient: 'from-cyan-500 to-blue-600' },
      { id: 'errors', label: 'Error resolution', gradient: 'from-red-400 to-rose-500' },
      { id: 'mapping', label: 'Field mapping config', gradient: 'from-gray-500 to-slate-600' },
    ],
    feedback: {
      quote:
        'Sample quote — we finally had one place to see why an order did not appear in the ERP overnight.',
      author: 'IT Manager (Sample)',
      isSample: true,
    },
  },
  {
    slug: 'sample-learning-platform',
    title: '[Sample] Corporate Learning Portal',
    isSample: true,
    client: 'Sample Client — Enterprise L&D Team',
    category: 'Web Application',
    industry: 'education',
    featured: true,
    summary:
      'Sample learning portal with course catalogs, progress tracking, and manager reporting for internal workforce training.',
    challenge:
      'Training content scattered across shared drives with no consistent progress tracking or completion certificates.',
    research:
      'Sample surveys indicated mobile access during commutes and short module lengths improved completion rates.',
    strategy:
      'SCORM-compatible module hosting for phase one; SSO with corporate identity provider; manager dashboards in phase two.',
    design:
      'Clear learning paths, progress bars, accessible video player, certificate download upon completion.',
    architecture:
      'React SPA, Node.js API, PostgreSQL for enrollments and progress, S3 for media, SSO via SAML integration pattern.',
    development:
      'Built course admin, learner dashboard, quiz engine, and reporting exports. Accessibility review on navigation and forms.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript'],
    results: [
      'Sample rollout showed higher course completion versus prior email-based links',
      'Managers gained team progress visibility without HR spreadsheet requests',
      'Certificate generation automated for compliance tracking in demo org',
      'SSO reduced account provisioning overhead in fictional IT tickets',
    ],
    screenshots: [
      { id: 'catalog', label: 'Course catalog', gradient: 'from-fuchsia-400 to-purple-500' },
      { id: 'player', label: 'Lesson player', gradient: 'from-teal-400 to-emerald-500' },
      { id: 'reports', label: 'Manager reports', gradient: 'from-blue-400 to-indigo-500' },
    ],
    feedback: {
      quote:
        'Sample testimonial — consolidating training in one portal made audit season significantly less stressful.',
      author: 'L&D Lead (Sample)',
      isSample: true,
    },
  },
  {
    slug: 'sample-property-listings',
    title: '[Sample] Property Listings Platform',
    isSample: true,
    client: 'Sample Client — Real Estate Agency',
    category: 'Web Application',
    industry: 'real-estate',
    featured: false,
    summary:
      'Demo listings site with advanced search, agent profiles, and lead capture integrated with a CRM webhook flow.',
    challenge:
      'Outdated website with poor mobile experience and leads lost when agents failed to follow up from generic contact forms.',
    research:
      'Sample analytics review showed majority of traffic from mobile search with high bounce on slow image galleries.',
    strategy:
      'Rebuild frontend with optimized media delivery, structured listing data, and CRM-routed lead forms per property.',
    design:
      'Map and list dual view, filter by price and location, agent CTAs on each listing, lazy-loaded image galleries.',
    architecture:
      'Next.js with ISR for listing pages, headless CMS for content, search service, webhook integration to CRM.',
    development:
      'Migration scripts for legacy listings, SEO metadata templates, lead routing rules, and admin preview workflow.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript'],
    results: [
      'Sample performance audit showed improved mobile load behavior in lab tests',
      'Lead routing reduced ambiguous inbox entries in fictional CRM review',
      'Agents gained self-service profile and listing highlight controls',
      'Structured data improved search engine snippet presentation in demo checks',
    ],
    screenshots: [
      { id: 'search', label: 'Search results', gradient: 'from-stone-400 to-zinc-600' },
      { id: 'listing', label: 'Listing detail', gradient: 'from-amber-300 to-yellow-500' },
      { id: 'lead', label: 'Lead capture form', gradient: 'from-green-400 to-teal-500' },
    ],
    feedback: {
      quote:
        'Sample feedback — property-specific lead routing meant agents responded while interest was still high.',
      author: 'Agency Principal (Sample)',
      isSample: true,
    },
  },
  {
    slug: 'sample-internal-ops-tool',
    title: '[Sample] Internal Operations Console',
    isSample: true,
    client: 'Sample Client — Hospitality Group',
    category: 'Internal Tool',
    industry: 'hospitality',
    featured: false,
    summary:
      'Illustrative operations console unifying housekeeping tasks, maintenance tickets, and daily property checklists.',
    challenge:
      'Property managers in the sample scenario juggled radio requests, paper checklists, and a legacy ticketing email chain.',
    research:
      'Shadowing sessions (fictional) showed housekeeping staff preferred tablet-friendly simple task lists over full desktop suites.',
    strategy:
      'Single property pilot, role-based views for housekeeping vs. maintenance vs. management, SMS/email alerts for urgent items.',
    design:
      'Large status chips, room-centric navigation, photo attach on maintenance issues, end-of-shift summary screen.',
    architecture:
      'React admin app, Node.js API, PostgreSQL, WebSocket for live board updates, mobile-responsive layouts.',
    development:
      'Task assignment engine, checklist templates, notification rules, and export for weekly management review.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'TypeScript'],
    results: [
      'Sample pilot notes faster room turnaround visibility for front desk',
      'Maintenance backlog prioritized through shared urgent queue in demo',
      'Daily checklist compliance tracked without paper binders in scenario',
      'Management weekly export replaced manual copy-paste summaries',
    ],
    screenshots: [
      { id: 'board', label: 'Operations board', gradient: 'from-purple-400 to-violet-600' },
      { id: 'room', label: 'Room detail view', gradient: 'from-pink-400 to-rose-500' },
      { id: 'checklist', label: 'Daily checklist', gradient: 'from-cyan-300 to-teal-400' },
    ],
    feedback: {
      quote:
        'Sample quote — staff stopped asking three times who cleared a room because the board showed live status.',
      author: 'Property Manager (Sample)',
      isSample: true,
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export default projects;
