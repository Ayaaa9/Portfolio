import React, { useState } from 'react';
import { Code, ExternalLink, Filter } from 'lucide-react';
import Section from './Section';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Project Management Platform",
      description: "Comprehensive web application for project management and reporting with secure authentication and multi-role access control.",
      technologies: ["Spring Boot", "React", "PostgreSQL", "JWT"],
      category: "Web Apps",
      features: [
        "Multi-role access (Admin, Project Manager, Developer, Client)",
        "Secure JWT authentication",
        "Real-time project reporting",
        "RESTful API architecture"
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Recruitment Management System",
      description: "Streamlined platform for managing job postings, candidate applications, and recruitment workflows.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      category: "Web Apps",
      features: [
        "Job posting management",
        "Candidate tracking system",
        "Application workflow automation",
        "Admin dashboard"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Data Warehouse & Power BI Dashboard",
      description: "Analytics and reporting solution for construction company project tracking with interactive visualizations.",
      technologies: ["Power BI", "Talend", "SQL Server"],
      category: "Data Projects",
      features: [
        "ETL pipeline implementation",
        "Interactive dashboards",
        "Real-time analytics",
        "Custom KPI tracking"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Mobile Shopping App",
      description: "Native Android shopping application with local database storage and intuitive user interface.",
      technologies: ["Android Studio", "SQLite", "Room", "Java"],
      category: "Mobile Apps",
      features: [
        "Product catalog browsing",
        "Shopping cart functionality",
        "Local data persistence",
        "Material Design UI"
      ],
      color: "from-pink-500 to-red-600"
    },
    {
      title: "Stock Management Application",
      description: "Inventory management system for retail stores with comprehensive stock tracking and reporting.",
      technologies: ["Django", "Python", "Bootstrap", "SQLite"],
      category: "Web Apps",
      features: [
        "Inventory tracking",
        "Stock alerts and notifications",
        "Sales reporting",
        "Supplier management"
      ],
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Banking Account Management System",
      description: "Secure banking application for managing accounts and credit operations with Spring Boot backend.",
      technologies: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
      category: "Web Apps",
      features: [
        "Account management",
        "Transaction processing",
        "Credit operations",
        "Security features"
      ],
      color: "from-orange-500 to-yellow-600"
    }
  ];

  const filters = ['All', 'Web Apps', 'Data Projects', 'Mobile Apps'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Showcase of my academic and professional work"
      className="bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105'
                : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            <Filter size={16} />
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
          >
            <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Code className="text-white" size={24} />
                </div>
                <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <ExternalLink size={20} />
                </button>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-slate-700/50 text-cyan-400 rounded text-xs font-medium border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No projects found in this category.</p>
        </div>
      )}
    </Section>
  );
};

export default Projects;
