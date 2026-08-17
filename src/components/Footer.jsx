import { Heart, Code2, Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black border-t border-gray-800 py-12 sm:py-16 px-4 sm:px-6 overflow-hidden text-gray-300">
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-600/5 to-purple-700/5"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* --- Background Grid --- */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* --- Footer Content --- */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center md:text-left">
        {/* 1️⃣ - About */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">About</h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            A passionate developer who loves creating elegant and high-performance digital experiences.
            Always seeking innovation and perfection in every project.
          </p>
        </div>

        {/* 2️⃣ - Quick Links */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Quick Links</h2>
          <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* 3️⃣ - Socials */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Socials</h2>
          <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4">
            <a
              href="https://github.com/Mariem0401"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full bg-gray-800/40 hover:bg-cyan-500/20 hover:scale-110 transition-all"
            >
              <Github className="text-gray-300 hover:text-white" size={18} sm:size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/mariem-guibene-8b039123a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-gray-800/40 hover:bg-cyan-500/20 hover:scale-110 transition-all"
            >
              <Linkedin className="text-gray-300 hover:text-white" size={18} sm:size={22} />
            </a>
            <a
              href="mailto:mariemguib@gmail.com"
              aria-label="Email"
              className="p-2 rounded-full bg-gray-800/40 hover:bg-cyan-500/20 hover:scale-110 transition-all"
            >
              <Mail className="text-gray-300 hover:text-white" size={18} sm:size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* --- Divider + Copyright --- */}
      <div className="relative max-w-6xl mx-auto mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-500">
        <p>
          © {currentYear} <span className="text-cyan-400 font-semibold">Mariem Guibene</span>.
          All rights reserved.
        </p>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-4 sm:right-6 -top-6 sm:-top-8 p-2 rounded-full bg-cyan-600/20 hover:bg-cyan-600/40 transition-all text-cyan-400"
          aria-label="Scroll to top"
        >
          <ArrowUp size={14} sm:size={18} />
        </button>
      </div>
    </footer>
  );
}