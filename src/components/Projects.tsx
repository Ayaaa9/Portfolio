import React, { useState } from 'react';
import { ExternalLink, Filter, Code, Database, Globe, Smartphone, BarChart3, Layers } from 'lucide-react';
import Section from './Section';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Project Management Platform",
      description:
        "Comprehensive platform for project management and reporting with secure authentication, multi-role access control, and real-time analytics.",
      technologies: ["Spring Boot", "React", "PostgreSQL", "JWT"],
      features: [
        "Multi-role access (Admin, PM, Developer, Client)",
        "Secure JWT authentication",
        "Real-time project reporting",
        "RESTful API architecture",
      ],
      category: "Web Apps",
      icon: Code,
      image: "/projects/rfc.jpg",
      link: "https://github.com/Ayaaa9/rfc_project_tracker",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Hotel Management System",
      description:
        "Web application for hotel management built with ASP.NET Core MVC, designed to streamline reservations, client management, and service coordination while enhancing customer experience.",
      technologies: ["ASP.NET Core MVC", "C#", "SQL Server"],
      features: [
        "Reservation and client management",
        "Room and service coordination",
        "Invoice generation and reporting",
        "Modern and responsive UI",
      ],
      category: "Web Apps",
      icon: Globe,
      image: "/projects/hotel.png",
      link: "https://github.com/Ayaaa9/Hotel-Management-System",
      color: "from-sky-500 to-indigo-600",
    },
    {
      title: "Data Warehouse & Power BI Dashboard",
      description:
        "Analytical solution for construction project tracking with ETL pipelines and interactive dashboards.",
      technologies: ["Power BI", "Talend", "Excel"],
      features: [
        "Automated ETL integration",
        "Interactive dashboards",
        "Real-time performance insights",
        "KPI-based project monitoring",
      ],
      category: "Data Projects",
      icon: BarChart3,
      image: "/projects/dashboard.jpg",
      link: "https://www.linkedin.com/posts/aya-ouahi-6b82bb268_pfa-powerbi-datawarehouse-activity-7351221953027837955-fjoF",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Application Web de Gestion d’Entreprise",
      description:
        "Dynamic web app built for DigiUP, centralizing project tracking, service management, and recruitment with automated email workflows.",
      technologies: ["React.js", "TypeScript", "Node.js", "Zoho API"],
      features: [
        "Dynamic homepage with service/project modules",
        "Online job applications and contact forms",
        "Automated email handling via Zoho API",
        "Centralized management interface",
      ],
      category: "Web Apps",
      icon: Database,
      image: "/projects/digiup.png",
      link: "https://github.com/Ayaaa9/Application-Web-de-Gestion-d-Entreprise",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Dental Clinic Management System",
      description:
        "Desktop application for managing a dental clinic, allowing efficient tracking of patients, appointments, treatments, and payments through an intuitive interface.",
      technologies: ["Java", "Swing", "MVC", "Maven", "UML"],
      features: [
        "Patient and appointment management",
        "Consultation, treatment, and billing modules",
        "User-friendly interface with JTable for data visualization",
        "Secure data storage and efficient workflow",
      ],
      category: "Desktop Apps",
      icon: Database,
      image: "/projects/Dental.png",
      link: "https://github.com/Ayaaa9/Dental-Clinic-Management",
      color: "from-teal-500 to-cyan-600",
    },
    
    {
      title: "Stock Management Application",
      description:
        "Inventory tracking solution for retail stores with reporting and supplier management.",
      technologies: ["Django", "Python", "Bootstrap", "SQLite"],
      features: [
        "Inventory and sales tracking",
        "Stock alerts and notifications",
        "Supplier management",
        "Data visualization dashboard",
      ],
      category: "Web Apps",
      icon: Database,
      image: "/projects/stock.png",
      link: "https://github.com/Ayaaa9/Stock-Management-Application",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Mobile Shopping App",
      description:
        "Native Android app for e-commerce with product catalog, cart system, and offline data persistence.",
      technologies: ["Android Studio", "SQLite", "Room", "Java"],
      features: [
        "Modern material design UI",
        "Cart management",
        "Product browsing & search",
        "Offline storage via Room DB",
      ],
      category: "Mobile Apps",
      icon: Smartphone,
      image: "/projects/shopping.png",
      link: "https://github.com/Ayaaa9/Application_mobile_shopping/tree/master/Shopping_App",
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Banking Account Management System",
      description:
        "Spring Boot application managing accounts, transactions, and credit operations with secure backend architecture.",
      technologies: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
      features: [
        "Account and transaction management",
        "Credit and debit operations",
        "Authentication layer",
        "Responsive UI",
      ],
      category: "Web Apps",
      icon: Code,
      image: "/projects/bankati.png",
      link: "https://github.com/Ayaaa9/Banking-Account-Management-System",
      color: "from-orange-500 to-yellow-600",
    },
    {
      title: "Recruitment Management System",
      description:
        "Streamlined HR platform for job postings, candidate applications, and recruitment workflows with admin control.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      features: [
        "Job posting management",
        "Candidate tracking system",
        "Application workflow automation",
        "Admin dashboard & reporting",
      ],
      category: "Web Apps",
      icon: Database,
      image: "/projects/recrut.png",
      link: "https://github.com/Ayaaa9/Recruitment-Management-System",
      color: "from-red-500 to-orange-600",
    }
    
  ];

  const filters = ["All", "Web Apps", "Data Projects", "Mobile Apps", "Desktop Apps"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A selection of my most impactful and innovative work"
      className="bg-gradient-to-b from-slate-900 to-slate-800 light:from-slate-50 light:to-white"
    >
      {/* === Filters === */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105'
                : 'bg-slate-800 light:bg-slate-100 text-gray-500 hover:text-slate-700 hover:bg-slate-700'
            }`}
          >
            <Filter size={16} />
            {filter}
          </button>
        ))}
      </div>

      {/* === Project Cards === */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          const Icon = project.icon || Code;
          return (
            <div
              key={index}
              className="group bg-slate-900/60 light:bg-white/80 border border-slate-800 light:border-slate-200 light:shadow-sm hover:border-cyan-500/60 light:hover:border-cyan-600 
                         rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 
                         hover:shadow-xl hover:shadow-cyan-500/10 backdrop-blur-sm"
            >
              {/* === Image Header === */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 light:from-slate-100/90 via-slate-900/40 light:via-slate-100/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              {/* === Content === */}
              <div className="p-6 flex flex-col justify-between h-full">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon className="text-white" size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-cyan-400 light:group-hover:text-cyan-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-cyan-400 light:text-cyan-600 text-sm font-medium">{project.category}</p>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 light:text-slate-500 hover:text-cyan-400 light:hover:text-cyan-600 transition-transform hover:scale-125"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-900 text-sm mb-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Features Section */}
                {project.features && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 light:text-slate-800 mb-2 flex items-center gap-2">
                      <Layers size={14} className="text-cyan-400 light:text-cyan-600" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-gray-900 text-sm flex items-start gap-2">
                          <span className="text-cyan-400 mt-0.5">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 light:bg-cyan-100 text-cyan-400 light:text-cyan-700 rounded-lg text-xs font-medium border border-slate-600 light:border-slate-300 hover:border-cyan-500 light:hover:border-cyan-600 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 light:bg-slate-100/50 text-cyan-400 light:text-cyan-600 rounded-lg text-xs font-medium border border-slate-700 hover:border-cyan-500/70 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 light:text-slate-600 text-lg">No projects found in this category.</p>
        </div>
      )}
    </Section>
  );
};

export default Projects;
