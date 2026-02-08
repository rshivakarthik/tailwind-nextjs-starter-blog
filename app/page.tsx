import Hero from '@/components/portfolio/Hero'
import Experience from '@/components/portfolio/Experience'
import Projects from '@/components/portfolio/Projects'
import CTA from '@/components/portfolio/CTA'
import About from '@/components/portfolio/About'
import Skills from '@/components/portfolio/Skills'

export default function Page() {
  return (
    // UPDATED: Added 'scroll-smooth' for nice scrolling effect
    <main className="flex flex-col gap-0 w-full scroll-smooth">
      
      {/* Home Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

    

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

  {/* Contact Section (CTA) */}
      <section id="contact">
        <CTA />
      </section>
   

    </main>
  )
}