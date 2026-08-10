import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { absoluteUrl } from '@/utils/cn'

export function SEO({
  title,
  description,
  path = '/',
  type = 'website',
  image = '/og-default.svg',
  jsonLd,
}) {
  const { pathname } = useLocation()
  const canonical = absoluteUrl(path || pathname)
  const fullTitle = title.includes('TechMitra')
    ? title
    : `${title} | TechMitra`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (attr, key, content) => {
      if (!content) return
      let el = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:image', absoluteUrl(image))
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)

    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)

    let script = document.getElementById('page-jsonld')
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'page-jsonld'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    } else if (script) {
      script.remove()
    }
  }, [fullTitle, description, canonical, type, image, jsonLd])

  return null
}
