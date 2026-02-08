'use client'

import Header from '@/components/Header'
import Hero from '@/components/portfolio/Hero'
import Experience from '@/components/portfolio/Experience'
import Projects from '@/components/portfolio/Projects'
import CTA from '@/components/portfolio/CTA'
import About from '@/components/portfolio/About'
import Skills from '@/components/portfolio/Skills'

export default function Page() {
  // We removed the 'useState' logic because Header handles it internally now!

  return (
    // 'overflow-hidden' on the container is the final shield against layout gaps
    <div className="relative w-full overflow-hidden">
      
      {/* ✅ FIXED: Just render Header. No props needed anymore! */}
      <Header />

      {/* We removed <MobileMenu /> because it is now inside Header */}

      <main className="flex flex-col gap-0 w-full scroll-smooth pt-16">
        
        <section id="home">
          <Hero />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <CTA />
        </section>

      </main>
    </div>
  )
}