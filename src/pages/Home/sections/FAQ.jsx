import * as Accordion from '@radix-ui/react-accordion'
import { CaretDown } from '@phosphor-icons/react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { homeFaqs } from '@/data/faqs'
import { Reveal } from '@/pages/shared/Reveal'
export default function FAQ() {
  return (
    <section className="section-y border-b border-border bg-surface">
      <div className="container-page max-w-3xl">
        <Reveal>
          <SectionHeading
            title="Common questions"
            description="Quick answers before we connect. More detail available on our process and services pages."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={0.04} className="mb-8 flex justify-center">
          <Section3D scene="lock" size="sm" />
        </Reveal>

        <Reveal delay={0.06}>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {homeFaqs.map((faq) => (
              <Accordion.Item
                key={faq.id}
                value={faq.id}
                className="overflow-hidden rounded-xl border border-border bg-bg/40"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-sm font-semibold transition-colors hover:text-accent">
                    {faq.q}
                    <CaretDown
                      weight="bold"
                      className="size-4 shrink-0 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-muted">
                  <div className="px-6 pb-5">{faq.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  )
}
