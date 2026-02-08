'use client'

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 border-t border-slate-100 dark:border-slate-800 text-center"
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black shadow-xl uppercase tracking-wider">
            5 Successful Projects Completed
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
           <span className="text-blue-600">Projects</span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-base mb-12">
          Salesforce applications built using Apex, Lightning, and automation tools,
          focused on scalability, performance, and business value.
        </p>

        {/* Metrics */}
        <div className="flex justify-center gap-10 mb-16 text-blue-600 font-semibold text-sm">
          <span>100% On-Time Delivery</span>
          <span>100% Quality Assurance</span>
          <span>100% Client Satisfaction</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {[
            {
              title: 'Digital Loan Management System',
              summary:
                'End-to-end Salesforce-based loan automation system covering application, KYC validation, EMI calculation, and disbursement. Integrated external services using REST APIs to reduce manual processing and improve loan approval turnaround time.',
              tech: ['Salesforce', 'Apex', 'LWC', 'Sales Cloud', 'REST APIs'],
            },
            {
              title: 'Energy Inspectors Platform',
              summary:
                'Inspection management platform enabling field technicians to capture building and construction data. Implemented approval workflows, validations, and reporting to ensure compliance with mandatory construction standards.',
              tech: ['Salesforce', 'LWC', 'Apex', 'Sales Cloud', 'REST APIs'],
            },
            {
              title: 'Insurance Management Application',
              summary:
                'Comprehensive insurance policy management system supporting policy creation, renewals, and claims processing. Automated workflows and business rules reduced manual effort and improved operational efficiency.',
              tech: ['Salesforce', 'Apex', 'Aura', 'Flows', 'SOQL'],
            },
            {
              title: 'Antech Mars-Marga',
              summary:
                'Service Cloud–based support application for veterinary services. Improved case management and customer support by configuring service console, automation rules, and custom reports.',
              tech: ['Salesforce', 'Service Cloud', 'Apex', 'Visualforce', 'Reports'],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="
                group flex flex-col
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                rounded-3xl
                p-6
                min-h-[320px]
                shadow-lg
                hover:border-blue-600
                transition-all
              "
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-base mb-6">
                {project.summary}
              </p>

              <div className="mt-auto">
                <h4 className="font-semibold text-sm mb-3">
                  Technologies Used:
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        px-3 py-1
                        text-xs font-medium
                        rounded-full
                        border
                        bg-slate-100 text-slate-700 border-slate-200
                        group-hover:bg-blue-100 group-hover:text-blue-700 group-hover:border-blue-300
                        transition
                      "
                    >
                      {t}
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
