import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock } from '@phosphor-icons/react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { CTABand } from '@/components/common/CTABand'
import { blogPosts, blogCategories, getFeaturedPost } from '@/data/blog'
import { Reveal } from '@/pages/shared/Reveal'
import { cn } from '@/utils/cn'

export default function BlogPage() {
  const [category, setCategory] = useState('All')
  const featured = getFeaturedPost()

  const filtered = useMemo(() => {
    if (category === 'All') return blogPosts
    return blogPosts.filter((p) => p.category === category)
  }, [category])

  const rest = filtered.filter((p) => p.slug !== featured?.slug)

  return (
    <>
      <SEO
        title="Blog"
        description="Insights on technology, delivery, cloud, AI, and software craftsmanship from TechMitra."
        path="/blog"
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="container-page relative section-y pb-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <Reveal>
              <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Blog
              </h1>
              <p className="mt-6 max-w-2xl text-lg prose-tech">
                Practical perspectives on building and operating software. Sample articles labeled
                until you publish your own content.
              </p>
            </Reveal>
            <Section3D scene="layers" size="md" className="hidden lg:block" />
          </div>
        </div>
      </section>

      {featured && category === 'All' && (
        <section className="border-b border-border bg-surface">
          <div className="container-page section-y py-16 md:py-20">
            <Reveal>
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid gap-8 lg:grid-cols-2 lg:items-center no-underline"
              >
                <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-cta/30 to-accent/10 border border-border" />
                <div>
                  {featured.isSample && (
                    <span className="rounded bg-bg px-2 py-0.5 text-[10px] uppercase text-muted">
                      Sample article
                    </span>
                  )}
                  <p className="mt-3 text-sm font-medium text-accent">{featured.category}</p>
                  <h2 className="mt-2 text-3xl font-display font-bold tracking-tight group-hover:text-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 prose-tech">{featured.excerpt}</p>
                  <p className="mt-6 flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar weight="duotone" className="size-4" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock weight="duotone" className="size-4" />
                      {featured.readTime}
                    </span>
                  </p>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section-y border-b border-border">
        <div className="container-page">
          <Reveal className="mb-10 flex flex-wrap gap-2">
            {['All', ...blogCategories].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-sm transition-colors',
                  category === cat
                    ? 'border-cta bg-cta/15 text-text'
                    : 'border-border text-muted hover:text-text',
                )}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.04}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 no-underline transition-colors hover:border-cta/30"
                >
                  <p className="text-xs font-medium text-accent">{post.category}</p>
                  <h2 className="mt-2 font-display text-lg font-semibold group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-muted line-clamp-3">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-muted">
                    {post.date} · {post.readTime}
                    {post.isSample && ' · Sample'}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Want to discuss an article topic?"
        description="We are happy to explore how these ideas apply to your organization."
        primaryTo="/contact"
        secondaryTo="/services"
        secondaryLabel="Our services"
      />
    </>
  )
}
