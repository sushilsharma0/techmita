import { useState } from 'react'
import { Envelope, MapPin, Phone, Clock } from '@phosphor-icons/react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/buttons/Button'
import { company } from '@/data/company'
import { services } from '@/data/services'
import { Reveal } from '@/pages/shared/Reveal'
import { LazyCanvas } from '@/pages/shared/LazyCanvas'

const BUDGET_OPTIONS = [
  'Under $25,000',
  '$25,000 – $75,000',
  '$75,000 – $150,000',
  '$150,000 – $300,000',
  '$300,000+',
  'Not sure yet',
]

const HOURS = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM (placeholder)' },
  { day: 'Saturday', time: 'By appointment' },
  { day: 'Sunday', time: 'Closed' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with TechMitra — start a project conversation, ask questions, or request a proposal."
        path="/contact"
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 lg:left-[50%] opacity-95">
          <LazyCanvas sceneId="globe" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-bg via-bg/50 to-transparent" />
        </div>
        <div className="container-page relative section-y pb-12">
          <Reveal>
            <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Contact us
            </h1>
            <p className="mt-6 max-w-xl text-lg prose-tech">
              Share your goals, constraints, and timeline. We respond with a clear next step — no
              pressure pitch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHeading title="Get in touch" className="mb-0" />
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <Envelope weight="duotone" className="size-6 shrink-0 text-accent" />
                <div>
                  <p className="font-display text-sm font-semibold">Email</p>
                  <a href={`mailto:${company.contact.email}`} className="text-sm text-muted hover:text-accent">
                    {company.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone weight="duotone" className="size-6 shrink-0 text-accent" />
                <div>
                  <p className="font-display text-sm font-semibold">Phone</p>
                  <p className="text-sm text-muted">{company.contact.phone}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin weight="duotone" className="size-6 shrink-0 text-accent" />
                <div>
                  <p className="font-display text-sm font-semibold">Office</p>
                  <p className="text-sm text-muted">{company.contact.address}</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-xl border border-border bg-bg/40 p-6">
              <div className="flex items-center gap-2 font-display text-sm font-semibold">
                <Clock weight="duotone" className="size-5 text-cta" />
                Business hours (placeholder)
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {submitted ? (
              <div className="rounded-xl border border-cta/30 bg-cta/10 p-10 text-center">
                <h2 className="font-display text-xl font-semibold">Message received</h2>
                <p className="mt-3 text-sm text-muted">
                  Thank you for reaching out. This is a front-end demo — connect the form to your
                  backend or email service before production.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-border bg-bg/40 p-8 md:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-display font-semibold">Name *</span>
                    <input
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="rounded-lg border border-border bg-surface px-4 py-2.5 text-text"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-display font-semibold">Email *</span>
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="rounded-lg border border-border bg-surface px-4 py-2.5 text-text"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-display font-semibold">Company</span>
                    <input
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="rounded-lg border border-border bg-surface px-4 py-2.5 text-text"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-display font-semibold">Phone</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="rounded-lg border border-border bg-surface px-4 py-2.5 text-text"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                    <span className="font-display font-semibold">Service interest</span>
                    <select
                      name="service"
                      className="rounded-lg border border-border bg-surface px-4 py-2.5 text-text"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                      <option value="other">Other / Not sure</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                    <span className="font-display font-semibold">Budget range</span>
                    <select
                      name="budget"
                      className="rounded-lg border border-border bg-surface px-4 py-2.5 text-text"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select budget range
                      </option>
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                    <span className="font-display font-semibold">Message *</span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project, timeline, and any constraints..."
                      className="rounded-lg border border-border bg-surface px-4 py-2.5 text-text resize-y min-h-[120px]"
                    />
                  </label>
                </div>
                <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
                  Send message
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
