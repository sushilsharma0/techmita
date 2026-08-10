/** Maps service slug to GlobalCanvas sceneId */
export function getServiceSceneId(slug) {
  const map = {
    'ai-development': 'neural',
    'cloud-solutions': 'cloud',
    devops: 'cloud',
    'mobile-development': 'device',
    cybersecurity: 'network',
    'api-integration': 'network',
    'web-development': 'tech-core',
    'saas-development': 'services',
    'ui-ux-design': 'services',
    ecommerce: 'device',
  }
  return map[slug] ?? 'tech-core'
}
