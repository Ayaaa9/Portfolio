import React, { useState, useEffect, useRef } from 'react';
import {
  Code,
  Database,
  Layers,
  BarChart,
  FileText,
  Cloud,
  Terminal,
  Cpu,
  Globe,
} from 'lucide-react';
import Section from './Section';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        "Java",
        "Python",
        "C++",
        "C#",
        "JavaScript",
        "TypeScript",
        "SQL",
      ],
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Layers,
      title: "Frameworks & Libraries",
      skills: [
        "React.js",
        "React Native",
        "Spring Boot",
        "Django",
        "Laravel",
        "ASP.NET",
        "Bootstrap",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Database,
      title: "Databases & ETL",
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "Oracle",
        "SQLite",
        "Talend",
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: BarChart,
      title: "Business Intelligence & Analytics",
      skills: [
        "Power BI",
        "Data Warehouse Design",
        "ETL Pipelines",
        "Data Modeling",
        "KPI Reporting",
      ],
      color: "from-red-500 to-orange-600",
    },
    {
      icon: Cloud,
      title: "DevOps & Deployment",
      skills: [
        "Docker",
        "Git",
        "GitHub",
        "GitLab",
        "CI/CD Pipelines",
        "Postman",
        "Vercel",
      ],
      color: "from-teal-500 to-green-600",
    },
    {
      icon: Terminal,
      title: "Tools & IDEs",
      skills: [
        "VS Code",
        "IntelliJ IDEA",
        "Visual Studio",
        "Power BI Desktop",
        "pgAdmin",
        "StarUML",
        "Figma",
        "Docker Desktop",
        "Slack",
      ],
      color: "from-pink-500 to-red-600",
    },
    {
      icon: FileText,
      title: "Modeling & Methodologies",
      skills: [
        "UML",
        "Merise",
        "Agile Scrum",
        "Design Thinking",
      ],
      color: "from-orange-500 to-yellow-600",
    },
    {
      icon: Cpu,
      title: "Backend & APIs",
      skills: [
        "RESTful APIs",
        "JWT Authentication",
        "Spring Security",
        "API Integration",
        "JSON",
      ],
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: Globe,
      title: "Web & Mobile Technologies",
      skills: [
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "React Native",
        "Responsive Web Design",
      ],
      color: "from-green-500 to-cyan-600",
    },
  ];

  return (
    <div ref={sectionRef}>
      <Section
        id="skills"
        title="Technical Skills"
        subtitle="Technologies and tools I work with"
        className="bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl group ${
                  isVisible ? 'animate-slideUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-slate-700/50 text-gray-300 rounded-lg text-sm border border-slate-600 hover:border-cyan-500 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-cyan-400 text-4xl font-bold mb-2">6+</div>
              <div className="text-gray-400">Programming Languages</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-400">Frameworks, Tools & Libraries</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 text-4xl font-bold mb-2">5+</div>
              <div className="text-gray-400">Database & BI Tools</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Skills;
