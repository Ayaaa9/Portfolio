import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Aya OUAHI — Crafting Intelligent & Scalable Digital Solutions";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 45); // slightly smoother typing
    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-label="Introduction Section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient + floating light orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      {/* Optional star background layers */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile image with glow */}
        <div className="mb-8 animate-fadeIn">
          <div className="relative mx-auto w-48 h-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 blur-2xl opacity-40 animate-pulse"></div>
            <img
              src="/profile.jpg"
              alt="Aya OUAHI"
              className="relative w-48 h-48 rounded-full border-4 border-cyan-500 shadow-2xl shadow-cyan-500/50 object-cover animate-float"
            />
          </div>
        </div>

        {/* Typing headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight min-h-[4rem] md:min-h-[5rem]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
            {typedText}
          </span>
          <span className="animate-blink text-cyan-300 ml-1">|</span>
        </h1>

        {/* Subtext */}
        <p
          className={`text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto transition-opacity duration-1000 ${
            isTypingComplete ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Passionate about designing and developing modern, data-driven, and
          cloud-ready applications. I love merging creativity with engineering
          to build impactful digital experiences.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-wrap gap-4 justify-center mb-10 transition-all duration-1000 ${
            isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button
            variant="primary"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Aya_OUAHI_CV.pdf';
              link.download = 'Aya_OUAHI_CV.pdf';
              link.click();
            }}
          >
            <Download className="inline mr-2" size={20} />
            Download CV
          </Button>
          <Button variant="outline" onClick={scrollToProjects}>
            <ExternalLink className="inline mr-2" size={20} />
            View Projects
          </Button>
        </div>

        {/* Social icons */}
        <div
          className={`flex gap-6 justify-center transition-all duration-1000 delay-300 ${
            isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="https://www.linkedin.com/in/aya-ouahi-6b82bb268/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-125 hover:rotate-3"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/Ayaaa9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-125 hover:-rotate-3"
          >
            <Github size={28} />
          </a>
          <a
            href="mailto:ayaouahi99@gmail.com"
            aria-label="Send Email to Aya OUAHI"
            className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-125"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
