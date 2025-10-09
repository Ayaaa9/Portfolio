import React, { useState } from 'react';
import { Code, ExternalLink, Filter, Layers } from 'lucide-react';
import Section from './Section';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Project Management Platform",
      description:
        "Comprehensive platform for project management and reporting with secure authentication, multi-role access control, and real-time analytics.",
      technologies: ["Spring Boot", "React", "PostgreSQL", "JWT"],
      category: "Web Apps",
      features: [
        "Multi-role access (Admin, PM, Developer, Client)",
        "Secure JWT authentication",
        "Real-time project reporting",
        "RESTful API architecture",
      ],
      github: "https://github.com/Ayaaa9/rfc_project_tracker",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Application Web de Gestion d’Entreprise",
      description:
        "Dynamic web app built for DigiUP, centralizing project tracking, service management, and recruitment with automated email workflows.",
      technologies: ["React.js", "TypeScript", "Node.js", "Zoho API"],
      category: "Web Apps",
      features: [
        "Dynamic homepage with service/project modules",
        "Online job applications and contact forms",
        "Automated email handling via Zoho API",
        "Centralized management interface",
      ],
      github:
        "https://github.com/Ayaaa9/Application-Web-de-Gestion-d-Entreprise",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Data Warehouse & Power BI Dashboard",
      description:
        "Analytical solution for construction project tracking with ETL pipelines and interactive dashboards.",
      technologies: ["Power BI", "Talend", "SQL Server"],
      category: "Data Projects",
      features: [
        "Automated ETL integration",
        "Interactive dashboards",
        "Real-time performance insights",
        "KPI-based project monitoring",
      ],
      github:
        "https://www.linkedin.com/posts/aya-ouahi-6b82bb268_pfa-powerbi-datawarehouse-activity-7351221953027837955-fjoF?utm_source=share&utm_medium=member_desktop",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Recruitment Management System",
      description:
        "Streamlined HR platform for job postings, candidate applications, and recruitment workflows with admin control.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      category: "Web Apps",
      features: [
        "Job posting management",
        "Candidate tracking system",
        "Application workflow automation",
        "Admin dashboard & reporting",
      ],
      github: "https://github.com/Ayaaa9/Recruitment-Management-System",
      color: "from-red-500 to-orange-600",
    },
    {
      title: "Stock Management Application",
      description:
        "Inventory tracking solution for retail stores with reporting and supplier management.",
      technologies: ["Django", "Python", "Bootstrap", "SQLite"],
      category: "Web Apps",
      features: [
        "Inventory and sales tracking",
        "Stock alerts and notifications",
        "Supplier management",
        "Data visualization dashboard",
      ],
      github: "https://github.com/Ayaaa9/Stock-Management-Application",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Mobile Shopping App",
      description:
        "Native Android app for e-commerce with product catalog, cart system, and offline data persistence.",
      technologies: ["Android Studio", "SQLite", "Room", "Java"],
      category: "Mobile Apps",
      features: [
        "Modern material design UI",
        "Cart management",
        "Product browsing & search",
        "Offline storage via Room DB",
      ],
      github:
        "https://github.com/Ayaaa9/Application_mobile_shopping/tree/master/Shopping_App",
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Banking Account Management System",
      description:
        "Spring Boot application managing accounts, transactions, and credit operations with secure backend architecture.",
      technologies: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
      category: "Web Apps",
      features: [
        "Account and transaction management",
        "Credit and debit operations",
        "Authentication layer",
        "Responsive UI",
      ],
      github: "https://github.com/Ayaaa9/Banking-Account-Management-System",
      color: "from-orange-500 to-yellow-600",
    },
  ];

  const filters = ["All", "Web Apps", "Data Projects", "Mobile Apps"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A selection of my most impactful and innovative work"
      className="bg-gradient-to-b from-slate-800 to-slate-900"
    >
      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              activeFilter === filter
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105"
                : "bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            <Filter size={16} />
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            {/* Gradient header line */}
            <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

            <div className="p-6 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <Code className="text-white" size={24} />
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-125"
                    aria-label="View project"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              {/* Title + Description */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <Layers size={14} className="text-cyan-400" />
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm flex items-start gap-2"
                    >
                      <span className="text-cyan-400 mt-0.5">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-auto flex flex-wrap gap-2">
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

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </Section>
  );
};

export default Projects;
