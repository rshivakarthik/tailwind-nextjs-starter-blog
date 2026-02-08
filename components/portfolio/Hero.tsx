import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 text-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Software <span className="text-blue-600">Engineer</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 font-medium">
            Senior Salesforce Developer • Implementation Expert
          </p>
          <p className="max-w-[800px] text-gray-600 dark:text-gray-300 md:text-lg">
            Experienced in Salesforce ecosystem with focus on **performance**, **maintainability**, and **security**.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all">
              Start Your Project →
            </Link>
            <Link href="http://linkedin.com/in/shiva-karthik-257640253" target="_blank" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all">
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero