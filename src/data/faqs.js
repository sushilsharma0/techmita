/**
 * General company FAQs and home-page subset.
 */
export const faqs = [
  {
    id: 'what-we-do',
    q: 'What types of projects does TechMitra take on?',
    a: 'We build web applications, mobile apps, custom software, SaaS platforms, integrations, and cloud infrastructure. Engagements range from greenfield products to modernization of existing systems. Share your goals in an initial conversation and we will confirm fit and scope.',
  },
  {
    id: 'engagement-models',
    q: 'What engagement models do you offer?',
    a: 'We typically work on fixed-scope projects, time-and-materials for evolving requirements, or dedicated team arrangements for longer partnerships. The best model depends on clarity of scope, timeline, and how closely you want us embedded with your team.',
  },
  {
    id: 'timeline',
    q: 'How long does a typical project take?',
    a: 'Timelines vary widely. A focused MVP might take several weeks; a multi-module enterprise platform can span many months. After discovery, we provide a milestone-based estimate with assumptions documented so you can plan accordingly.',
  },
  {
    id: 'tech-stack',
    q: 'Do you work with our existing technology stack?',
    a: 'Often, yes. We evaluate your current stack for maintainability, security, and fit with project goals. When a change is warranted, we explain the trade-offs and recommend a path that minimizes disruption.',
  },
  {
    id: 'communication',
    q: 'How do you keep clients updated during development?',
    a: 'We agree on a cadence — usually weekly status updates, demo sessions at milestone boundaries, and a shared channel for day-to-day questions. Documentation and decision logs are maintained so nothing lives only in chat history.',
  },
  {
    id: 'ownership',
    q: 'Who owns the code and intellectual property?',
    a: 'Under standard agreements, you own the deliverables created for your project upon payment. We retain rights to general methodologies, pre-existing tools, and non-client-specific components unless otherwise agreed in writing.',
  },
  {
    id: 'security',
    q: 'How do you handle security and data protection?',
    a: 'Security practices are integrated from architecture through deployment: least-privilege access, encrypted transport, secure credential handling, and dependency monitoring. Industry-specific requirements (healthcare, finance, etc.) are addressed during discovery.',
  },
  {
    id: 'support-after-launch',
    q: 'Do you provide support after launch?',
    a: 'Yes. We offer maintenance and support packages covering bug fixes, monitoring, updates, and planned enhancements. Terms and response times are defined in a separate agreement tailored to your operational needs.',
  },
  {
    id: 'getting-started',
    q: 'How do we get started?',
    a: 'Reach out via our contact form or email with a brief description of your project, timeline, and any constraints. We schedule an introductory call to understand requirements and outline possible next steps — usually discovery or a lightweight proposal.',
  },
  {
    id: 'location-remote',
    q: 'Do you work with remote and international clients?',
    a: 'Yes. We collaborate remotely with clients across time zones using agreed meeting windows and asynchronous documentation. On-site workshops can be arranged when beneficial and mutually feasible.',
  },
];

/** Subset for home page — most common pre-sales questions */
export const homeFaqs = faqs.filter((faq) =>
  ['what-we-do', 'engagement-models', 'timeline', 'getting-started'].includes(faq.id),
);

export default faqs;
