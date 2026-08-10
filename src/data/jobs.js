/**
 * Open position placeholders — update or remove when real hiring begins.
 */
export const jobs = [
  {
    slug: 'senior-full-stack-developer',
    title: 'Senior Full-Stack Developer (Placeholder)',
    location: 'Remote — replace with your policy',
    type: 'Full-time',
    department: 'Engineering',
    isPlaceholder: true,
    description:
      'Placeholder listing for an experienced full-stack developer to join delivery teams building web applications for clients. Replace compensation, location details, and requirements with your actual job specification.',
    requirements: [
      '5+ years professional software development experience',
      'Strong proficiency in JavaScript/TypeScript and at least one modern frontend framework',
      'Experience building and consuming REST or GraphQL APIs',
      'Comfort with relational databases and basic query optimization',
      'Clear written communication and code review participation',
      'Experience working in agile or iterative delivery environments',
    ],
    niceToHave: [
      'Next.js or React production experience',
      'Cloud deployment experience (AWS, Azure, or GCP)',
      'Automated testing practices (unit and integration)',
      'Prior consulting or client-facing project experience',
    ],
  },
  {
    slug: 'mobile-developer-react-native',
    title: 'Mobile Developer — React Native (Placeholder)',
    location: 'Hybrid — Your City (replace)',
    type: 'Full-time',
    department: 'Engineering',
    isPlaceholder: true,
    description:
      'Placeholder role for a mobile developer focused on cross-platform applications. Update with your team structure, travel expectations, and tech stack specifics.',
    requirements: [
      '3+ years mobile development experience with React Native or similar',
      'Published or delivered apps to App Store and/or Google Play',
      'Understanding of mobile UX patterns, offline storage, and push notifications',
      'API integration and authentication flow experience',
      'Debugging on physical devices and simulators/emulators',
    ],
    niceToHave: [
      'Native module development (Swift or Kotlin)',
      'Experience with Flutter or willingness to cross-train',
      'CI/CD setup for mobile release pipelines',
      'Performance profiling and crash analytics tools',
    ],
  },
  {
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer (Placeholder)',
    location: 'Remote — replace with your policy',
    type: 'Full-time',
    department: 'Design',
    isPlaceholder: true,
    description:
      'Placeholder opening for a designer who can lead research, wireframing, and visual design for client and internal product work. Replace portfolio submission instructions and tools list as needed.',
    requirements: [
      '3+ years UI/UX design experience on digital products',
      'Proficiency in Figma or comparable design tools',
      'Portfolio demonstrating end-to-end process (research to handoff)',
      'Understanding of responsive design and accessibility basics',
      'Ability to collaborate with developers on feasible implementations',
    ],
    niceToHave: [
      'Design system creation and maintenance experience',
      'Facilitation of user interviews or usability tests',
      'Motion or micro-interaction design skills',
      'Experience in B2B or enterprise product contexts',
    ],
  },
  {
    slug: 'devops-engineer',
    title: 'DevOps Engineer (Placeholder)',
    location: 'Remote — replace with your policy',
    type: 'Full-time',
    department: 'Platform',
    isPlaceholder: true,
    description:
      'Placeholder position for DevOps engineering supporting client projects and internal tooling. Specify on-call expectations and cloud provider focus when publishing for real.',
    requirements: [
      'Experience with CI/CD pipelines and infrastructure as code',
      'Hands-on work with Docker and container orchestration concepts',
      'Cloud platform experience (AWS, Azure, or GCP)',
      'Monitoring, logging, and alerting setup',
      'Scripting in Bash, Python, or similar for automation tasks',
    ],
    niceToHave: [
      'Kubernetes administration in production',
      'Terraform or CloudFormation at scale',
      'Security hardening and secrets management practices',
      'Cost optimization and FinOps collaboration',
    ],
  },
  {
    slug: 'business-analyst',
    title: 'Business Analyst (Placeholder)',
    location: 'Hybrid — Your City (replace)',
    type: 'Full-time',
    department: 'Delivery',
    isPlaceholder: true,
    description:
      'Placeholder role for discovery, requirements documentation, and stakeholder coordination on software projects. Adjust seniority and domain focus to match your hiring needs.',
    requirements: [
      '2+ years in business analysis, product ownership, or similar role',
      'Strong workshop facilitation and requirements writing skills',
      'Ability to translate business processes into user stories and acceptance criteria',
      'Familiarity with software delivery lifecycles',
      'Professional communication with technical and non-technical audiences',
    ],
    niceToHave: [
      'Experience in regulated industries (healthcare, finance, etc.)',
      'BPMN or process mapping tooling',
      'Light technical background or prior QA experience',
      'Second language relevant to your client base',
    ],
  },
];

export function getJobBySlug(slug) {
  return jobs.find((job) => job.slug === slug) ?? null;
}

export default jobs;
