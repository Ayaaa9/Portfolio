import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import Section from './Section';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Oracle Database Administration Certification",
      issuer: "Oracle",
      icon: "🗄️",
      color: "from-orange-500 to-red-600",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=EF8F8A351070509C0A884D7A9F3FA7138EB8FA19626EF0D81739F05A236E3168",
    },
    {
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      issuer: "IBM",
      icon: "🐳",
      color: "from-blue-400 to-cyan-600",
      link: "https://www.coursera.org/account/accomplishments/verify/N3Q1XT8X1FT2",
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Google",
      icon: "🔀",
      color: "from-red-500 to-yellow-500",
      link: "https://www.coursera.org/account/accomplishments/verify/I7BIR8JRJCM6",
    },
    {
      title: "Introduction to Java and Object-Oriented Programming",
      issuer: "University of Pennsylvania",
      icon: "☕",
      color: "from-amber-400 to-orange-500",
      link: "https://www.coursera.org/account/accomplishments/verify/I88ZILQ1LAST",
    },
    {
      title: "Software Engineering: Design & Project Management",
      issuer: "The Hong Kong University of Science and Technology",
      icon: "🎯",
      color: "from-blue-500 to-indigo-500",
      link: "https://www.coursera.org/account/accomplishments/verify/3PQC6VQLVY8V",
    },
    {
      title: "React Basics",
      issuer: "Meta",
      icon: "⚛️",
      color: "from-sky-400 to-blue-500",
      link: "https://www.coursera.org/account/accomplishments/verify/ZAMM130OY91W",
    },
    {
      title: "React Native Development",
      issuer: "Meta",
      icon: "📱",
      color: "from-indigo-400 to-purple-500",
      link: "https://www.coursera.org/account/accomplishments/verify/58T30CRG7GX7",
    },
    {
      title: "Virtual Networks in Azure",
      issuer: "Whizlabs",
      icon: "☁️",
      color: "from-blue-400 to-teal-500",
      link: "https://www.coursera.org/account/accomplishments/verify/H2EO797VJ5ZB",
    },
    {
  title: "Interactivity with JavaScript",
  issuer: "University of Michigan",
  icon: "⚡",
  color: "from-yellow-400 to-amber-500",
  link: "https://www.coursera.org/account/accomplishments/verify/4VW2DW4RQ9L2",
},

  ];

  return (
    <Section
      id="certifications"
      title="Certifications & Training"
      subtitle="Professional certifications and completed courses"
      className="bg-slate-900 light:bg-slate-50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group relative hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
            ></div>

            {/* Card */}
            <div className="relative bg-slate-800/60 light:bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 light:border-slate-200 light:shadow-sm hover:border-cyan-500 light:hover:border-cyan-600 transition-all duration-300 h-full flex flex-col justify-between shadow-lg hover:shadow-cyan-500/20 overflow-hidden">
              <div>
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

                <h3 className="text-lg font-bold text-white light:text-slate-900 mb-3 leading-snug group-hover:text-cyan-400 light:group-hover:text-cyan-600 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 light:text-slate-500 text-sm">
                  <CheckCircle size={16} className="text-cyan-400 light:text-cyan-600" />
                  <span>{cert.issuer}</span>
                </div>
              </div>

              {/* Button appears on hover */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 text-cyan-400 light:text-cyan-600 border border-cyan-500/40 light:border-cyan-400 rounded-lg py-2 px-3 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 hover:bg-cyan-500/10 light:hover:bg-cyan-100 hover:border-cyan-400 light:hover:border-cyan-600"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Continuous learning section */}
      <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 light:from-cyan-100 light:to-blue-100 backdrop-blur-sm p-10 rounded-2xl border border-cyan-500/30 light:border-cyan-300 shadow-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-4 flex justify-center items-center gap-2">
            <Award size={24} className="text-cyan-400 light:text-cyan-600" />
            Continuous Learning
          </h3>
          <p className="text-gray-300 light:text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I’m committed to lifelong learning through globally recognized certifications.
            Each certificate reflects a step forward in mastering full-stack development,
            DevOps practices, cloud infrastructure, and cutting-edge frameworks that shape modern digital ecosystems.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
