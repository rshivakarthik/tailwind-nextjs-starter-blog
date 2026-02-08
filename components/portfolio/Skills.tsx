'use client'
import React from 'react';
import { MessageCircle, Linkedin, Github, Twitter, Download } from 'lucide-react';

export default function Skills() {
  const sfIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg";

  // Sorted Alphabetically within categories
  const salesforceSkills = [
    { name: 'Apex', level: 'Advanced', iconUrl: sfIcon },
    { name: 'CPQ', level: 'Advanced', iconUrl: sfIcon },
    { name: 'Flows', level: 'Advanced', iconUrl: sfIcon },
    { name: 'LWC', level: 'Advanced', iconUrl: sfIcon },
    { name: 'Named Credentials', level: 'Advanced', iconUrl: sfIcon },
    { name: 'OAuth 2.0', level: 'Advanced', iconUrl: sfIcon },
    { name: 'OmniStudio', level: 'Advanced', iconUrl: sfIcon },
    { name: 'OWD & Profiles', level: 'Advanced', iconUrl: sfIcon },
    { name: 'Permission Sets', level: 'Advanced', iconUrl: sfIcon },
    { name: 'Platform Events', level: 'Intermediate', iconUrl: sfIcon },
    { name: 'Reports & Dashboards', level: 'Advanced', iconUrl: sfIcon },
    { name: 'REST API', level: 'Advanced', iconUrl: sfIcon },
    { name: 'Sales Cloud', level: 'Advanced', iconUrl: sfIcon },
    { name: 'Salesforce Security', level: 'Advanced', iconUrl: sfIcon },
    { name: 'Service Cloud', level: 'Advanced', iconUrl: sfIcon },
    { name: 'SOQL / SOSL', level: 'Advanced', iconUrl: sfIcon },
  ];

  const devTools = [
    {
      name: 'Git',
      level: 'Advanced',
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
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
      name: 'VS Code',
      level: 'Advanced',
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ];

  const allSkills = [...salesforceSkills, ...devTools];

  const socialLinks = [
    { name: 'WhatsApp', icon: <MessageCircle size={24} strokeWidth={2.5} />, url: 'https://wa.me/+918374101793' },
    { name: 'LinkedIn', icon: <Linkedin size={24} strokeWidth={2.5} />, url: 'http://linkedin.com/in/shiva-karthik-257640253' },
    { name: 'GitHub', icon: <Github size={24} strokeWidth={2.5} />, url: 'https://github.com/yourhandle' },
    { name: 'Twitter', icon: <Twitter size={24} strokeWidth={2.5} />, url: 'https://twitter.com/yourhandle' },
    { name: 'Resume', icon: <Download size={24} strokeWidth={2.5} />, url: '/resume.pdf' },
  ];

  return (
    <section
      id="skills"
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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-4 mb-24">
          {allSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
                <img 
                  src={skill.iconUrl} 
                  alt={skill.name} 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white text-center px-2">
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