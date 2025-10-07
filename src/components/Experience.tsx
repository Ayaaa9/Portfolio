import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import Section from './Section';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full-Stack & Data Analysis Intern",
      company: "RFC Digital",
      location: "Rabat",
      period: "July 2025 - September 2025",
      description: [
        "Development of a project management and reporting web application",
        "Design and implementation of system architecture",
        "Implementation of secure JWT authentication and multi-role management (Administrator, Project Manager, Developer, Client)"
      ],
      technologies: ["Spring Boot", "React.js", "PostgreSQL", "JWT"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Front-End Developer Intern",
      company: "DigiUP",
      location: "Rabat",
      period: "July 2024 - September 2024",
      description: [
        "Design of an internal company solution",
        "Development of a web application for managing company projects and job applications"
      ],
      technologies: ["React.js", "Express.js", "Node.js"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Full-Stack Developer Intern",
      company: "DigiUP",
      location: "Rabat",
      period: "March 2023 - May 2023",
      description: [
        "Design and development of a recruitment management website"
      ],
      technologies: ["Laravel", "PHP", "MySQL"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const activities = [
    {
      title: "Member of SMILE Association",
      icon: Award,
      description: "Active member contributing to student community initiatives"
    },
    {
      title: "AIESEC Volunteer",
      icon: Award,
      description: "International volunteer in Turkey with AIESEC organization"
    }
  ];

  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="My journey through internships and professional development"
      className="bg-slate-900"
    >
      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600 hidden md:block"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2"></div>

              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-slate-900 border-4 border-cyan-500 rounded-full -ml-3 hidden md:block z-10 animate-pulse"></div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-lg text-xs font-medium border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Extracurricular Activities</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{activity.title}</h4>
                  <p className="text-gray-400">{activity.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
