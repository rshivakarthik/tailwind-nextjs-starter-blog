const experiences = [
  { company: 'Virtusa', role: 'Senior Salesforce Developer', period: '2024 - Present' },
  { company: 'Brillio', role: 'Salesforce Developer', period: '2023 - 2024' },
  { company: 'Quess Corp', role: 'Salesforce Developer', period: '2020 - 2022' },
  { company: 'Cyber Information Systems', role: 'Junior Developer', period: '2018 - 2020' },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
      <div className="space-y-8 max-w-3xl mx-auto px-6">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-4 border-blue-600 pl-6 py-2">
            <h3 className="text-xl font-bold">{exp.role}</h3>
            <p className="text-blue-600 font-semibold">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}