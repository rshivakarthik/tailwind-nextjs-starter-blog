import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    /* Glass Effect Fix: backdrop-blur-xl mariyu bg-white/60 vaadanu */
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        
        {/* Logo Section */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-black tracking-tighter text-blue-600 hover:scale-105 transition-transform inline-block">
            Shiva Karthik 
          </Link>
        </div>

        {/* CENTERED NAVIGATION - Glassy Hover Effects */}
        <div className="hidden md:flex flex-[2] justify-center items-center space-x-10">
          {headerNavLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="relative font-bold text-slate-600 hover:text-blue-600 transition-colors text-sm uppercase tracking-widest group"
            >
              {link.title}
              {/* Dinesh UI style bottom line hover effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
          {/* Glassy Button Effect */}
          <a 
            href="#contact" 
            className="hidden lg:block bg-blue-600/90 backdrop-blur-md text-white px-8 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:bg-blue-600 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header