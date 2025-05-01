"use client";

export default function Skills() {
  const colorClasses = [
    "bg-blue-500",
    "bg-cyan-500",
    "bg-teal-500",
    "bg-sky-500",
    "bg-indigo-500",
  ];


  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", tooltip: "Versatile language for backend and data science" },
        { name: "Java", tooltip: "Popular object-oriented programming language" },
        { name: "React.js", tooltip: "JavaScript library for building UI components" },
        { name: "Typescript", tooltip: "Typed superset of JavaScript" },
        { name: "Perl", tooltip: "Language for text processing and scripting" },
        { name: "Spring Boot", tooltip: "Java framework for building APIs and microservices" },
        { name: "RESTful APIs", tooltip: "Web services using HTTP and REST principles" },
      ],
    },
    {
      title: "AI/ML",
      skills: [
        { name: "Scikit-learn", tooltip: "ML library in Python for classification and clustering" },
        { name: "TensorFlow", tooltip: "Framework for building machine learning models" },
        { name: "Keras", tooltip: "High-level API for building neural networks" },
        { name: "Pandas", tooltip: "Data manipulation and analysis library for Python" },
        { name: "Numpy", tooltip: "Library for numerical operations in Python" },
        { name: "Hugging Face", tooltip: "Tools and models for NLP and transformers" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", tooltip: "NoSQL database for JSON-like documents" },
        { name: "MySQL", tooltip: "Relational database management system" },
        { name: "PostgreSQL", tooltip: "Open-source relational database system" },
        { name: "SSMS", tooltip: "Microsoft SQL Server Management Studio" },
      ],
    },
    {
      title: "Cloud",
      skills: [
        { name: "Amazon Web Services (EC2)", tooltip: "Virtual servers in AWS cloud" },
        { name: "Aurora and RDS", tooltip: "Managed SQL databases by AWS" },
        { name: "S3", tooltip: "Object storage service in AWS" },
        { name: "Lambda", tooltip: "Serverless compute service by AWS" },
        { name: "Cloudwatch", tooltip: "Monitoring and logging tool in AWS" },
        { name: "Sagemaker", tooltip: "Build and deploy ML models in AWS" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "ETL Pipeline", tooltip: "Extract, Transform, Load process for data integration" },
        { name: "Docker", tooltip: "Containerization platform for applications" },
        { name: "Kubernetes", tooltip: "Container orchestration system" },
        { name: "OpenShift", tooltip: "Red Hat's Kubernetes-based platform" },
        { name: "Shell Scripting", tooltip: "Automating tasks using terminal scripts" },
        { name: "Microservices", tooltip: "Architecture with modular services" },
        { name: "Git", tooltip: "Version control system for code" },
        { name: "Version Control", tooltip: "Managing changes to source code" },
      ],
    },
    {
      title: "Data Analysis & Data Visualization",
      skills: [
        { name: "Excel (Pivot, VLOOKUP)", tooltip: "Spreadsheet with advanced data tools" },
        { name: "Tableau", tooltip: "Data visualization platform" },
        { name: "Data Cleaning", tooltip: "Fixing and removing bad data" },
        { name: "Data Transformation", tooltip: "Changing data into usable formats" },
        { name: "Data Integration", tooltip: "Combining data from multiple sources" },
        { name: "Data Validation", tooltip: "Checking data for accuracy" },
        { name: "Power BI", tooltip: "Microsoft's data visualization tool" },
      ],
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-4">Skills</h2>
        <p className="text-gray-400 mb-10 text-base max-w-xl mx-auto">
          Here's a snapshot of the tools, languages, and platforms I work with across full-stack, data, and cloud.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border border-blue-400 rounded-2xl p-6 w-full max-w-md"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, idx) => {
                  const color = colorClasses[idx % colorClasses.length];
                  return (
                    <div
                      key={`${category.title}-${idx}`}
                      className="relative group inline-block"
                    >
                      <span
                        className={`text-white font-sans tracking-wide font-medium px-4 py-1 rounded-full ${color} shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-default`}
                      >
                        {skill.name}
                      </span>
                      {/* Custom hover label */}
                      <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 w-max px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                        {skill.tooltip}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling tech icons */}
        <div className="mt-16 overflow-hidden w-screen relative left-1/2 -translate-x-1/2">
          <div className="flex gap-8 whitespace-nowrap min-w-max marquee">
            {[...[
              "python", "javascript", "AI", "java",
              "react", "sql", "tableau",
              "aws", "git", "jira", 
              "excel", "ML", "openshift",
            ], ...[
              "python", "javascript", "ai", "java",
              "react", "sql", "tableau",
              "aws", "git", "jira",
              "excel", "ML", "openshift",
            ], ...[
              "python", "javascript", "AI", "java",
              "react", "sql", "tableau",
              "aws", "git", "jira",
              "excel", "ML", "openshift",
            ], ...[
              "python", "javascript", "AI", "java",
              "react", "sql", "tableau",
              "aws", "git", "jira",
              "excel", "ML", "openshift",
            ]
            ].map((icon, index) => (
              <img
                key={index}
                src={`/icons/${icon}.png`}
                alt={icon}
                className="inline-block h-12 w-12 hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/icons/default.png";
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}