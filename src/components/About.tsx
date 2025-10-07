import React from 'react';
import { GraduationCap, Calendar, MapPin, Languages } from 'lucide-react';
import Section from './Section';

const About: React.FC = () => {
  const education = [
    {
      degree: "Cycle ingénieur en informatique et réseaux",
      school: "ECOLE MAROCAINE DES SCIENCES DE L'INGENIEUR (EMSI)",
      location: "Rabat",
      period: "2023 - Present",
      year: "5th Year"
    },
    {
      degree: "Diplôme Technicien spécialisé en Développement Digital",
      school: "INSTITUT SPÉCIALISÉE DE TECHNOLOGIE APPLIQUÉE (ISTA)",
      location: "Rabat",
      period: "2021 - 2023"
    },
    {
      degree: "Baccalauréat option science physique et chimie",
      school: "LYCÉE ABI BAKER ASSIDDIK",
      location: "Temara",
      period: "2020 - 2021"
    }
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Fluent" },
    { name: "English", level: "Advanced" }
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know more about my journey and background"
      className="bg-slate-900"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="text-cyan-400" size={28} />
              Summary
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a 5th-year Software Engineering student at EMSI Rabat, specializing in Computer Science and Networks.
              Passionate about software development, Cloud Computing, and Data Intelligence, I'm actively seeking a
              Final Year Project (PFE) internship starting February 2026.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              My goal is to apply my skills in Data Engineering, Software Development, DevOps, and Artificial Intelligence
              to contribute to innovative, high-impact projects in Big Data and Data Engineering domains.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Languages className="text-cyan-400" size={28} />
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{lang.name}</span>
                  <span className="text-cyan-400 bg-cyan-500/10 px-4 py-1 rounded-full text-sm">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Calendar className="text-cyan-400" size={28} />
            Academic Timeline
          </h3>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-12 pb-8 group"
              >
                <div className="absolute left-0 top-1 w-8 h-8 bg-slate-900 border-4 border-cyan-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>

                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:translate-x-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-cyan-400 text-sm font-semibold">{edu.period}</span>
                    {edu.year && (
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-0.5 rounded-full text-xs font-medium">
                        {edu.year}
                      </span>
                    )}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{edu.degree}</h4>
                  <p className="text-gray-400 mb-2">{edu.school}</p>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
