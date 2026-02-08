'use client'

import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

// 1. ADDED 'contact' here
const sections = ['home', 'experience', 'projects', 'about', 'skills', 'contact']

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const navItem = (id, label) => (
    <Link href={`/#${id}`} className="relative py-2 group">
      <span
        className={`text-sm font-bold transition-colors ${
          active === id
            ? 'text-blue-600'
            : 'text-gray-600 dark:text-gray-300 group-hover:text-blue-600'
        }`}
      >
        {label}
      </span>
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all ${
          active === id ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  )

  return (
    // 2. FIXED WIDTH: Added 'w-screen' and removed margins to force full width
    <header className="fixed top-0 left-0 right-0 z-50 w-screen bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between h-20 px-6 max-w-[1400px] mx-auto w-full">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link href="/#home" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-blue-600 fill-current" />
              <span className="hidden sm:block text-2xl font-extrabold text-gray-900 dark:text-white">
                Shiva<span className="text-blue-600">karthik</span>
              </span>
            </div>
          </Link>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {navItem('home', 'Home')}
          {navItem('experience', 'Experience')}
          {navItem('projects', 'Projects')}
          {navItem('about', 'About')}
          {/* 3. ADDED CONTACT NAV ITEM */}
          {navItem('contact', 'Contact')}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          
          {/* Salesforce Icon */}
          <a
            href="https://www.salesforce.com/trailblazer/shivakarthik600"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c0-1.7-1.3-3-3-3h-1.1c-.1-1.2-.6-2.3-1.5-3.1-1-.9-2.3-1.4-3.6-1.4-2.4 0-4.5 1.7-4.9 4H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h14.5c1.4 0 2.5-1.1 2.5-2.5z"/></svg>
          </a>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-all"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
          )}

          {/* 4. HIRE ME BUTTON (Ensured visibility) */}
          <Link
            href="https://linkedin.com/in/shiva-karthik-257640253"
            target="_blank"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105"
          >
            Hire Me
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}