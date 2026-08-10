/**
 * TechMitra delivery process — nine phases from discovery through maintenance.
 */
export const process = [
  {
    id: 'discovery',
    title: 'Discovery',
    summary:
      'We align on business goals, users, scope boundaries, and success criteria before any design or development begins.',
    activities: [
      'Stakeholder interviews and requirement workshops',
      'Review of existing systems, data flows, and constraints',
      'Definition of project scope, priorities, and assumptions',
      'Identification of risks, dependencies, and compliance needs',
    ],
    deliverables: [
      'Discovery summary document',
      'High-level scope and milestone outline',
      'Initial risk and assumption register',
    ],
  },
  {
    id: 'research',
    title: 'Research',
    summary:
      'We gather context from users, competitors, and technical landscapes to inform decisions with evidence rather than guesswork.',
    activities: [
      'User and domain research where applicable',
      'Competitive and market landscape review',
      'Technical feasibility and integration assessment',
      'Benchmarking of similar solutions and patterns',
    ],
    deliverables: [
      'Research findings summary',
      'User personas or stakeholder maps (when relevant)',
      'Technical feasibility notes',
    ],
  },
  {
    id: 'planning',
    title: 'Planning',
    summary:
      'We translate discovery and research into a realistic roadmap with clear milestones, responsibilities, and communication cadence.',
    activities: [
      'Backlog creation and prioritization',
      'Sprint or phase planning with timeline estimates',
      'Resource and environment planning',
      'Definition of acceptance criteria per milestone',
    ],
    deliverables: [
      'Project plan with milestones',
      'Prioritized backlog or feature list',
      'Communication and reporting schedule',
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    summary:
      'We design system structure, data models, integrations, and security boundaries that support current needs and future growth.',
    activities: [
      'System and component diagramming',
      'Data model and API contract design',
      'Security, scalability, and reliability planning',
      'Technology selection with documented rationale',
    ],
    deliverables: [
      'Architecture overview document',
      'API or integration specifications',
      'Infrastructure and deployment outline',
    ],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX',
    summary:
      'We shape intuitive interfaces and user flows that reflect brand standards and reduce friction for end users.',
    activities: [
      'Information architecture and user flow mapping',
      'Wireframing and interactive prototyping',
      'Visual design and component specification',
      'Accessibility and responsive layout review',
    ],
    deliverables: [
      'Wireframes and/or high-fidelity designs',
      'Design system or component guidelines',
      'Usability notes and handoff assets for development',
    ],
  },
  {
    id: 'development',
    title: 'Development',
    summary:
      'We implement features in iterative cycles with code review, version control, and regular demos to keep progress visible.',
    activities: [
      'Feature implementation per agreed milestones',
      'Code reviews and pair programming where helpful',
      'Integration with third-party services and APIs',
      'Documentation of setup, configuration, and key decisions',
    ],
    deliverables: [
      'Working software increments per milestone',
      'Source code in agreed repository',
      'Developer documentation and setup guides',
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    summary:
      'We validate functionality, performance, and security so releases meet acceptance criteria and behave reliably in target environments.',
    activities: [
      'Unit, integration, and end-to-end testing as appropriate',
      'Cross-browser and cross-device verification',
      'Performance and load testing for critical paths',
      'Security review and vulnerability remediation',
    ],
    deliverables: [
      'Test reports and defect logs',
      'Signed-off acceptance against criteria',
      'Release readiness checklist',
    ],
  },
  {
    id: 'deployment',
    title: 'Deployment',
    summary:
      'We release to production with controlled rollout, monitoring, and rollback plans to minimize disruption.',
    activities: [
      'Environment configuration and CI/CD pipeline setup',
      'Staging validation and production deployment',
      'DNS, SSL, and infrastructure provisioning as needed',
      'Post-deploy smoke testing and monitoring setup',
    ],
    deliverables: [
      'Deployed application in target environment',
      'Deployment runbook',
      'Monitoring and alerting configuration',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    summary:
      'We support your product after launch with updates, monitoring, bug fixes, and planned enhancements as your needs evolve.',
    activities: [
      'Ongoing bug triage and resolution',
      'Dependency and security patch management',
      'Performance monitoring and optimization',
      'Feature enhancements on agreed schedule',
    ],
    deliverables: [
      'Maintenance and support agreement (when applicable)',
      'Regular status and incident reports',
      'Release notes for updates and patches',
    ],
  },
];

export default process;
