import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'

const HomePage = lazy(() => import('@/pages/Home/HomePage'))
const AboutPage = lazy(() => import('@/pages/About/AboutPage'))
const ServicesPage = lazy(() => import('@/pages/Services/ServicesPage'))
const ServiceDetailPage = lazy(() => import('@/pages/Services/ServiceDetailPage'))
const IndustriesPage = lazy(() => import('@/pages/Industries/IndustriesPage'))
const IndustryDetailPage = lazy(() => import('@/pages/Industries/IndustryDetailPage'))
const PortfolioPage = lazy(() => import('@/pages/Portfolio/PortfolioPage'))
const ProjectDetailPage = lazy(() => import('@/pages/Portfolio/ProjectDetailPage'))
const TechnologiesPage = lazy(() => import('@/pages/Technologies/TechnologiesPage'))
const ProcessPage = lazy(() => import('@/pages/Process/ProcessPage'))
const TeamPage = lazy(() => import('@/pages/Team/TeamPage'))
const CareersPage = lazy(() => import('@/pages/Careers/CareersPage'))
const BlogPage = lazy(() => import('@/pages/Blog/BlogPage'))
const BlogPostPage = lazy(() => import('@/pages/Blog/BlogPostPage'))
const ContactPage = lazy(() => import('@/pages/Contact/ContactPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage'))

function PageFallback() {
  return (
    <div className="flex min-h-[50dvh] items-center justify-center pt-24" role="status">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-cta" />
      <span className="sr-only">Loading page</span>
    </div>
  )
}

export function AppRoutes() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="industries/:slug" element={<IndustryDetailPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/:slug" element={<ProjectDetailPage />} />
          <Route path="technologies" element={<TechnologiesPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
