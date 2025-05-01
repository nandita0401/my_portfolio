"use client";

const projects = [
  {
    name: "my_portfolio",
    description: "A personal portfolio website showcasing my skills and projects.",
    link: "https://github.com/nandita0401/my_portfolio",
    icon: "portfolio.svg",
    bgColor: "from-purple-500 to-pink-500",
  },
  {
    name: "Mindfull_Buddy",
    description: "An application designed to promote mindfulness and mental well-being.",
    link: "https://github.com/nandita0401/Mindfull_Buddy",
    icon: "mental-health.svg",
    bgColor: "from-teal-400 to-green-500",
  },
  {
    name: "wellness-quest",
    description: "A platform to track and improve personal wellness journeys.",
    link: "https://github.com/nandita0401/wellness-quest",
    icon: "wellness.svg",
    bgColor: "from-indigo-500 to-violet-600",
  },
  {
    name: "ai_content_recommender",
    description: "An AI-based system for personalized content recommendations.",
    link: "https://github.com/nandita0401/ai_content_recommender",
    icon: "ai.svg",
    bgColor: "from-rose-400 to-red-500",
  },
  {
    name: "ai_drug_interaction",
    description: "A tool leveraging AI to predict drug interactions.",
    link: "https://github.com/nandita0401/ai_drug_interaction",
    icon: "pill-ai.svg",
    bgColor: "from-rose-500 to-pink-500",
  },
  {
    name: "US-Job-Market-Analysis",
    description: "An analysis of the US job market trends and insights.",
    link: "https://github.com/nandita0401/US-Job-Market-Analysis",
    icon: "bar-chart.svg",
    bgColor: "from-blue-300 to-indigo-500",
  },
  {
    name: "TestSummarizerTool",
    description: "A tool to generate summaries from text inputs.",
    link: "https://github.com/nandita0401/TestSummarizerTool",
    icon: "file-search.svg",
    bgColor: "from-fuchsia-500 to-purple-500",
  },
  {
    name: "is-640-nn",
    description: "A neural network-based classification system implemented for IS 640 coursework.",
    link: "https://github.com/nandita0401/is-640-nn",
    icon: "neural-net.svg",
    bgColor: "from-indigo-500 to-violet-600",
  },
  {
    name: "Automatic-Answer-Evaluation-Using-ML-and-NLP",
    description: "Evaluates student answers using NLP and machine learning for grading.",
    link: "https://github.com/nandita0401/Automatic-Answer-Evaluation-Using-ML-and-NLP/tree/master",
    icon: "file-search.svg",
    bgColor: "from-blue-400 to-indigo-400",
  },
  {
    name: "IPL-Cricket-Match-Analysis",
    description: "Analyzes IPL match data for trends, performance, and visualizations.",
    link: "https://github.com/nandita0401/IPL-Cricket-Match-Analysis/tree/master",
    icon: "cricket.svg",
    bgColor: "from-teal-400 to-green-500",
  },
  {
    name: "Heart-Disease-Analysis-Using-Python",
    description: "Heart disease prediction using machine learning and healthcare datasets.",
    link: "https://github.com/nandita0401/Heart-Disease-Analysis-Using-Python/tree/master",
    icon: "heart.svg",
    bgColor: "from-rose-400 to-red-500",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-16 px-4 bg-[#f9fafb] dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-left text-blue-500 mb-6">
          My <span className="text-black dark:text-white">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg max-w-3xl">
          I’ve embarked on numerous projects throughout the years, many of which are open-source.
          Feel free to explore the code and contribute your ideas for further enhancements!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const displayName = project.name
              .replace(/[_-]/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase());

            return (
              <div
                key={index}
                className="group bg-white dark:bg-[#111827] rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-4 transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.bgColor} flex items-center justify-center p-2 shadow-md`}>
                    <img
                      src={`/icons/${project.icon}`}
                      alt={`${displayName} project icon`}
                      className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/icons/default.svg";
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {displayName}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${displayName} on GitHub`}
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Live Link <span aria-hidden="true">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}