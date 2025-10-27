import { Mail, Linkedin, Github, ChevronDown, Terminal } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = [
    // Note: Ces couleurs HEXA sont parfaites pour le style dynamique
    { name: 'React', src: '/tech/react.svg', color: '#61DBFB' },
    { name: 'Node.js', src: '/tech/nodejs.svg', color: '#3C873A' },
    { name: 'MongoDB', src: '/tech/mongodb.svg', color: '#4DB33D' },
    { name: 'TypeScript', src: '/tech/typescript.svg', color: '#3178C6' },
    { name: 'Tailwind CSS', src: '/tech/tailwind.svg', color: '#38BDF8' },
    { name: 'Docker', src: '/tech/docker.svg', color: '#2496ED' },
    { name: 'Angular', src: '/tech/angular.svg', color: '#DD0031' },
    { name: 'Spring Boot', src: '/tech/springboot.svg', color: '#6DB33F' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge 
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm shadow-md">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-gray-300 font-medium">
            Available for a final-year internship
          </span>
        </div>
         */}
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
          <span className="text-gray-100">Hi, I'm </span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            Mariem Guibene
          </span>
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-3 text-xl sm:text-2xl text-gray-400 mb-8">
          <Terminal size={26} className="text-cyan-400 flex-shrink-0" />
          <span className="font-light">Full Stack Development Engineer</span>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Passionate about architecting and creating innovative web and mobile
          applications. Deep expertise in{' '}
          <span className="text-cyan-400 font-semibold">React</span>,{' '}
          <span className="text-cyan-400 font-semibold">Node.js</span>, and
          emerging{' '}
          <span className="text-cyan-400 font-semibold">IoT</span> technologies.
        </p>

        {/* Tech Stack Carousel */}
        <div className="relative overflow-hidden mb-12 border-y border-gray-800 py-4">
          <div className="flex animate-scroll w-max items-center gap-5">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                // CLASSE TAILWIND SIMPLIFIÉE
                className="flex items-center gap-3 px-6 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-sm text-gray-300 transition-all duration-300 group hover:scale-[1.02] hover:bg-gray-700/60"
                style={{
                  // Permet d'animer l'ombre et la bordure
                  border: '1px solid #374151', 
                  boxShadow: `0 0 0 transparent`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tech.color;
                  // Utilise 40% d'opacité (40) pour un effet d'ombre subtil
                  e.currentTarget.style.boxShadow = `0 0 16px ${tech.color}40`; 
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#374151'; // Revenir à border-gray-700
                  e.currentTarget.style.boxShadow = '0 0 0 transparent';
                }}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  width="30"
                  height="30"
                  loading="lazy"
                  // CLASSE D'IMAGE SIMPLIFIÉE : Pas de classes de couleur ou d'opacité ici
                  className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  // 'filter: none' pour garantir qu'aucune désaturation n'est appliquée
                  style={{ filter: 'none' }}
                />
                <span className="font-medium text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 35s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
          <button
            onClick={scrollToProjects}
            className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-cyan-500/60 transition-all transform hover:-translate-y-1.5 flex items-center gap-2"
          >
            View my projects
            <ChevronDown
              size={20}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </button>
          <a
            href="mailto:mariemguib@gmail.com"
            className="px-8 py-4 bg-gray-800 border border-gray-700 text-gray-300 rounded-xl font-medium hover:border-cyan-500 hover:text-cyan-400 transition flex items-center gap-2 shadow-md hover:shadow-cyan-500/20"
          >
            <Mail size={20} />
            Contact me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="mailto:mariemguib@gmail.com"
            aria-label="Email"
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition duration-200"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mariem-guibene-8b039123a/"
            aria-label="LinkedIn"
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Mariem0401"
            aria-label="GitHub"
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition duration-200"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}