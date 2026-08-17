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
    // Note: Ces couleurs HEXA sont parfaites pour le style dynamique
    { name: "React", src: "/tech/react.svg", color: "#61DBFB" },
    { name: "React Native", src: "/tech/react.svg", color: "#61DBFB" },
    { name: "Spring Boot", src: "/tech/springboot.svg", color: "#6DB33F" },
    { name: "Node.js", src: "/tech/nodejs.svg", color: "#3C873A" },
    { name: "MongoDB", src: "/tech/mongodb.svg", color: "#4DB33D" },
    { name: "Docker", src: "/tech/docker.svg", color: "#2496ED" },
    { name: "Angular", src: "/tech/angular.svg", color: "#DD0031" },
    { name: "TypeScript", src: "/tech/typescript.svg", color: "#3178C6" },
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
        {/* Badge */}

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
        <div className="relative overflow-hidden mb-12 border-y border-gray-800 py-4">
          <div className="flex animate-scroll w-max items-center gap-5">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-sm text-gray-300 transition-all duration-300 group hover:scale-[1.02] hover:bg-gray-700/60"
                style={{
                  border: "1px solid #374151",
                  boxShadow: `0 0 0 transparent`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tech.color;
                  e.currentTarget.style.boxShadow = `0 0 16px ${tech.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#374151";
                  e.currentTarget.style.boxShadow = "0 0 0 transparent";
                }}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  width="30"
                  height="30"
                  loading="lazy"
                  className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: "none" }}
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
