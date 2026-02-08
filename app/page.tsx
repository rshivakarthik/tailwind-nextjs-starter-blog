'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import MobileMenu from '@/components/MobileMenu'
import Hero from '@/components/portfolio/Hero'
import Experience from '@/components/portfolio/Experience'
import Projects from '@/components/portfolio/Projects'
import CTA from '@/components/portfolio/CTA'
import About from '@/components/portfolio/About'
import Skills from '@/components/portfolio/Skills'

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // 'overflow-hidden' on the container is the final shield against layout gaps
    <div className="relative w-full overflow-hidden">
      
      {/* 1. Header with the open function */}
      <Header onOpenMobileMenu={() => setIsMenuOpen(true)} />

      {/* 2. Mobile Menu component */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

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