'use client'

import Link from './Link'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const sections = ['home', 'experience', 'projects', 'about', 'contact']

  return (
    <>
      {/* Background Overlay (Darkens the screen when menu is open) */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* The Actual Menu Slide-out */}
      <div className={`fixed top-0 right-0 z-[70] h-full w-[280px] bg-white dark:bg-gray-950 p-6 shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end">
          <button onClick={onClose} className="text-3xl p-2">&times;</button>
        </div>

        <nav className="mt-8 flex flex-col gap-6">
          {sections.map((item) => (
            <Link 
              key={item} 
              href={`/#${item}`} 
              onClick={onClose}
              className="text-xl font-bold capitalize hover:text-blue-600 transition-colors"
            >
              {item}
            </Link>
          ))}
          
          <Link
            href="https://linkedin.com/in/shiva-karthik-257640253"
            target="_blank"
            className="mt-4 inline-block rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white"
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </>
  )
}