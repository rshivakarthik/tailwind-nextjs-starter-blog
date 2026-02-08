'use client'

export default function Experience() {
  return (
    <section
      id="experience"
      // UPDATED: Changed 'py-24' to 'pt-0 pb-20' to remove top gap
      className="min-h-screen w-full pt-0 pb-20 px-6 bg-[#f8fafc] dark:bg-gray-950/20 border-t border-slate-100 dark:border-slate-900 flex flex-col justify-center"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight text-center">
        Professional <span className="text-blue-600">Experience</span>
      </h2>

      <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-20 text-center">
        Building scalable applications with a focus on <span className="text-blue-600 font-bold">performance</span> and <span className="text-blue-600 font-bold">innovation</span>.
      </p>

      {/* UPDATED: Changed 'max-w-4xl' to 'max-w-6xl' so the content is wider */}
      <div className="max-w-6xl mx-auto relative w-full">
        
        {/* Central Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-indigo-100 dark:bg-slate-800 md:-translate-x-1/2 z-0"></div>

        <div className="space-y-12 relative z-10">
          {[
            {
              company: 'Virtusa Private Limited',
              role: 'Senior Salesforce Developer',
              date: '2024 — present',
              location: 'Bangalore',
              skills: ['Apex', 'LWC', 'REST API', 'SOQL', 'Jenkins', 'Salesforce Shield', 'CI/CD'],
              bullets: [
                'Architected and built an end-to-end loan lifecycle management system using Apex, Triggers, and complex LWC interfaces.',
                'Automated multi-stage loan approval workflows and credit checks using Advanced Flows and Approval Processes.',
                'Designed and implemented RESTful API integrations to sync borrower data with core banking systems and external credit bureaus.',
                'Optimized SOQL/SOSL queries and indexed fields to handle high-volume data transactions, reducing query time by 40%.',
                'Implemented Asynchronous Apex (Batchable, Queueable) for nightly interest calculations and statement generation.',
                'Enforced data security using Salesforce Shield, Platform Encryption, and granular Sharing Rules for sensitive financial data.',
              ],
            },
            {
              company: 'Brillio Technologies',
              role: 'Senior Salesforce Developer',
              date: '2024-2024',
              location: 'Remote',
              skills: ['LWC', 'FSL', 'Offline Sync', 'Jest', 'Flow Builder', 'Platform Events'],
              bullets: [
                'Developed custom LWC-based inspector forms with signature capture and image upload capabilities.',
                'Enabled Salesforce Mobile offline synchronization to allow field agents to work in low-connectivity remote areas.',
                'Automated complex inspection approval chains and service report generation using Flow Builder.',
                'Integrated Salesforce Field Service (FSL) dispatcher console for optimized route planning and resource allocation.',
                'Wrote comprehensive Jest unit tests for LWC components to ensure 90%+ code coverage.',
                'Implemented Platform Events for real-time synchronization between the mobile app and back-office ERP.',
              ],
            },
            {
              company: 'Quess Corp Limited',
              role: 'Salesforce Developer',
              date: '2020 — 2022',
              location: 'Remote',
              skills: ['Sales Cloud', 'CPQ', 'Lightning Components', 'Integrations', 'Talend', 'Data Loader'],
              bullets: [
                'Designed the full insurance policy lifecycle from lead acquisition to policy issuance and renewals.',
                'Built dynamic Lightning components for Claims Management, reducing manual data entry for agents by 50%.',
                'Integrated third-party insurance rating engines and payment gateways via REST APIs.',
                'Implemented Salesforce CPQ to handle complex pricing rules, product bundles, and quote generation.',
                'Migrated over 100k legacy policy records using Data Loader and Talend with zero data loss.',
                'Created interactive Dashboards and Reports for executive leadership to track premium collection and claim ratios.',
              ],
            },
            {
              company: 'Cyber Information Systems',
              role: 'Salesforce Developer',
              date: '2018 — 2020',
              location: 'Bangalore',
              skills: ['Service Cloud', 'Omni-Channel', 'Entitlements', 'Web-to-Case', 'Apex Triggers'],
              bullets: [
                'Customized Service Cloud to streamline patient case management and appointment scheduling.',
                'Built intuitive LWCs for viewing patient history, lab reports, and prescription details in a single view.',
                'Automated case escalation rules and SLA tracking (Entitlement Management) for critical emergency requests.',
                'Configured Omni-Channel routing to assign cases to support agents based on skill set and availability.',
                'Implemented Web-to-Case and Email-to-Case functionalities to capture patient inquiries from multiple channels.',
                'Developed specific Apex Triggers to validate insurance eligibility before appointment confirmation.',
                'Managed user administration including Profiles, Roles, Permission Sets, and OWD settings.',
                'Set up Salesforce Knowledge Base to assist support agents with quick resolution of common queries.'
              ],
            },
          ].map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              
              {/* Timeline Dot (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-slate-900 -translate-x-1/2 -translate-y-1/2 z-20 shadow-md"></div>

              {/* CARD CONTAINER */}
              <div className="bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl shadow-blue-50/50 hover:shadow-2xl transition-shadow relative overflow-hidden">
                
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>

                {/* HEADER SECTION: Logo + Titles */}
                <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
                  
                  {/* LOGO BOX */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-lg shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="w-full">
                    {/* FIXED TYPO: Changed 'text-2x1' to 'text-2xl' */}
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {exp.role}
                    </h3>

                    <p className="text-blue-600 font-bold text-base md:text-sm mb-2">
                      {exp.company}
                    </p>
                    
                    {/* Location & Date Row */}
                    <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400 font-semibold opacity-90">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        {exp.date}
                      </div>
                    </div>
                  </div>
                </div>

                {/* BULLETS SECTION */}
                <ul className="space-y-4 mb-6">
                  {exp.bullets.map((bullet, index) => (
                    <li key={index} className="flex gap-3 items-start group">
                      <span className="mt-[10px] w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform"></span>
                      
                      <span className="text-slate-800 dark:text-slate-400 text-lg leading-tight">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* SKILLS PILLS SECTION */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-800">
                  {exp.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex} 
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full border border-blue-100 dark:border-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}