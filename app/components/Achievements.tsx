"use client";
import {
  FaExternalLinkAlt,
  FaUniversity,
  FaCode,
  FaGraduationCap,
  FaNetworkWired,
  FaRobot,
} from "react-icons/fa";

const achievements = [
  {
    title: "Participated in Mega Hackathon 2025",
    organization: "Hosted on Devpost",
    icon: <FaCode />,
    link: "#",
    issued: "Mar 2025",
    bgColor: "from-blue-400 to-indigo-500",
  },
  {
    title: "Introduction to Tableau",
    organization: "DataCamp",
    icon: <FaCode />,
    link: "#",
    issued: "Nov 2024",
    bgColor: "from-indigo-500 to-purple-500",
  },
  {
    title: "Introduction to Generative AI",
    organization: "Google Cloud (Badge)",
    icon: <FaCode />,
    link: "#",
    issued: "Oct 2024",
    bgColor: "from-indigo-500 to-purple-500",
  },
  {
    title: "Alteryx Designer Core Certification",
    organization: "Alteryx",
    icon: <FaUniversity />,
    link: "#",
    issued: "Nov 2024",
    bgColor: "from-cyan-400 to-blue-500",
  },
  {
    title: "Perl 5 Essential Training",
    organization: "LinkedIn Learning",
    icon: <FaRobot />,
    link: "#",
    issued: "Jan 2023",
    bgColor: "from-pink-400 to-rose-500",
  },
  {
    title: "Unix Essential Training",
    organization: "LinkedIn Learning",
    icon: <FaNetworkWired />,
    link: "#",
    issued: "Oct 2021",
    bgColor: "from-orange-400 to-yellow-400",
  },
  {
    title: "Complete Python Bootcamp",
    organization: "Udemy",
    icon: <FaGraduationCap />,
    link: "#",
    issued: "June 2020",
    bgColor: "from-teal-400 to-green-500",
  },
];

export default function Achievements() {
  return (
    <section className="py-16 px-4 bg-[#f9fafb] dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-500 mb-4">Achievements</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-base max-w-2xl">
          Throughout my journey, I’ve earned achievements in areas including AI, data, programming, and cloud.
          Here are some recognitions and certifications I'm proud of:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#111827] p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-4 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.bgColor} text-white flex items-center justify-center text-xl shadow-md transition-transform group-hover:rotate-6 group-hover:scale-105`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.organization}</p>
                  {item.issued && (
                    <p className="text-xs text-gray-500 mt-1">Issued {item.issued}</p>
                  )}
                </div>
              </div>
              {item.link !== "#" && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View details for ${item.title}`}
                  className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline inline-flex items-center gap-1"
                >
                  View Details <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}