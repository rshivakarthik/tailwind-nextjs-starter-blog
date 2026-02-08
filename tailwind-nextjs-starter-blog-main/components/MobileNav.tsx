'use client'

import { useEffect, useRef } from 'react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import Link from './Link'

export default function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const navRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (isOpen && navRef.current) {
      disableBodyScroll(navRef.current)
    } else if (navRef.current) {
      enableBodyScroll(navRef.current)
    }

    return () => clearAllBodyScrollLocks()
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-white dark:bg-gray-950 transition-opacity ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <span className="text-lg font-extrabold text-gray-900 dark:text-white">
          Shiva<span className="text-blue-600">karthik</span>
        </span>
        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl"
          aria-label="Close Menu"
        >
          ✕
        </button>
      </div>

      {/* NAV LINKS */}
      <nav
        ref={navRef}
        className="flex flex-col gap-6 px-8 pt-10 text-xl font-bold"
      >
        <Link href="/#home" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/#experience" onClick={() => setIsOpen(false)}>Experience</Link>
        <Link href="/#projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>

      {/* HIRE ME */}
      <div className="px-8 mt-12">
        <Link
          href="https://linkedin.com/in/shiva-karthik-257640253"
          target="_blank"
          className="block w-full rounded-full bg-blue-600 py-3 text-center text-white font-bold"
          onClick={() => setIsOpen(false)}
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}
