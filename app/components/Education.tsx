export default function Education() {
  return (
    <section className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-20">
          Education
        </h2>

        <div className="absolute top-28 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dashed border-gray-600 z-0"></div>

        {/* Timeline item 1 */}
        <div className="relative mb-20 flex flex-col items-center md:flex-row md:justify-start">
          <div className="md:w-1/2 md:pr-8 text-center md:text-right z-10">
            <p className="text-3xl font-bold text-gray-300 mb-4">Expected: May 2026</p>
            <div className="bg-[#0a192f] border border-gray-600 rounded-xl p-6 group transition-all duration-300 hover:bg-blue-950 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transform w-full md:ml-auto">
              <h3 className="text-2xl font-bold mb-2">Master of Science in Computer Information Systems</h3>
              <p className="text-base text-gray-400 mt-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                California State University, Long Beach | GPA: 3.3<br />
                Coursework: Machine Learning, Artificial Intelligence, Cloud Computing (AWS), Advanced Database Management, Business Analytics, Systems Analysis & Design, Deep Learning
              </p>
            </div>
          </div>
          <div className="w-1/12 flex justify-center items-start z-10 mt-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-black"></div>
          </div>
          <div className="md:w-1/2 hidden md:block" />
        </div>

        {/* Timeline item 2 */}
        <div className="relative mb-20 flex flex-col items-center md:flex-row md:justify-end">
          <div className="md:w-1/2 hidden md:block" />
          <div className="w-1/12 flex justify-center items-start z-10 mt-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-black"></div>
          </div>
          <div className="md:w-1/2 md:pl-8 text-center md:text-left z-10">
            <p className="text-3xl font-bold text-gray-300 mb-4">2017 - 2021</p>
            <div className="bg-[#0a192f] border border-gray-600 rounded-xl p-6 group transition-all duration-300 hover:bg-blue-950 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transform w-full md:mr-auto">
              <h3 className="text-2xl font-bold mb-2">Bachelors in Information Technology</h3>
              <p className="text-base text-gray-400 mt-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                UMIT, SNDT | GPA: 9.75 <br />
                Courses: Data Structures, OOPS, Data Mining, Analysis of Algorithm And Complexity, Cyber Security And Forensic, Big Data Analytics, Web Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
