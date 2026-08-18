import {
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  Terminal,
  Download,
} from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Spring Boot",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "Angular",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
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
        {/* Title with Avatar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-2 shadow-xl group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                <img
                  src="/avatar/avatar.jpg"
                  alt="Mariem Guibene"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-1 right-1 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-green-400 rounded-full border-2 border-gray-900 shadow-lg"></div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center sm:text-left">
            <span className="text-gray-100 block sm:inline">Hi, I'm </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
              Mariem Guibene
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-3 text-xl sm:text-2xl text-gray-400 mb-8">
          <Terminal size={26} className="text-cyan-400 flex-shrink-0" />
          <span className="font-light">
            Software Engineer — Web & Mobile Developer
          </span>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Software Engineer specialized in web and mobile development with
          hands-on experience across frontend, backend, and application
          architecture. Expert in{" "}
          <span className="text-cyan-400 font-semibold">React</span>,{" "}
          <span className="text-cyan-400 font-semibold">Spring Boot</span>,{" "}
          <span className="text-cyan-400 font-semibold">Microservices</span>,
          and <span className="text-cyan-400 font-semibold">IoT</span>{" "}
          technologies.
        </p>

        {/* Tech Stack Carousel */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-scroll w-max items-center gap-4 sm:gap-6 lg:gap-8 py-4 sm:py-6">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-5 py-2 sm:py-3 bg-gray-800/30 border border-gray-700/50 rounded-xl text-xs sm:text-sm transition-all duration-300 hover:bg-gray-800/50 hover:border-cyan-500/30"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  width="20"
                  height="20"
                  loading="lazy"
                  className="h-5 w-auto sm:h-6 object-contain"
                />
                <span className="font-medium text-gray-200 text-xs sm:text-sm">
                  {tech.name}
                </span>
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
            animation: scroll 40s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-cyan-500/60 transition-all transform hover:-translate-y-1.5 flex items-center gap-2"
          >
            View My Work
            <ChevronDown
              size={20}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </button>
          <a
            href="mailto:mariemguib@gmail.com"
            className="px-6 py-4 bg-gray-800 border border-gray-700 text-gray-300 rounded-xl font-medium hover:border-cyan-500 hover:text-cyan-400 transition flex items-center gap-2 shadow-md hover:shadow-cyan-500/20"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href="/resume/Mariem_Guibene_Resume.pdf"
            download
            className="px-6 py-4 bg-gray-800 border border-gray-700 text-gray-300 rounded-xl font-medium hover:border-cyan-500 hover:text-cyan-400 transition flex items-center gap-2 shadow-md hover:shadow-cyan-500/20"
          >
            <Download size={20} />
            Resume
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
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Mariem0401"
            target="_blank"
            rel="noopener noreferrer"
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
