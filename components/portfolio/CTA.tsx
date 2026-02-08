import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto text-center px-6">
        
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-blue-600">
          Ready to Start Your Project?
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
          Join satisfied clients who have transformed their ideas into successful digital products.
        </p>
        
        {/* Button Container */}
        <div className="flex justify-center">
          <Link
            href="https://wa.me/918374101793" // UPDATED NUMBER
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105"
          >
            {/* WhatsApp Icon - Size reduced to 20px */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            WhatsApp Me Now
          </Link>
        </div>
        
      </div>
    </section>
  )
}