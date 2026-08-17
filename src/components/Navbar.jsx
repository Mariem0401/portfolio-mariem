import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experiences', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* === Desktop Navbar === */}
        <div className="hidden md:flex justify-between items-center h-16 sm:h-20 relative">
          {/* === Left: Logo === */}
          <button onClick={() => scrollToSection('home')} className="group">
            <img
              src="/mariem-logo.svg"
              alt="Logo Mariem Guibene"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-all duration-300"
            />
          </button>

          {/* === Center: Navigation === */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 sm:w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* === Mobile Navbar === */}
        <div className="flex md:hidden justify-between items-center h-14 sm:h-16">
          {/* Left: Logo */}
          <button onClick={() => scrollToSection('home')} className="group">
            <img
              src="/mariem-logo.svg"
              alt="Logo Mariem Guibene"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-all duration-300"
            />
          </button>

          {/* Right: Menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-cyan-400 transition-all duration-300"
          >
            {isMenuOpen ? <X size={20} sm:size={24} /> : <Menu size={20} sm:size={24} />}
          </button>
        </div>

        {/* === Mobile Menu === */}
        {isMenuOpen && (
          <div className="md:hidden py-3 sm:py-4 space-y-1 sm:space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 font-medium border border-cyan-500/20'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-cyan-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}