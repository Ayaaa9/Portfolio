import React from 'react';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 light:bg-slate-50 border-t border-slate-800 light:border-slate-200 overflow-hidden">
      {/* Subtle glowing background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Name & Title */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Aya OUAHI
          </h3>
          <p className="text-gray-400 light:text-slate-600 max-w-xl">
            Passionate about Software Engineering, Data, and DevOps — crafting intelligent and scalable digital solutions.
          </p>

          {/* Social icons */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/aya-ouahi-6b82bb268/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 light:text-slate-500 hover:text-cyan-400 light:hover:text-cyan-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Ayaaa9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 light:text-slate-500 hover:text-cyan-400 light:hover:text-cyan-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:ayaouahi99@gmail.com"
              aria-label="Send Email"
              className="text-gray-400 light:text-slate-500 hover:text-cyan-400 light:hover:text-cyan-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-slate-800 light:border-slate-200 my-6" />

          {/* Copyright */}
          <p className="text-gray-500 light:text-slate-500 text-sm">
            © {new Date().getFullYear()} <span className="text-cyan-400 light:text-cyan-600 font-medium">Aya OUAHI</span>. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 
                   rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl 
                   hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 z-50 backdrop-blur-md"
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>
    </footer>
  );
};

export default Footer;
