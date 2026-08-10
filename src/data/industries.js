/**
 * Industries TechMitra serves — generic sector profiles without named client claims.
 */
export const industries = [
  {
    slug: 'healthcare',
    title: 'Healthcare',
    summary:
      'Digital solutions for clinics, health networks, and health-tech products — with attention to privacy, reliability, and clinical workflow fit.',
    challenges: [
      'Protecting sensitive patient data across systems',
      'Integrating with EHR, lab, and billing platforms',
      'Designing interfaces for clinical staff under time pressure',
      'Meeting regional healthcare privacy regulations',
    ],
    solutions: [
      'Patient portals and appointment scheduling applications',
      'Secure API integrations with existing health record systems',
      'Role-based access and comprehensive audit logging',
      'Telehealth and remote monitoring interfaces',
    ],
    securityNotes: [
      'Encryption in transit and at rest for PHI/PII',
      'Least-privilege access models and session management',
      'Alignment with applicable frameworks (e.g., HIPAA-oriented controls where required)',
      'Regular dependency and vulnerability monitoring',
    ],
    useCases: [
      'Appointment booking and reminder workflows',
      'Clinical staff dashboards and internal tools',
      'Lab result delivery with secure authentication',
      'Administrative reporting without exposing raw patient records',
    ],
    cta: 'Discuss a healthcare technology project',
  },
  {
    slug: 'education',
    title: 'Education',
    summary:
      'Learning platforms, admin tools, and student-facing applications for schools, universities, and ed-tech organizations.',
    challenges: [
      'Engaging diverse learner audiences across devices',
      'Managing roles for students, instructors, and administrators',
      'Handling enrollment spikes at term start',
      'Accessibility requirements for inclusive learning',
    ],
    solutions: [
      'Learning management extensions and custom portals',
      'Assessment, grading, and progress tracking modules',
      'Content delivery with offline or low-bandwidth options',
      'Integration with SIS and payment systems',
    ],
    securityNotes: [
      'Student data privacy controls and parental consent flows where applicable',
      'Secure authentication including SSO options',
      'Content access rules by course, cohort, or institution',
      'Backup and retention policies aligned with institutional policy',
    ],
    useCases: [
      'Course catalogs and registration systems',
      'Interactive assignment and quiz platforms',
      'Parent and student communication portals',
      'Analytics for instructors and academic administrators',
    ],
    cta: 'Plan an education technology initiative',
  },
  {
    slug: 'finance',
    title: 'Finance',
    summary:
      'Applications for financial services and fintech workflows — emphasizing accuracy, auditability, and secure transaction handling.',
    challenges: [
      'Strict accuracy and reconciliation requirements',
      'Regulatory and audit expectations for data handling',
      'High availability during business-critical periods',
      'Fraud prevention and access control',
    ],
    solutions: [
      'Customer-facing banking and investment portals',
      'Internal risk, compliance, and reporting tools',
      'Payment and ledger integration layers',
      'Automated reconciliation and exception workflows',
    ],
    securityNotes: [
      'Multi-factor authentication and device trust patterns',
      'Immutable audit trails for financial events',
      'Segregation of duties in admin and approval flows',
      'Coordination with compliance teams on retention and reporting',
    ],
    useCases: [
      'Account onboarding and KYC workflow support',
      'Portfolio and transaction dashboards',
      'Loan application and document collection portals',
      'Operational reporting for finance teams',
    ],
    cta: 'Explore fintech and finance software options',
  },
  {
    slug: 'retail',
    title: 'Retail',
    summary:
      'E-commerce, inventory, and customer experience platforms for retailers moving online or unifying omnichannel operations.',
    challenges: [
      'Accurate inventory across stores and warehouses',
      'Fast, trustworthy checkout experiences',
      'Personalization without compromising privacy',
      'Peak traffic during promotions and seasons',
    ],
    solutions: [
      'Custom storefronts and headless commerce architectures',
      'POS and ERP integration for unified stock views',
      'Loyalty, promotions, and customer account features',
      'Analytics for merchandising and conversion optimization',
    ],
    securityNotes: [
      'PCI-aware payment flows using certified providers',
      'Protection against common web application threats',
      'Secure admin access for catalog and pricing changes',
      'Monitoring for checkout and payment anomalies',
    ],
    useCases: [
      'B2C and B2B online catalogs',
      'Click-and-collect and ship-from-store workflows',
      'Staff tools for inventory lookup and order management',
      'Customer support portals with order history',
    ],
    cta: 'Build or improve your retail digital channel',
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    summary:
      'Booking, guest experience, and operations software for hotels, restaurants, and travel-related businesses.',
    challenges: [
      'Real-time availability across channels',
      'Guest expectations for mobile-first experiences',
      'Staff tools that work during high-volume periods',
      'Integration with PMS, POS, and channel managers',
    ],
    solutions: [
      'Direct booking engines and guest portals',
      'Housekeeping and operations dashboards',
      'Loyalty and membership program features',
      'Integration middleware for property management systems',
    ],
    securityNotes: [
      'Secure handling of guest personal and payment data',
      'Staff role permissions by property or department',
      'Session security for shared front-desk devices',
      'Logging for reservation and payment changes',
    ],
    useCases: [
      'Room and table reservation systems',
      'Guest check-in and digital concierge features',
      'Event and banquet management tools',
      'Multi-property reporting for operators',
    ],
    cta: 'Modernize hospitality guest and staff experiences',
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    summary:
      'Tracking, routing, and warehouse systems that improve visibility across supply chain and delivery operations.',
    challenges: [
      'Fragmented data from carriers, warehouses, and ERP',
      'Mobile tools for drivers and field staff in low-connectivity areas',
      'Real-time status expectations from customers',
      'Scaling systems during volume spikes',
    ],
    solutions: [
      'Shipment tracking portals and customer notifications',
      'Driver mobile apps with proof-of-delivery capture',
      'Warehouse management extensions and barcode workflows',
      'Integration hubs for carrier and ERP APIs',
    ],
    securityNotes: [
      'Device and API authentication for field applications',
      'Tamper-evident logging for delivery events',
      'Access controls for commercial shipment data',
      'Secure document storage for customs and compliance paperwork',
    ],
    useCases: [
      'Fleet dispatch and route optimization interfaces',
      'Customer self-service tracking pages',
      'Inventory movement and receiving workflows',
      'Exception handling for delays and damaged goods',
    ],
    cta: 'Improve logistics visibility and operations',
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    summary:
      'Shop floor, quality, and supply chain applications that connect production data with business systems.',
    challenges: [
      'Legacy equipment and modern software coexistence',
      'Traceability for quality and compliance',
      'Downtime costs from unreliable internal tools',
      'Integrating MES, ERP, and IoT data sources',
    ],
    solutions: [
      'Production dashboards and OEE reporting',
      'Quality inspection and non-conformance tracking',
      'Maintenance scheduling and work order apps',
      'Integration layers for ERP and shop floor systems',
    ],
    securityNotes: [
      'Network segmentation guidance for OT/IT boundaries',
      'Role-based access for plant vs. corporate users',
      'Audit logs for configuration and batch record changes',
      'Secure remote access patterns for vendor support',
    ],
    useCases: [
      'Digital work instructions on tablets',
      'Batch and lot traceability queries',
      'Supplier portal for PO and ASN visibility',
      'Executive dashboards aggregating plant KPIs',
    ],
    cta: 'Connect manufacturing data to decisions',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    summary:
      'Property listing, tenant, and transaction platforms for agencies, developers, and property managers.',
    challenges: [
      'Keeping listing data synchronized across channels',
      'Document-heavy lease and transaction workflows',
      'Mobile tools for agents in the field',
      'Managing multi-party visibility (owners, tenants, vendors)',
    ],
    solutions: [
      'Listing portals with search and media management',
      'Tenant and lease administration applications',
      'CRM extensions for agent pipeline tracking',
      'Document collection and e-signature integration',
    ],
    securityNotes: [
      'Access control by property, role, and transaction stage',
      'Secure storage for contracts and identity documents',
      'Activity logs for offer and lease status changes',
      'Privacy considerations for tenant and buyer data',
    ],
    useCases: [
      'Commercial and residential listing websites',
      'Maintenance request portals for tenants',
      'Investor reporting dashboards',
      'Open house scheduling and lead capture',
    ],
    cta: 'Develop real estate platforms that scale with your portfolio',
  },
  {
    slug: 'government',
    title: 'Government',
    summary:
      'Citizen-facing portals and internal systems for public sector agencies — emphasizing accessibility, transparency, and reliability.',
    challenges: [
      'Strict accessibility and procurement requirements',
      'Legacy system integration and data migration',
      'Public scrutiny of uptime and data handling',
      'Multi-stakeholder approval processes',
    ],
    solutions: [
      'Citizen service request and status portals',
      'Permit, licensing, and application workflows',
      'Internal case management and document routing',
      'Open data and reporting interfaces where appropriate',
    ],
    securityNotes: [
      'Hardened authentication options including SSO',
      'Data classification and retention aligned with policy',
      'Security reviews suitable for public sector procurement',
      'Disaster recovery and continuity planning',
    ],
    useCases: [
      'Online permit and license applications',
      'Public information and FAQ portals',
      'Field inspection mobile applications',
      'Inter-agency data exchange with controlled access',
    ],
    cta: 'Discuss public sector digital services',
  },
  {
    slug: 'technology',
    title: 'Technology',
    summary:
      'Product engineering for software companies — MVPs, platform extensions, and infrastructure for teams shipping their own products.',
    challenges: [
      'Balancing speed with technical debt',
      'Scaling architecture as user base grows',
      'Integrating billing, analytics, and support tooling',
      'Maintaining velocity with growing engineering teams',
    ],
    solutions: [
      'MVP and v2 product development',
      'API platforms and developer documentation',
      'SaaS multi-tenancy and subscription foundations',
      'DevOps and observability implementation',
    ],
    securityNotes: [
      'Secure SDLC practices and code review standards',
      'Tenant isolation for B2B SaaS products',
      'Secrets management and environment separation',
      'Bug bounty and pen-test coordination support',
    ],
    useCases: [
      'Feature teams augmenting in-house engineering',
      'Platform rebuilds with migration strategy',
      'Integration marketplaces and partner APIs',
      'Performance optimization before major launches',
    ],
    cta: 'Partner on your product roadmap',
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((industry) => industry.slug === slug) ?? null;
}

export default industries;
