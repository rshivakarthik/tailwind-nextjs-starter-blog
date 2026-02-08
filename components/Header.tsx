'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from './Link'
import Logo from '@/data/logo.svg'

const sections = ['home', 'experience', 'projects', 'about', 'contact']

export default function Header({
  onOpenMobileMenu,
}: {
  onOpenMobileMenu: () => void
}) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    setMounted(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
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

  const navItem = (id: string, label: string) => (
    <Link href={`/#${id}`} className="text-sm font-bold">
      <span className={active === id ? 'text-blue-600' : ''}>{label}</span>
    </Link>
  )

  return (
    // Fixed: Ensure the header is always full width and handles dark mode borders better
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      
      {/* CHANGE HERE: Changed max-w-[1400px] logic. 
          Using w-full and px-4 ensures no "gaps" on the sides in mobile.
      */}
      <div className="mx-auto w-full max-w-[1400px] px-4">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link href="/#home" className="flex items-center gap-2">
            <Logo className="h-7 w-7 text-blue-600" />
            <span className="text-lg font-extrabold">
              Shiva<span className="text-blue-600">karthik</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItem('home', 'Home')}
            {navItem('experience', 'Experience')}
            {navItem('projects', 'Projects')}
            {navItem('about', 'About')}
            {navItem('contact', 'Contact')}
          </nav>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3">

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            )}

            <Link
              href="https://linkedin.com/in/shiva-karthik-257640253"
              target="_blank"
              className="hidden md:inline-flex rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Hire Me
            </Link>

            {/* ✅ MOBILE MENU BUTTON */}
            {/* Added relative and z-index to ensure it is clickable above other layers */}
            <button
              onClick={onOpenMobileMenu}
              className="md:hidden text-2xl p-2 relative z-50 hover:text-blue-600 transition-colors"
              aria-label="Open Menu"
            >
              ☰
            </button>

          </div>
        </div>
      </div>
    </header>
  )
}