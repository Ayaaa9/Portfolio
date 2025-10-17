import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
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
      school: "INSTITUT SPÉCIALISÉ DE TECHNOLOGIE APPLIQUÉE (ISTA)",
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

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know more about my journey and background"
      className="bg-slate-900 light:bg-slate-50"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* === Profile Section === */}
        <div className="flex justify-center">
          <div className="bg-slate-800/50 light:bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 light:border-slate-200 
                          hover:border-cyan-500 light:hover:border-cyan-600 transition-all duration-300 hover:shadow-lg 
                          hover:shadow-cyan-500/20 light:hover:shadow-cyan-400/20 light:shadow-sm max-w-xl text-center">
            
            <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-4 flex items-center justify-center gap-2">
              <GraduationCap className="text-cyan-400 light:text-cyan-600" size={28} />
              Profile
            </h3>

            <p className="text-gray-300 light:text-slate-600 leading-relaxed">
              I'm a passionate Software Engineering student specializing in Computer Science and Networks at EMSI Rabat.
              My journey is driven by a strong enthusiasm for building innovative digital solutions that combine
              software development, cloud computing, and data-driven intelligence.
            </p>

            <p className="text-gray-300 light:text-slate-600 leading-relaxed mt-4">
              I enjoy exploring how technology, data, and automation can empower smarter decision-making and
              improve system efficiency. My core expertise spans areas such as Data Engineering, Full-Stack Development,
              Artificial Intelligence, and DevOps practices.
            </p>

            <p className="text-gray-300 light:text-slate-600 leading-relaxed mt-4">
              Curious, detail-oriented, and growth-driven, I'm always seeking to expand my knowledge through
              meaningful projects that merge innovation, technical depth, and real-world impact.
            </p>
          </div>
        </div>

        {/* === Academic Timeline === */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-6 flex items-center gap-2">
            <Calendar className="text-cyan-400 light:text-cyan-600" size={28} />
            Academic Timeline
          </h3>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 light:from-cyan-600 light:to-blue-700"></div>

            {education.map((edu, index) => (
              <div key={index} className="relative pl-12 pb-8 group">
                <div className="absolute left-0 top-1 w-8 h-8 bg-slate-900 light:bg-white border-4 border-cyan-500 light:border-cyan-600 rounded-full group-hover:scale-110 transition-transform duration-300"></div>

                <div className="bg-slate-800/50 light:bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 light:border-slate-200 
                                hover:border-cyan-500 light:hover:border-cyan-600 transition-all duration-300 hover:shadow-lg 
                                hover:shadow-cyan-500/20 light:hover:shadow-cyan-400/20 hover:translate-x-2 light:shadow-sm">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-cyan-400 light:text-cyan-600 text-sm font-semibold">{edu.period}</span>
                    {edu.year && (
                      <span className="bg-cyan-500/20 light:bg-cyan-100 text-cyan-300 light:text-cyan-700 px-3 py-0.5 rounded-full text-xs font-medium">
                        {edu.year}
                      </span>
                    )}
                  </div>
                  <h4 className="text-white light:text-slate-900 font-bold text-lg mb-2">{edu.degree}</h4>
                  <p className="text-gray-400 light:text-slate-600 mb-2">{edu.school}</p>
                  <div className="flex items-center gap-1 text-gray-500 light:text-slate-500 text-sm">
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
