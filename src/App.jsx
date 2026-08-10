import { BrowserRouter } from 'react-router-dom'
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider'
import { AppRoutes } from '@/routes/AppRoutes'
import { company } from '@/data/company'
import { useEffect } from 'react'

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  url: 'https://techmitra.example',
  description: company.description,
  email: company.contact.email,
  telephone: company.contact.phone,
}

export default function App() {
  useEffect(() => {
    let script = document.getElementById('org-jsonld')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'org-jsonld'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(orgJsonLd)
  }, [])

  return (
    <BrowserRouter>
      <SmoothScrollProvider>
        <AppRoutes />
      </SmoothScrollProvider>
    </BrowserRouter>
  )
}
