import React from 'react';

export default function Page() {
  const whatsappLink = "https://wa.me/911234567890"; // Replace with your actual number

return (
    // Ensure this wrapper is 'relative'
    <div className="relative w-full transition-colors duration-500 font-sans bg-white dark:bg-gray-950">
      
{/* --- ADDED HERE: BACKGROUND THEME ENGINE --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
        {/* Massive blobs that cover the 'Total' background */}
        <div className="absolute -left-[10%] -top-[10%] w-[100vw] h-[100vh] bg-[#D6E4FF] rounded-full blur-[160px] opacity-25"></div>
        <div className="absolute -right-[15%] top-[10%] w-[85vw] h-[85vh] bg-[#FF00D6] rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute left-[-10%] bottom-[-10%] w-[75vw] h-[75vh] bg-[#00F0FF] rounded-full blur-[140px] opacity-25"></div>
      </div>

      {/* SECTION 1: HERO - Matches Photo 2 Exactly */}
      <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 text-center pt-32 pb-20 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

        <div className="w-full max-w-5xl mx-auto z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Software <span className="text-blue-600">Engineer</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-lg mb-8 uppercase tracking-widest">
            Senior Salesforce Developer • Implementation Expert
          </p>

          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-12">
            Experienced in Salesforce ecosystem with focus on <span className="text-blue-600 font-bold">performance</span>, 
            <span className="text-blue-600 font-bold ml-1">maintainability</span>, and <span className="text-blue-600 font-bold ml-1">security</span>. 
            Specializing in LWC, Apex, CPQ, and cloud integrations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="group relative bg-blue-600 text-white px-10 py-4 rounded-full text-sm font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition transform hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 font-bold">Start Your Project →</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300"></div>
            </a>
            <button className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition transform hover:-translate-y-1 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              View Resume
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-16 mb-20 text-center">
            {[
              { name: 'Frontend', d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { name: 'Backend', d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
              { name: 'Cloud', d: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
              { name: 'Mobile', d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" }
            ].map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-lg shadow-blue-100/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d={skill.d}/></svg>
                </div>
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Sales Cloud", "Service Cloud", "OmniStudio", "CPQ", "Integrations", "Performance Optimized"].map((skill) => (
              <span key={skill} className="px-6 py-2 bg-white dark:bg-slate-900 text-blue-600 text-xs font-bold rounded-full border border-blue-100 shadow-sm hover:border-blue-600 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PROFESSIONAL EXPERIENCE - All 4 Companies with Fidelity Metadata */}
      <section id="experience" className="py-24 px-6 bg-[#f8fafc] dark:bg-gray-950/20 border-t border-slate-100 dark:border-slate-900">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight text-center">Professional <span className="text-blue-600">Experience</span></h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto mb-24 text-center">Building scalable applications with a focus on performance and innovation</p>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2 z-0"></div>
          <div className="space-y-20 relative z-10 text-left">
            {[
              { company: "Virtusa Private Limited", role: "Senior Salesforce Developer", date: "2024 — 2025", location: "Bangalore", bullets: ["Built end-to-end loan lifecycle for a Loan Management system using Apex, Triggers, and LWC", "Automated loan approval workflows using Flows & Process Automation", "Integrated external banking systems using REST APIs", "Optimized SOQL queries to handle high-volume loan records", "Supported CI/CD deployment using Change Sets / Git-based pipelines"] },
              { company: "Brillio Technologies", role: "Senior Salesforce Developer", date: "2024", location: "Remote", bullets: ["Developed LWC-based forms for field inspectors to capture measurements", "Used Salesforce Mobile App for on-site data entry and offline sync", "Implemented validation rules to ensure accurate construction data", "Automated inspection approvals and status tracking with Flows"] },
              { company: "Quess Corp Limited", role: "Salesforce Developer", date: "2020 — 2022", location: "Remote", bullets: ["Designed policy lifecycle management using custom objects", "Built Lightning components for policy creation, renewal, and claims", "Integrated third-party insurance systems via REST/SOAP APIs", "Improved performance by refactoring triggers into Trigger Framework"] },
              { company: "Cyber Information Systems", role: "Salesforce Developer", date: "2018 — 2020", location: "Bangalore", bullets: ["Developed Service Cloud console for veterinary support teams", "Customized Case Management for animal healthcare workflows", "Built LWCs for quick access to patient history and lab reports", "Automated case assignment and escalation using Flows"] }
            ].map((exp, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-10 md:p-12 rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:scale-[1.01] relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full mt-[-1px] shadow-[0_0_15px_rgba(37,99,235,1)] z-30"></div>
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h3>
                      <p className="text-blue-600 font-extrabold text-xl mb-6 uppercase tracking-wider">{exp.company}</p>
                      <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                        {exp.bullets.map((b, i) => (<li key={i} className="flex gap-4 font-medium"><span className="text-blue-500 font-black text-xl leading-none">•</span>{b}</li>))}
                      </ul>
                      <div className="mt-8 text-slate-400 text-sm font-bold flex gap-6 uppercase tracking-widest justify-end items-center border-t border-slate-100 pt-6">
                        <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>{exp.location}</span>
                        <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>{exp.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3:PROJECTS - Card Fidelity with Status Box */}
      <section id="projects" className="py-24 px-6 border-t border-slate-100 dark:border-slate-800 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black flex items-center gap-2 shadow-xl shadow-blue-200 uppercase tracking-wider">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7H7v6h6V7z"/><path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 100 14 7 7 0 000-14z" clipRule="evenodd"/></svg>
              6 Successful Projects Completed
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-16 tracking-tight">Featured <span className="text-blue-600">Projects</span></h2>

          <div className="flex flex-wrap justify-center gap-10 md:gap-20 mb-20 text-blue-600 font-extrabold text-sm uppercase tracking-widest text-center">
            {['100% On-Time Delivery', '100% Quality Assurance', '100% Client Satisfaction'].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>{text}
              </div>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 text-left">
            {[
             {
  title: "Digital Loan Management System",
  category: "Salesforce Project",
  tech: ["Salesforce", "Apex", "LWC", "OmniStudio", "Sales Cloud", "Integration APIs"],
  logo: "M12 6v6l4 2",
  summary: "Built a Salesforce-based loan management solution for automating home loan applications, KYC verification, credit score integration, EMI calculation, and approval workflows with external API integrations."
},
{
  title: "Energy Inspectors",
  category: "Salesforce Project",
  tech: ["Salesforce", "Apex", "LWC", "Sales Cloud", "REST/SOAP APIs", "Platform Events"],
  logo: "M3 12h18M12 3v18",
  summary: "Developed a construction inspection management system to capture building measurements, enforce compliance rules, automate approvals, and integrate third-party systems using event-driven architecture."
},
{
  title: "Insurance Management Application",
  category: "Salesforce Project",
  tech: ["Salesforce", "Apex", "LWC", "Aura", "Force.com", "Workflow Automation"],
  logo: "M5 13l4 4L19 7",
  summary: "Implemented an insurance management platform enabling policy tracking, premium payments, workflow automation, role-based security, and online customer interactions."
},
{
  title: "Antech Mars-Marga Support System",
  category: "Salesforce Service Cloud Project",
  tech: ["Salesforce", "Service Cloud", "Apex", "Visualforce", "Reports & Dashboards"],
  logo: "M9 12l2 2 4-4",
  summary: "Configured and customized Service Cloud to streamline case management, automate escalations, implement Web-to-Lead, and enhance customer support operations for veterinary services."
}

            ].map((p, i) => (
              <div key={i} className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 flex flex-col shadow-2xl hover:scale-[1.02] transition-all transform duration-300">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={p.logo}/></svg>
                  </div>
                  <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-4 py-1.5 rounded-xl text-[10px] font-black border border-blue-100 uppercase tracking-widest">{p.category}</span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight leading-tight">{p.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-[15px] font-medium leading-relaxed mb-8 flex-grow">{p.summary}</p>
                <div className="mb-10 text-left">
                  <h4 className="text-slate-900 dark:text-white text-xs font-black mb-4 uppercase tracking-widest">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => <span key={t} className="px-3 py-1 bg-blue-50/50 dark:bg-blue-900/10 text-blue-600 text-[10px] font-black rounded-lg border border-blue-100 uppercase tracking-tighter">{t}</span>)}
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-sm font-black flex items-center justify-center gap-3 shadow-xl shadow-blue-200">
                  completed  
                </button>
              </div>
            ))}
          </div>

          {/* Photo 1: Ready to Start section - Clean Text, NO BOX */}
          <div className="mt-32 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Ready to <span className="text-blue-600">Start Your Project?</span></h2>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">Join satisfied clients who have transformed their ideas into successful digital products.</p>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-blue-700 transition transform hover:-translate-y-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.604 6.023L0 24l6.163-1.618a12.003 12.003 0 005.883 1.547h.005c6.634 0 12.048-5.414 12.048-12.05 0-3.21-1.248-6.228-3.513-8.493z"/></svg>
              WhatsApp me now
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4: ABOUT ME - Reordered & Color Correction */}
      <section id="about" className="py-24 px-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-gray-950 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            <span className="text-blue-600">About</span> Me
          </h2>
          <p className="max-w-3xl mx-auto text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed mb-16 text-center">Senior Salesforce Developer bridging technical excellence with business strategy.</p>
          <div className="bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-10 md:p-12 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-10 mb-16 text-left">
<div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-300">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-x.5 font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-widest">Education</h3>
              <p className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-2 leading-tight text-left">Master of Business Administration (MBA)</p>
              <p className="text-x.5 font-bold text-slate-700 dark:text-slate-300 text-left">Osmania University, Hyderabad • 2016 - 2018</p>
            </div>
          </div>

          <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-10 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-left">
            {["Certified Administrator", "Platform Developer - 1", "Platform App Builder", "Omni Studio Developer", "Consumer Goods", "Certified Associate"].map((c, i) => (
              <div key={i} className="bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 p-8 rounded-[2rem] shadow-xl flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/></svg></div>
                <h4 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">Salesforce {c}</h4>
              </div>
            ))}
          </div>

          {/* Let's Collaborate (NO PAGE BREAK LINE) */}
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-blue-700 transition transform hover:-translate-y-1">Let's Collaborate →</a>
        </div>
      </section>

      {/* SECTION 5: SKILLS & EXPERTISE - High-Fidelity Connect Section */}
      <section id="contact" className="py-24 px-6 bg-[#fcfcfd] dark:bg-gray-950 text-center border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight text-center">Let's Create <span className="text-blue-600">Something Amazing</span></h2>
          <p className="text-xl text-slate-500 mb-20 max-w-2xl mx-auto font-medium text-center">Whether you are a <span className="text-blue-600 font-bold">startup</span>, <span className="text-blue-600 font-bold">business owner</span>, or <span className="text-blue-600 font-bold">recruiter</span> — I would love to hear from you.</p>

          <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight text-center">My Skills & Expertise</h3>
          <p className="text-slate-500 mb-16 text-center">Technologies I use to bring Salesforce ideas to life</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8 mb-32">
            {[
              { name: "Apex", level: "Advanced", logo: "https://www.svgrepo.com/show/353423/apex.svg" },
              { name: "LWC", level: "Advanced", logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" },
              { name: "OmniStudio", level: "Advanced", logo: "https://www.svgrepo.com/show/354313/salesforce.svg" },
              { name: "Sales Cloud", level: "Expert", logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" },
              { name: "Service Cloud", level: "Expert", logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" },
              { name: "CPQ", level: "Advanced", logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" },
              { name: "JavaScript", level: "Advanced", logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
              { name: "REST API", level: "Advanced", logo: "https://www.svgrepo.com/show/354262/rest-api.svg" },
              { name: "SOQL/SOSL", level: "Advanced", logo: "https://www.svgrepo.com/show/354313/salesforce.svg" },
              { name: "Git", level: "Advanced", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
              { name: "Flows", level: "Advanced", logo: "https://www.svgrepo.com/show/354313/salesforce.svg" },
              { name: "PostgreSQL", level: "Intermediate", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" }
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <img src={skill.logo} alt={skill.name} className="w-12 h-12 object-contain" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 text-center">{skill.name}</h4>
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest text-center">{skill.level}</p>
              </div>
            ))}
          </div>

          {/* Connect Section (Photo 2 Fidelity - Bold Blue & Block Muted Email) */}
          <div className="mt-20 border-t border-slate-100 pt-20">
             <h2 className="text-4xl md:text-3xl font-extrabold text-blue-600 mb-8 tracking-tight uppercase text-center">Connect with Me:</h2>
             <div className="inline-block px-12 py-6 bg-slate-100 dark:bg-slate-800/50 rounded-3xl mb-12 border border-slate-200 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400 font-bold text-lg tracking-widest text-center">rshivakarthik218@gmail.com</p>
             </div>
             <div className="flex justify-center gap-8">
                {[
{ 
          name: 'whatsapp', 
          href: "https://wa.me/911234567890", // Update with your actual WhatsApp number
          d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.604 6.023L0 24l6.163-1.618a12.003 12.003 0 005.883 1.547h.005c6.634 0 12.048-5.414 12.048-12.05 0-3.21-1.248-6.228-3.513-8.493z" 
        },
        { 
          name: 'linkedin', 
          href: "https://www.linkedin.com/in/rshivakarthik/", // Final LinkedIn link
          d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
        },
        { 
          name: 'github', 
          href: "https://github.com/rshivakarthik", // Final GitHub link
          d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.134-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" 
        },
        { 
          name: 'twitter', 
          href: "https://twitter.com/rshivakarthik", // Update with your actual Twitter handle
          d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" 
        },
        { 
          name: 'resume', 
          href: "/shiva-resume.pdf", // Ensure shiva-resume.pdf is in your 'public' folder
          d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" 
        }                ].map((social, idx) => (
                  <div key={idx} className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition active:scale-95 group">
                     <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d={social.d}/></svg>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white dark:bg-gray-950 text-slate-400 text-sm font-black border-t border-slate-100 dark:border-slate-800 text-center uppercase tracking-widest">
        <p>© 2026 Shiva . All rights reserved.</p>
      </footer>
    </div>
  );
}