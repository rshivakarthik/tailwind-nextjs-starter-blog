'use client'

import { motion } from 'framer-motion'

export default function About() {
  const certifications = [
    'Certified Administrator',
    'Platform Developer I',
    'Platform App Builder',
    'OmniStudio Developer',
    'Certified Consumer Goods', 
    'Certified Associate',
  ];

  return (
    <section
      id="about"
      className="pt-0 pb-24 px-6 bg-[#f8fafc] dark:bg-gray-950/20 border-t border-slate-100 dark:border-slate-900 text-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
            <span className="text-blue-600">About</span> Me
          </h2>

          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-20">
            Senior Salesforce Developer bridging technical excellence with business strategy.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12 text-left hover:scale-[1.01] transition-transform duration-300">
            
            {/* Education Icon */}
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.666 48.666 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.258 50.55 50.55 0 01-2.772.815m-3.112 6.022c1.733.64 3.56 1.085 5.455 1.31m-5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                Education
              </h3>
              <p className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                Master of Business Administration (MBA)
              </p>
              <div className="flex flex-wrap items-center gap-3 text-lg font-semibold text-blue-600">
                <span>Osmania University, Hyderabad</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>2016 – 2018</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-10">
            Salesforce <span className="text-blue-600">Certifications</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                // UPDATED LINE BELOW: Added hover:border-blue-400 for the light blue border effect
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-[2rem] shadow-lg hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-5"
              >
                {/* LOGO CONTAINER - Removed group-hover:bg-blue-600 so logo background doesn't change */}
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" 
                    alt="Salesforce Icon" 
                    className="w-6 h-6"
                  />
                </div>
                
                {/* Text turns blue on hover */}
                <p className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">
                  {cert.includes('Certified') ? cert : `Salesforce ${cert}`}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Let's Collaborate Button */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/918374101793"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-105"
          >
            Let's Collaborate
            
            {/* Arrow Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="3" 
              stroke="currentColor" 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
        
      </div>
    </section>
  )
}