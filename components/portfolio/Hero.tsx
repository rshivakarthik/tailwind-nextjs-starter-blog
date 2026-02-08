'use client'

export default function Hero() {
  const whatsappLink = "https://wa.me/918374101793"

  return (
    <div className="w-full transition-colors duration-500 font-sans bg-[#fcfcfd] dark:bg-gray-950">
      
      {/* SECTION 1: HERO */}
      {/* UPDATED: Changed 'pb-20' to 'pb-10' (reduced) to bring next section closer */}
      <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 text-center pt-32 pb-10 overflow-hidden">
        
        {/* Background Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

        <div className="w-full max-w-5xl mx-auto z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Software <span className="text-blue-600">Engineer</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
            Senior Salesforce Developer • Implementation Expert
          </p>

          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-12">
            Experienced in Salesforce ecosystem with focus on <span className="text-blue-600 font-bold">performance</span>, 
            <span className="text-blue-600 font-bold ml-1">maintainability</span>, and <span className="text-blue-600 font-bold ml-1">security</span>. 
            Specializing in LWC, Apex, CPQ, and cloud integrations.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="group relative bg-blue-600 text-white px-10 py-4 rounded-full text-sm font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition transform hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 font-bold">Start Your Project →</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300"></div>
            </a>
            <button className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition transform hover:-translate-y-1 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              View Resume
            </button>
          </div>

          {/* Icon Grid */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 text-center">
            {[
              { name: 'Frontend', d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { name: 'Backend', d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
              { name: 'Cloud', d: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
{ 
  name: 'Automation', 
  d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" 
}            ].map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-lg shadow-blue-100/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d={skill.d}/></svg>
                </div>
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Skill Pills - UPDATED: Removed excessive bottom margin */}
          <div className="flex flex-wrap justify-center gap-2 mb-0">
            {["Sales Cloud", "Service Cloud", "OmniStudio", "CPQ", "Integrations", "Performance Optimized"].map((skill) => (
              <span key={skill} className="px-5 py-2 bg-white dark:bg-slate-900 text-blue-600 text-xs font-bold rounded-full border border-blue-100 shadow-sm hover:border-blue-600 transition-colors">
                {skill}
              </span>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  )
}