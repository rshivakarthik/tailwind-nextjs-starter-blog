'use client'
import React from 'react';
import { MessageCircle, Linkedin, Github, Twitter, Download } from 'lucide-react';

export default function Skills() {
  const skillsData = [
    // --- SALESFORCE SKILLS ---
    {
      name: 'Apex',
      level: 'Advanced',
      color: 'text-blue-600',
      svgPath: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z",
    },
    {
      name: 'LWC',
      level: 'Advanced',
      color: 'text-orange-500',
      svgPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    },
    {
      name: 'Aura',
      level: 'Advanced',
      color: 'text-indigo-500',
      svgPath: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    },
    {
      name: 'OmniStudio',
      level: 'Advanced',
      color: 'text-teal-500',
      svgPath: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6z",
    },
    {
      name: 'Sales Cloud',
      level: 'Advanced',
      color: 'text-sky-500',
      svgPath: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257",
    },
    {
      name: 'Service Cloud',
      level: 'Advanced',
      color: 'text-purple-600',
      svgPath: "M12 2.25a.75.75 0 01.75.75v2.25",
    },
    {
      name: 'CPQ',
      level: 'Advanced',
      color: 'text-rose-500',
      svgPath: "M9.568 3H5.25A2.25 2.25 0 003 5.25",
    },
    {
      name: 'Flows',
      level: 'Advanced',
      color: 'text-emerald-500',
      svgPath: "M7.5 21L3 16.5m0 0L7.5 12",
    },
    // --- DEVELOPER TOOLS ---
    {
      name: 'JavaScript',
      level: 'Advanced',
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: 'Next.js',
      level: 'Advanced',
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: 'Tailwind CSS',
      level: 'Advanced',
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: 'MySQL',
      level: 'Advanced',
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: 'GitHub Actions',
      level: 'Intermediate',
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
    },
    {
      name: 'REST API',
      level: 'Advanced',
      color: 'text-cyan-600',
      svgPath: "M12 21a9.004 9.004 0 008.716-6.747",
    },
    {
      name: 'SOQL / SOSL',
      level: 'Advanced',
      color: 'text-slate-600',
      svgPath: "M20.25 6.375c0 2.278-3.694 4.125",
    },
    {
      name: 'Git',
      level: 'Advanced',
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: 'PostgreSQL',
      level: 'Advanced',
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    // --- PROFESSIONAL SKILLS ---
    {
      name: 'Salesforce Security',
      level: 'Advanced',
      color: 'text-red-500',
      svgPath: "M12 3l7.5 4.5V12c0 5.25-3.75 9-7.5 9",
    },
    {
      name: 'Profiles & Permission Sets',
      level: 'Advanced',
      color: 'text-yellow-600',
      svgPath: "M16.5 6.75a4.5 4.5 0 11-9 0",
    },
    {
      name: 'Sharing Rules & OWD',
      level: 'Advanced',
      color: 'text-lime-600',
      svgPath: "M7.5 12l4.5 4.5L16.5 12",
    },
    {
      name: 'Change Sets',
      level: 'Advanced',
      color: 'text-fuchsia-500',
      svgPath: "M4.5 12h15M12 4.5v15",
    },
    {
      name: 'Data Loader',
      level: 'Advanced',
      color: 'text-amber-500',
      svgPath: "M12 16.5V7.5m0 9l-3-3m3 3l3-3",
    },
    {
      name: 'Salesforce CLI',
      level: 'Intermediate',
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
    },
    {
      name: 'VS Code',
      level: 'Advanced',
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: 'Named Credentials',
      level: 'Advanced',
      color: 'text-cyan-500',
      svgPath: "M15.75 5.25a3 3 0 11-6 0",
    },
    {
      name: 'OAuth 2.0',
      level: 'Advanced',
      color: 'text-indigo-600',
      svgPath: "M12 3v18m9-9H3",
    },
    {
      name: 'Platform Events',
      level: 'Intermediate',
      color: 'text-green-600',
      svgPath: "M12 6v6l4 2",
    },
    {
      name: 'Reports & Dashboards',
      level: 'Advanced',
      color: 'text-blue-500',
      svgPath: "M3 3h18v18H3V3z",
    },
  ];

  const socialLinks = [
    { name: 'WhatsApp', icon: <MessageCircle size={24} strokeWidth={2.5} />, url: 'https://wa.me/yournumber' },
    { name: 'LinkedIn', icon: <Linkedin size={24} strokeWidth={2.5} />, url: 'http://linkedin.com/in/shiva-karthik-257640253' },    { name: 'GitHub', icon: <Github size={24} strokeWidth={2.5} />, url: 'https://github.com/yourhandle' },
    { name: 'Twitter', icon: <Twitter size={24} strokeWidth={2.5} />, url: 'https://twitter.com/yourhandle' },
    { name: 'Resume', icon: <Download size={24} strokeWidth={2.5} />, url: '/resume.pdf' },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#fcfcfd] dark:bg-gray-950 text-center border-t border-slate-100 dark:border-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Let's Create <span className="text-blue-600">Something Amazing</span>
        </h2>

        <p className="text-xl text-slate-500 mb-20 max-w-2xl mx-auto font-medium">
          Whether you are a startup, business owner, or recruiter — I would love to hear from you.
        </p>

        <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
          My Skills & Expertise
        </h3>

        <p className="text-slate-500 mb-16">
          Technologies I use to bring Salesforce ideas to life
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-1 mb-24">
          {skillsData.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
                {skill.iconUrl ? (
                  <img src={skill.iconUrl} alt={skill.name} className="w-8 h-8" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-8 h-8 ${skill.color}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={skill.svgPath} />
                  </svg>
                )}
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {skill.name}
              </p>
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-1">
                {skill.level}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-extrabold text-blue-600 mb-2 uppercase tracking-tight">
          Connect with Me
        </h3>

        <div className="inline-block px-8 py-4 bg-white/60 dark:bg-slate-900/40 rounded-2xl mb-12 border border-white/30 shadow-lg shadow-black/5">
          <p className="text-slate-600 dark:text-slate-300 font-bold text-base tracking-wide">
            rshivakarthik218@gmail.com
          </p>
        </div>

        {/* SOCIAL ICONS MATCHING SCREENSHOT */}
        <div className="flex justify-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-200 cursor-pointer"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}