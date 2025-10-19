export default function Experience() {
  return (
    <section className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-20">
          Professional Experience
        </h2>

        <div className="absolute top-28 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dashed border-gray-600 z-0"></div>

        {/* Experience 1 - Data Analyst */}
        <div className="relative mb-20 flex flex-col items-center md:flex-row md:justify-start">
          <div className="md:w-1/2 md:pr-8 text-left z-10">
            <p className="text-3xl font-bold text-gray-300 mb-4">Mar 2025 - Present</p>
            <div className="bg-[#0a192f] border border-gray-600 rounded-xl p-6 group transition-all duration-300 hover:bg-blue-950 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transform w-full md:ml-auto">
              <h3 className="text-2xl font-bold mb-1">Data Analyst (Student Assistant)</h3>
              <p className="text-xl text-gray-400 mb-1">
                California State University, Long Beach
              </p>
              <ul className="list-disc pl-5 text-base text-gray-400 space-y-2 mt-2 text-left opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <li>
                  Automated analysis of 500+ monthly feedback responses with Python, cutting manual processing effort by
                  70%.
                </li>
                <li>
                  Built SQL- and Python-powered dashboards that monitor student engagement for 1,000+ participants, enabling
                  data-driven decisions.
                </li>
                <li>
                  Implemented an NLP classification pipeline to surface feedback themes, improving insight accuracy and
                  turnaround by 60%.
                </li>
                <li>
                  Tuned preprocessing logic and query performance to lower average runtimes by ~40%, accelerating reporting
                  cycles.
                </li>
                <li>Translated analytics into actionable insights that boosted event participation by 25%.</li>
              </ul>
            </div>
          </div>
          <div className="w-1/12 flex justify-center items-start z-10 mt-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-black"></div>
          </div>
          <div className="md:w-1/2 hidden md:block" />
        </div>

        {/* Experience 2 - Development Intern */}
        <div className="relative mb-20 flex flex-col items-center md:flex-row md:justify-end">
          <div className="md:w-1/2 hidden md:block" />
          <div className="w-1/12 flex justify-center items-start z-10 mt-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-black"></div>
          </div>
          <div className="md:w-1/2 md:pl-8 text-left z-10">
            <p className="text-3xl font-bold text-gray-300 mb-4">May 2025 - Aug 2025</p>
            <div className="bg-[#0a192f] border border-gray-600 rounded-xl p-6 group transition-all duration-300 hover:bg-blue-950 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transform w-full md:mr-auto">
              <h3 className="text-2xl font-bold mb-1">Development Intern</h3>
              <p className="text-xl text-gray-400 mb-1">Intellisync AI</p>
              <ul className="list-disc pl-5 text-base text-gray-400 space-y-2 mt-2 text-left opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <li>Enhanced the corporate WordPress site, improving engagement metrics and lowering bounce rate by 18%.</li>
                <li>
                  Built a PyTorch-based product matching pipeline that raised matching accuracy by 25% with ranked,
                  confidence-weighted recommendations.
                </li>
                <li>
                  Developed an OCR and metadata tagging system with Tesseract, achieving 92% extraction accuracy and reducing
                  manual review by 40%.
                </li>
                <li>
                  Guided migration planning for the OCR pipeline on Google Cloud, recommending Vision API adoption and cutting
                  projected operating costs by 30%.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience 3 - Software Developer */}
        <div className="relative mb-20 flex flex-col items-center md:flex-row md:justify-start">
          <div className="md:w-1/2 md:pr-8 text-left z-10">
            <p className="text-3xl font-bold text-gray-300 mb-4">Aug 2021 - Aug 2024</p>
            <div className="bg-[#0a192f] border border-gray-600 rounded-xl p-6 group transition-all duration-300 hover:bg-blue-950 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transform w-full md:ml-auto">
              <h3 className="text-2xl font-bold mb-1">Software Developer - BA4</h3>
              <p className="text-xl text-gray-400 mb-1">Barclays</p>
              <ul className="list-disc pl-5 text-base text-gray-400 space-y-2 mt-2 text-left opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <li>
                  Re-architected legacy Java ETL algorithms, APIs, and microservices to integrate 10+ vendor feeds handling
                  millions of daily records.
                </li>
                <li>
                  Delivered a full-stack GUI that let DataOps self-serve updates, shrinking turnaround time from ~3 hours to 10
                  minutes.
                </li>
                <li>
                  Engineered resilient middleware workflows, authored regression suites, and validated releases, cutting
                  production defects by 25%.
                </li>
                <li>
                  Automated runbacks and orchestrated UAT for major events, safeguarding 100% accurate downstream reporting.
                </li>
                <li>
                  Triaged 200+ vendor change notices, mitigating risks to 20+ consuming applications through proactive
                  coordination.
                </li>
                <li>
                  Led production support rotations, resolving 50+ recurring incidents via log analysis and cross-team
                  collaboration to increase throughput by 40%.
                </li>
                <li>
                  Supported OpenShift deployments and mentored new hires with KT sessions to uphold coding standards and
                  resiliency practices.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/12 flex justify-center items-start z-10 mt-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-black"></div>
          </div>
          <div className="md:w-1/2 hidden md:block" />
        </div>
      </div>
    </section>
  );
}
