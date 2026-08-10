/**
 * Technology stack groupings for TechMitra.
 * Descriptions reflect typical use — not claims of exclusive certification.
 */
export const technologyGroups = {
  frontend: [
    {
      name: 'React',
      category: 'frontend',
      description: 'Component-based UI library for interactive web applications and design-system-driven interfaces.',
    },
    {
      name: 'Next.js',
      category: 'frontend',
      description: 'React framework with server rendering, routing, and optimized production builds for web apps and marketing sites.',
    },
    {
      name: 'Vue.js',
      category: 'frontend',
      description: 'Progressive framework suited to incremental adoption and single-page applications.',
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      description: 'Typed superset of JavaScript that improves maintainability and tooling for large frontends.',
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      description: 'Utility-first CSS approach for rapid, consistent styling and responsive layouts.',
    },
    {
      name: 'HTML5 & CSS3',
      category: 'frontend',
      description: 'Semantic markup and modern CSS for accessible, standards-compliant web experiences.',
    },
  ],
  backend: [
    {
      name: 'Node.js',
      category: 'backend',
      description: 'JavaScript runtime for APIs, real-time services, and full-stack JavaScript applications.',
    },
    {
      name: 'Python',
      category: 'backend',
      description: 'Versatile language for web APIs, data processing, automation, and AI/ML integrations.',
    },
    {
      name: 'Java',
      category: 'backend',
      description: 'Enterprise-grade backend development for large-scale, long-lived business systems.',
    },
    {
      name: 'C# / .NET',
      category: 'backend',
      description: 'Microsoft stack for robust APIs, services, and integration with Azure ecosystems.',
    },
    {
      name: 'GraphQL',
      category: 'backend',
      description: 'Query language for flexible API consumption with strongly typed schemas.',
    },
    {
      name: 'REST APIs',
      category: 'backend',
      description: 'Resource-oriented HTTP APIs with clear contracts for web and mobile clients.',
    },
  ],
  mobile: [
    {
      name: 'React Native',
      category: 'mobile',
      description: 'Cross-platform mobile development with shared logic and native UI components.',
    },
    {
      name: 'Flutter',
      category: 'mobile',
      description: 'Google UI toolkit for compiled cross-platform apps with expressive widgets.',
    },
    {
      name: 'Swift',
      category: 'mobile',
      description: 'Native iOS development for performance-sensitive or platform-specific features.',
    },
    {
      name: 'Kotlin',
      category: 'mobile',
      description: 'Modern language for native Android applications and shared multiplatform modules.',
    },
    {
      name: 'Progressive Web Apps',
      category: 'mobile',
      description: 'Web applications with installable, offline-capable experiences on mobile browsers.',
    },
  ],
  database: [
    {
      name: 'PostgreSQL',
      category: 'database',
      description: 'Relational database with strong consistency, JSON support, and extension ecosystem.',
    },
    {
      name: 'MySQL',
      category: 'database',
      description: 'Widely deployed relational database for web applications and reporting workloads.',
    },
    {
      name: 'MongoDB',
      category: 'database',
      description: 'Document database for flexible schemas and horizontally scaled workloads.',
    },
    {
      name: 'Redis',
      category: 'database',
      description: 'In-memory store for caching, sessions, queues, and pub/sub patterns.',
    },
    {
      name: 'Elasticsearch',
      category: 'database',
      description: 'Search and analytics engine for full-text search and log aggregation use cases.',
    },
    {
      name: 'Vector Databases',
      category: 'database',
      description: 'Specialized stores for semantic search and retrieval-augmented AI applications.',
    },
  ],
  cloud: [
    {
      name: 'Amazon Web Services (AWS)',
      category: 'cloud',
      description: 'Cloud platform for compute, storage, networking, and managed services at scale.',
    },
    {
      name: 'Microsoft Azure',
      category: 'cloud',
      description: 'Enterprise cloud with strong integration for Microsoft-centric organizations.',
    },
    {
      name: 'Google Cloud Platform',
      category: 'cloud',
      description: 'Cloud services with strengths in data analytics, Kubernetes, and ML tooling.',
    },
    {
      name: 'Serverless Functions',
      category: 'cloud',
      description: 'Event-driven compute for APIs, webhooks, and background tasks without server management.',
    },
    {
      name: 'Cloud Storage & CDN',
      category: 'cloud',
      description: 'Object storage and edge delivery for media, static assets, and global performance.',
    },
  ],
  devops: [
    {
      name: 'Docker',
      category: 'devops',
      description: 'Containerization for consistent environments from development through production.',
    },
    {
      name: 'Kubernetes',
      category: 'devops',
      description: 'Orchestration for container workloads with scaling, service discovery, and rolling updates.',
    },
    {
      name: 'Terraform',
      category: 'devops',
      description: 'Infrastructure as Code for reproducible cloud resource provisioning.',
    },
    {
      name: 'GitHub Actions',
      category: 'devops',
      description: 'CI/CD automation integrated with GitHub repositories and pull request workflows.',
    },
    {
      name: 'GitLab CI',
      category: 'devops',
      description: 'Pipeline automation for build, test, and deploy stages in GitLab-managed projects.',
    },
    {
      name: 'Prometheus & Grafana',
      category: 'devops',
      description: 'Metrics collection and visualization for observability and alerting.',
    },
  ],
  ai: [
    {
      name: 'OpenAI API',
      category: 'ai',
      description: 'Large language model APIs for assistants, summarization, and content generation features.',
    },
    {
      name: 'LangChain',
      category: 'ai',
      description: 'Framework for composing LLM workflows, tools, and retrieval pipelines.',
    },
    {
      name: 'Hugging Face',
      category: 'ai',
      description: 'Model hub and tooling for NLP, classification, and open-source ML experiments.',
    },
    {
      name: 'Azure OpenAI',
      category: 'ai',
      description: 'Enterprise-oriented access to OpenAI models with Azure security and compliance options.',
    },
    {
      name: 'Python ML Stack',
      category: 'ai',
      description: 'Libraries such as scikit-learn and pandas for classical ML and data preparation tasks.',
    },
    {
      name: 'RAG Pipelines',
      category: 'ai',
      description: 'Retrieval-augmented generation patterns grounding LLM responses in approved document sets.',
    },
  ],
};

/** Flat list of all technologies across groups */
export const technologies = Object.values(technologyGroups).flat();

export default technologies;
