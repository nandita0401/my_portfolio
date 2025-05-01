export default function Experience() {
  return (
    <section className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-20">
          Professional Experience
        </h2>

        <div className="absolute top-28 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dashed border-gray-600 z-0"></div>

        {/* Experience 1 - Software Developer */}
        <div className="relative mb-20 flex flex-col items-center md:flex-row md:justify-start">
          <div className="md:w-1/2 md:pr-8 text-center md:text-right z-10">
            <p className="text-3xl font-bold text-gray-300 mb-4">Mar 2024 - Aug 2024</p>
            <div className="bg-[#0a192f] border border-gray-600 rounded-xl p-6 group transition-all duration-300 hover:bg-blue-950 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transform w-full md:ml-auto">
              <h3 className="text-2xl font-bold mb-1">Software Developer</h3>
              <p className="text-xl text-gray-400 mb-1">Barclays</p>
              {/* <p className="text-sm text-gray-500">Jan 2023 – Jul 2023</p> */}
              <p className="text-base text-gray-400 mt-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                During my time at Barclays, I played a key role in delivering a critical middleware integration by modernizing legacy Java components, which enabled seamless cross-system data flow and accelerated stakeholder-driven feed enhancements by 30%. I streamlined production deployments by creating and deploying OpenShift containers, significantly reducing manual effort and aligning with DevOps best practices. Additionally, I led the development of a custom GUI for the DataOps team that enabled secure, self-service data modifications and cut turnaround time by 70% by removing manual approval steps. I also mentored over five new team members, expediting their onboarding and system setup, which resulted in a 100% faster ramp-up and improved overall team productivity. To ensure smooth transitions and project continuity, I conducted multiple knowledge transfer sessions focused on domain workflows, architecture, and coding standards, while fostering effective cross-functional coordination.
              </p>
            </div>
          </div>
          <div className="w-1/12 flex justify-center items-start z-10 mt-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-black"></div>
          </div>
          <div className="md:w-1/2 hidden md:block" />
        </div>

        {/* Experience 2 - Analyst */}
        <div className="relative mb-20 flex flex-col items-center md:flex-row md:justify-end">
          <div className="md:w-1/2 hidden md:block" />
          <div className="w-1/12 flex justify-center items-start z-10 mt-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-black"></div>
          </div>
          <div className="md:w-1/2 md:pl-8 text-center md:text-left z-10">
            <p className="text-3xl font-bold text-gray-300 mb-4">Aug 2021 – Jan 2023</p>
            <div className="bg-[#0a192f] border border-gray-600 rounded-xl p-6 group transition-all duration-300 hover:bg-blue-950 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transform w-full md:mr-auto">
              <h3 className="text-2xl font-bold mb-1">Analyst</h3>
              <p className="text-xl text-gray-400 mb-1">Barclays</p>
              {/* <p className="text-sm text-gray-500">Aug 2021 – Jan 2023</p> */}
              <p className="text-base text-gray-400 mt-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                At Barclays, I developed and optimized ETL pipelines within the Enterprise Security Master (ESM) system to process upstream data from Bloomberg, Refinitiv, and ESMA, boosting processing efficiency and reducing downstream latency by 25%. I led user acceptance testing (UAT) and runback simulations for regulatory events, ensuring 100% compliance and zero production defects. As the owner of vendor change management, I analyzed upstream notifications and proactively coordinated mitigation strategies with IT, DataOps, and downstream teams, preventing outages during over six major vendor updates. In my role as release coordinator, I aligned cross-functional stakeholders and ensured timely, error-free deployments under tight deadlines. I also served as the on-call support lead, resolving critical production issues by analyzing logs, collaborating across teams, and documenting fixes in Confluence—reducing issue recurrence by 40%. Recognized as the Subject Matter Expert (SME) for vendor integration processes, I became the go-to resource for complex data handling and compliance queries. I consistently practiced Agile methodologies, using daily standups and GenJIRA for task tracking, which helped the team improve sprint velocity by 20%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}