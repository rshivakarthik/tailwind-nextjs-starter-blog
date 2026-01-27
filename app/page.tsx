import Hero from '@/components/portfolio/Hero'
import Experience from '@/components/portfolio/Experience'
import Projects from '@/components/portfolio/Projects'
import CTA from '@/components/portfolio/CTA'
import About from '@/components/portfolio/About'

export default function Page() {
  return (
    <main className="space-y-32">
      <Hero />
      <Experience />
      <Projects />
      <CTA />
      <About />
    </main>
  )
}
