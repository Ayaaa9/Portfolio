import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Aya OUAHI — Software Engineering Student | Data & DevOps Enthusiast";
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
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fadeIn">
          <img
            src="/profile.jpg"
            alt="Aya OUAHI"
            className="w-48 h-48 rounded-full mx-auto border-4 border-cyan-500 shadow-2xl shadow-cyan-500/50 object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white min-h-[4rem] md:min-h-[5rem]">
          {typedText}
          <span className="animate-blink">|</span>
        </h1>

        <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-opacity duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
          Passionate about building intelligent and data-driven solutions combining software engineering, AI, and cloud technologies.
        </p>

        <div className={`flex flex-wrap gap-4 justify-center mb-8 transition-all duration-1000 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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

        <div className={`flex gap-6 justify-center transition-all duration-1000 delay-300 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="https://www.linkedin.com/in/aya-ouahi-6b82bb268/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/Ayaaa9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="mailto:ayaouahi99@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
