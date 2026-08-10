import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from '@phosphor-icons/react'
import { SEO } from '@/components/common/SEO'
import { CTABand } from '@/components/common/CTABand'
import { Section3D } from '@/components/common/Section3D'
import { Button } from '@/components/buttons/Button'
import { getPostBySlug } from '@/data/blog'
import { Reveal } from '@/pages/shared/Reveal'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <>
        <SEO
          title="Article Not Found"
          description="The requested blog post could not be found."
          path={`/blog/${slug}`}
        />
        <section className="section-y">
          <div className="container-page max-w-xl text-center">
            <h1 className="font-display text-3xl font-bold">Article not found</h1>
            <p className="mt-4 text-muted">No post matches &ldquo;{slug}&rdquo;.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/blog">All articles</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </section>
      </>
    )
  }

  const paragraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />

      <article>
        <header className="section-y border-b border-border bg-surface pb-12">
          <div className="container-page max-w-3xl">
            <Section3D scene="layers" size="wide" bleed className="mb-10 h-40" />
            <Reveal>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted no-underline hover:text-text"
              >
                <ArrowLeft weight="bold" className="size-4" />
                All articles
              </Link>
              {post.isSample && (
                <span className="ml-4 rounded border border-border bg-bg/60 px-2 py-1 text-xs text-muted">
                  Sample article
                </span>
              )}
              <p className="mt-8 text-sm font-medium text-accent">{post.category}</p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-6 text-lg prose-tech">{post.excerpt}</p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
                <span>{post.author}</span>
                <span className="flex items-center gap-1">
                  <Calendar weight="duotone" className="size-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock weight="duotone" className="size-4" />
                  {post.readTime}
                </span>
              </div>
            </Reveal>
          </div>
        </header>

        <div className="section-y border-b border-border">
          <div className="container-page max-w-3xl">
            {paragraphs.map((para, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="mb-6 text-base leading-relaxed text-muted last:mb-0">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <CTABand
        title="Ready to apply these ideas?"
        description="Tell us about your project and we will connect the conversation to practical next steps."
        primaryTo="/contact"
        secondaryTo="/process"
      />
    </>
  )
}
