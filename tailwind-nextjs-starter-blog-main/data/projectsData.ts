interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Digital Loan Management System',
    description: `Developed an end-to-end Loan Management System using Salesforce. Integrated external APIs (CIBIL, PAN) and implemented OmniStudio (FlexCards & OmniScripts) for a guided onboarding experience.`,
    imgSrc: '/static/images/loan-system.png',
    href: '#',
  },
  {
    title: 'Energy Inspectors - Sales Cloud',
    description: `Automated building measurement criteria and construction capturing processes. Built responsive LWC interfaces and managed complex integrations using REST/SOAP APIs with event-driven architecture.`,
    imgSrc: '/static/images/energy-project.jpg',
    href: '#',
  },
  {
    title: 'Insurance Management Application',
    description: `A project for Prudential Financial Inc. to manage policy details and online premium payments. Developed custom LWC and Aura components for task management and project milestone tracking.`,
    imgSrc: '/static/images/insurance-app.png',
    href: '#',
  },
  {
    title: 'Antech Mars-Marga - Service Cloud',
    description: `Optimized Service Cloud console for veterinary care teams. Configured case management, escalation processes, and automated lead-to-account conversion logic using Apex and Workflows.`,
    imgSrc: '/static/images/antech-project.jpg',
    href: '#',
  },
]

export default projectsData