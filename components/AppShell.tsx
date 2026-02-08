'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
// MobileNav is removed because it is now INSIDE Header

export default function AppShell({ children }: { children: React.ReactNode }) {
  // We removed the 'useState' logic because Header handles the menu internally now!

  return (
    <div className="flex min-h-screen flex-col">

      {/* ✅ FIXED: Just render Header. No props needed anymore! */}
      <Header />

      <main className="mb-auto w-full pt-20">
        {children}
      </main>

      <Footer />

      {/* We removed <MobileNav /> from here because Header already contains it */}
      
    </div>
  )
}