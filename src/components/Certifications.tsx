import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import Section from './Section';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Oracle Database Administration Certification",
      issuer: "Oracle",
      icon: "🗄️",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      issuer: "IBM",
      icon: "🐳",
      color: "from-blue-400 to-cyan-600",
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Google",
      icon: "🔀",
      color: "from-red-500 to-yellow-500",
    },
    {
      title: "Introduction to Java and Object-Oriented Programming",
      issuer: "University of Pennsylvania",
      icon: "☕",
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "Software Engineering: Design & Project Management",
      issuer: "IBM",
      icon: "🎯",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "React Basics",
      issuer: "Meta",
      icon: "⚛️",
      color: "from-sky-400 to-blue-500",
    },
    {
      title: "React Native Development",
      issuer: "Meta",
      icon: "📱",
      color: "from-indigo-400 to-purple-500",
    },
    {
      title: "Virtual Networks in Azure",
      issuer: "Whizlabs",
      icon: "☁️",
      color: "from-blue-400 to-teal-500",
    },
  ];

  return (
    <Section
      id="certifications"
      title="Certifications & Training"
      subtitle="Professional certifications and completed courses"
      className="bg-slate-900"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group relative hover:scale-[1.03] transition-transform duration-300"
          >
            {/* Background glow on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
            ></div>

            <div className="relative bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full flex flex-col justify-between shadow-lg hover:shadow-cyan-500/20">
              <div className="flex items-start gap-4 mb-5">
                <div className="text-5xl">{cert.icon}</div>
                <div className="flex-1">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Award className="text-white" size={20} />
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 text-gray-400 text-sm mt-auto">
                <CheckCircle size={16} className="text-cyan-400" />
                <span>{cert.issuer}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Continuous learning section */}
      <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm p-10 rounded-2xl border border-cyan-500/30 shadow-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4 flex justify-center items-center gap-2">
            <Award size={24} className="text-cyan-400" />
            Continuous Learning
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I’m dedicated to continuous learning and professional development through
            globally recognized certifications and online training programs.
            These achievements reflect my growing expertise in full-stack development,
            cloud computing, DevOps, and modern frameworks like React, React Native,
            and containerized technologies.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
