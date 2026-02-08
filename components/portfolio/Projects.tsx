export default function Projects() {
  const projects = [
    {
      title: 'Salesforce Integration Hub',
      description: 'Custom REST API integrations between Salesforce and external ERP systems.',
      tags: ['Apex', 'REST', 'OAuth 2.0'],
    },
    {
      title: 'LWC Dashboard',
      description: 'Performance-optimized Lightning Web Components for real-time data visualization.',
      tags: ['LWC', 'Javascript', 'Chart.js'],
    },
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {projects.map((project, i) => (
          <div key={i} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}