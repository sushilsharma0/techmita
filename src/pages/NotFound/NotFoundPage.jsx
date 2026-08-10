import { Link } from 'react-router-dom'
import { House, ArrowRight } from '@phosphor-icons/react'
import { SEO } from '@/components/common/SEO'
import { Button } from '@/components/buttons/Button'
import { Section3D } from '@/components/common/Section3D'
import { Reveal } from '@/pages/shared/Reveal'

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved."
        path="/404"
      />
      <section className="section-y min-h-[60dvh] flex items-center">
        <div className="container-page max-w-xl text-center">
          <Reveal>
            <Section3D scene="ring" size="md" className="mx-auto mb-8" />
            <p className="font-display text-8xl font-bold tracking-tight text-cta/30">404</p>
            <h1 className="mt-4 font-display text-3xl font-bold">Page not found</h1>
            <p className="mt-4 text-muted">
              The page you requested does not exist or may have been moved. Try the links below or
              return home.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/">
                  <House weight="bold" className="size-4" />
                  Back to home
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  Contact us
                  <ArrowRight weight="bold" className="size-4" />
                </Link>
              </Button>
            </div>
            <nav className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link to="/services" className="text-cta no-underline hover:text-accent">
                Services
              </Link>
              <Link to="/portfolio" className="text-cta no-underline hover:text-accent">
                Portfolio
              </Link>
              <Link to="/about" className="text-cta no-underline hover:text-accent">
                About
              </Link>
              <Link to="/blog" className="text-cta no-underline hover:text-accent">
                Blog
              </Link>
            </nav>
          </Reveal>
        </div>
      </section>
    </>
  )
}
