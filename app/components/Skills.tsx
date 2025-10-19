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
        { name: "Java", tooltip: "Object-oriented language for enterprise-grade systems" },
        { name: "Python", tooltip: "Versatile language for backend, data, and automation" },
        { name: "TypeScript", tooltip: "Typed superset of JavaScript for large applications" },
        { name: "SQL", tooltip: "Declarative language for querying structured data" },
        { name: "Perl", tooltip: "Scripting language for automation and text processing" },
        { name: "C++", tooltip: "High-performance language for systems and applications" },
      ],
    },
    {
      title: "AI/ML",
      skills: [
        { name: "TensorFlow", tooltip: "Framework for building machine learning models" },
        { name: "Keras", tooltip: "High-level API for building neural networks" },
        { name: "PyTorch", tooltip: "Deep learning framework for research and production" },
        { name: "Scikit-learn", tooltip: "ML library in Python for classical algorithms" },
        { name: "Hugging Face", tooltip: "NLP-focused ecosystem for transformers" },
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
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS EC2", tooltip: "Elastic compute in the AWS cloud" },
        { name: "AWS S3", tooltip: "Highly durable object storage" },
        { name: "AWS Lambda", tooltip: "Serverless compute service" },
        { name: "AWS ECS", tooltip: "Container orchestration on AWS" },
        { name: "AWS Aurora & RDS", tooltip: "Managed relational databases" },
        { name: "AWS DynamoDB", tooltip: "Fully managed NoSQL database" },
        { name: "AWS SageMaker", tooltip: "Managed ML model development platform" },
        { name: "Docker", tooltip: "Containerization platform for portable deployments" },
        { name: "Kubernetes", tooltip: "Container orchestration for scaling workloads" },
        { name: "OpenShift", tooltip: "Enterprise-grade Kubernetes platform" },
        { name: "Linux/Unix", tooltip: "Operating systems for development and automation" },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Spring Boot", tooltip: "Java framework for APIs and microservices" },
        { name: "Flask", tooltip: "Lightweight Python web framework" },
        { name: "FastAPI", tooltip: "High-performance Python API framework" },
        { name: "React", tooltip: "Component-driven library for UIs" },
        { name: "AngularJS", tooltip: "Framework for dynamic web applications" },
        { name: "Tailwind CSS", tooltip: "Utility-first CSS framework" },
        { name: "REST APIs", tooltip: "Designing and building RESTful services" },
        { name: "Git", tooltip: "Version control for collaborative development" },
        { name: "Jira", tooltip: "Agile project and issue tracking" },
        { name: "Confluence", tooltip: "Team documentation and knowledge management" },
      ],
    },
    {
      title: "System Design & Architecture",
      skills: [
        { name: "Data Structures & Algorithms", tooltip: "Optimizing solutions with fundamental CS concepts" },
        { name: "Distributed Systems", tooltip: "Designing scalable, reliable services" },
        { name: "Microservices", tooltip: "Building modular, independent services" },
        { name: "Fault Tolerance", tooltip: "Designing resilient, self-healing systems" },
        { name: "Load Balancing", tooltip: "Distributing traffic across resources" },
        { name: "API Design", tooltip: "Defining consistent, scalable interfaces" },
        { name: "Event-Driven Architecture", tooltip: "Reactive systems with asynchronous workflows" },
        { name: "Service-Oriented Architecture", tooltip: "Designing interoperable, loosely coupled services" },
        { name: "Operating Systems", tooltip: "Understanding OS internals and services" },
        { name: "Networking", tooltip: "Fundamentals of communication protocols" },
        { name: "Software Engineering Principles", tooltip: "Applying best practices for maintainable code" },
        { name: "Object-Oriented Design", tooltip: "Modeling systems with reusable abstractions" },
      ],
    },
    {
      title: "Data & Visualization",
      skills: [
        { name: "Pandas", tooltip: "Data manipulation and analysis library" },
        { name: "NumPy", tooltip: "Numerical computing for Python" },
        { name: "Advanced Excel", tooltip: "Analytics with pivots, lookups, and macros" },
        { name: "Tableau", tooltip: "Interactive dashboards and storytelling" },
        { name: "Matplotlib", tooltip: "Python plotting for exploratory analysis" },
        { name: "Seaborn", tooltip: "Statistical visualization library" },
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
