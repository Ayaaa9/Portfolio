import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 light:bg-white/95 backdrop-blur-md shadow-lg light:shadow-slate-200'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AO
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-baseline space-x-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 light:text-slate-600 hover:text-cyan-400 light:hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-300" />
                  </button>
                ))}
              </div>
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 light:text-slate-600 hover:text-cyan-400 light:hover:text-cyan-600 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 light:bg-white/98 backdrop-blur-md border-t light:border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 light:text-slate-600 hover:text-cyan-400 light:hover:text-cyan-600 hover:bg-slate-800 light:hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
