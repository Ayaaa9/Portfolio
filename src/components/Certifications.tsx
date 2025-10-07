import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import Section from './Section';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Oracle Database Administration Certification",
      issuer: "Oracle",
      icon: "🗄️"
    },
    {
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      issuer: "IBM",
      icon: "🐳"
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Google",
      icon: "🔀"
    },
    {
      title: "Introduction to Java and Object-Oriented Programming",
      issuer: "University of Pennsylvania",
      icon: "☕"
    },
    {
      title: "Software Engineering: Software Design and Project Management",
      issuer: "IBM",
      icon: "🎯"
    },
    // 🔹 Nouveaux certificats Coursera ajoutés :
    {
      title: "React Basics",
      issuer: "Meta",
      icon: "⚛️"
    },
    {
      title: "React Native",
      issuer: "Meta",
      icon: "📱"
    },
    {
      title: "Virtual Networks in Azure",
      issuer: "Whizlabs",
      icon: "☁️"
    }
  ];

  return (
    <Section
      id="certifications"
      title="Certifications & Training"
      subtitle="Professional certifications and completed courses"
      className="bg-slate-900"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{cert.icon}</div>
                <div className="flex-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Award className="text-white" size={20} />
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors flex-1">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <CheckCircle size={16} className="text-cyan-400" />
                <span>{cert.issuer}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            I'm committed to continuous professional development through certifications and training programs.
            These credentials demonstrate my expertise in full-stack development, cloud computing, and modern frameworks like React, React Native, and containerized environments.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
