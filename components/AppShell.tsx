'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">

      <Header onOpenMobileMenu={() => setMobileOpen(true)} />

      <main className="mb-auto w-full pt-20">
        {children}
      </main>

      <Footer />

      <MobileNav
        isOpen={mobileOpen}
        setIsOpen={setMobileOpen}
      />
    </div>
  )
}
