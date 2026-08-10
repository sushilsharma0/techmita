import { Link } from 'react-router-dom'
import { company } from '@/data/company'
import { navigation } from '@/data/navigation'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-xl font-bold tracking-tight">
              {company.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {company.tagline}
            </p>
            <p className="mt-6 text-sm text-muted">
              {company.contact.email}
              <br />
              {company.contact.phone}
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-text">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {navigation.footer.company.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-text transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-text">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {navigation.footer.services.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-text transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-text">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {navigation.footer.explore.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-text transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>Illustrative sample content is labeled where used. Replace with your facts.</p>
        </div>
      </div>
    </footer>
  )
}
