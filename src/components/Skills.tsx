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

  // 🔹 Animation d’apparition progressive au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
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
      skills: ["Java", "Python", "C++", "C#", "JavaScript", "TypeScript", "SQL"],
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
      skills: ["UML", "Merise", "Agile Scrum", "Design Thinking"],
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
        "Responsive Design",
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
        {/* === Skill Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group relative bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700 
                hover:border-cyan-500/80 transition-all duration-500 hover:shadow-cyan-500/20 hover:shadow-xl 
                ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with gradient glow */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center 
                  mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-cyan-500/20`}
                >
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-slate-700/40 text-gray-300 rounded-lg text-sm border border-slate-600 
                      hover:border-cyan-500 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* === Summary Metrics === */}
        <div className="mt-16 bg-slate-800/30 backdrop-blur-md p-8 rounded-2xl border border-slate-700 text-center shadow-lg shadow-cyan-500/10">
          <h3 className="text-2xl font-bold text-white mb-6">Key Highlights</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { value: "6+", label: "Programming Languages" },
              { value: "10+", label: "Frameworks & Libraries" },
              { value: "5+", label: "Databases & BI Tools" },
            ].map((item, i) => (
              <div
                key={i}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-cyan-400 text-4xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {item.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Skills;
