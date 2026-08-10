/**
 * Site navigation structure for TechMitra.
 * Services mega menu references slugs from services.js.
 */
export const navigation = {
  logo: {
    text: 'TechMitra',
    href: '/',
  },
  primary: [
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Services',
      href: '/services',
      mega: true,
      children: [
        {
          label: 'Web Development',
          href: '/services/web-development',
          slug: 'web-development',
        },
        {
          label: 'Mobile Development',
          href: '/services/mobile-development',
          slug: 'mobile-development',
        },
        {
          label: 'Software Development',
          href: '/services/software-development',
          slug: 'software-development',
        },
        {
          label: 'SaaS Development',
          href: '/services/saas-development',
          slug: 'saas-development',
        },
        {
          label: 'UI/UX Design',
          href: '/services/ui-ux-design',
          slug: 'ui-ux-design',
        },
        {
          label: 'AI Development',
          href: '/services/ai-development',
          slug: 'ai-development',
        },
        {
          label: 'Cloud Solutions',
          href: '/services/cloud-solutions',
          slug: 'cloud-solutions',
        },
        {
          label: 'DevOps',
          href: '/services/devops',
          slug: 'devops',
        },
        {
          label: 'Cybersecurity',
          href: '/services/cybersecurity',
          slug: 'cybersecurity',
        },
        {
          label: 'View all services',
          href: '/services',
          highlight: true,
        },
      ],
    },
    {
      label: 'Industries',
      href: '/industries',
    },
    {
      label: 'Portfolio',
      href: '/portfolio',
    },
    {
      label: 'Technologies',
      href: '/technologies',
    },
    {
      label: 'Company',
      children: [
        { label: 'About', href: '/about', description: 'Who we are and how we work' },
        { label: 'Process', href: '/process', description: 'From discovery to support' },
        { label: 'Team', href: '/team', description: 'People behind the work' },
        { label: 'Careers', href: '/careers', description: 'Open roles and culture' },
        { label: 'Blog', href: '/blog', description: 'Notes on technology and delivery' },
      ],
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  cta: {
    label: 'Start a Project',
    href: '/contact',
  },
  footer: {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Process', href: '/process' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
    ],
    services: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile Development', href: '/services/mobile-development' },
      { label: 'AI Development', href: '/services/ai-development' },
      { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
      { label: 'All services', href: '/services' },
    ],
    explore: [
      { label: 'Industries', href: '/industries' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Technologies', href: '/technologies' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}

export default navigation
