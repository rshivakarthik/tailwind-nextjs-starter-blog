import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto bg-blue-600 rounded-[3rem] p-12 text-center text-white shadow-xl shadow-blue-200 dark:shadow-none">
        <h2 className="text-4xl font-extrabold mb-6">Ready to transform your Salesforce instance?</h2>
        <p className="text-xl text-blue-100 mb-10">
          I am currently available for new projects and consulting opportunities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="mailto:your-email@example.com"
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
          >
            Get in Touch
          </Link>
          <Link
            href="http://linkedin.com/in/shiva-karthik-257640253"
            target="_blank"
            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
          >
            LinkedIn Profile
          </Link>
        </div>
      </div>
    </section>
  )
}