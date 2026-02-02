import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AdoptiPet",
      description:
        "Full MERN web app for pet adoption with smart matching, user authentication, and admin dashboard.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      image: "/image/adopti.png",
      github: "https://github.com/Mariem0401/pfaProject",
      demo: "https://adoptipet-demo.vercel.app",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Tomato Anomaly Detection",
      description:
        "AI system for detecting tomato leaf diseases using deep learning and computer vision.",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      image: "/image/farm.png",
      github: "https://github.com/Mariem0401/Projet_integration",
      demo: "",
      gradient: "from-red-500 to-orange-600",
    },
    {
      title: "Real-time Production Tracking",
      description:
        "Industrial production monitoring system using RFID tags and Raspberry Pi for real-time tracking of manufacturing operations.",
      technologies: ["Angular", "Spring Boot", "Raspberry Pi", "RFID", "MySQL"],
      image: "/image/ac.png",
      github: "https://github.com/mariam/rfid-production-tracking",
      demo: "",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      title: "Pointi HR Management System",
      description:
        "Web-based HR management platform that automates employee attendance, leave requests, and salary calculations in real-time.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      image: "/image/pointi.png",
      github: "https://github.com/Mariem0401/Pointi",
      demo: "",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      title: "Greenly",
      description:
        "A mobile app built with Flutter and Firebase that helps users maintain their plants intelligently. It combines real-time weather data, plant type, and location to optimize watering reminders and deliver care tips tailored to local environmental conditions.",
      technologies: ["Flutter", "Firebase"],
      image: "/image/greenly.jpg",
      github: "https://github.com/Mariem0401/Greenly",
      demo: "",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my favorite projects — combining web, mobile and AI.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-500 transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex justify-between items-center">
                  {project.title}
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900 rounded-lg hover:text-cyan-400 transition"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900 rounded-lg hover:text-cyan-400 transition"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-900 border border-gray-700 text-cyan-400 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-400 mb-3">Want to explore more?</p>
          <a
            href="https://github.com/mariam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg bg-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition"
          >
            <Github size={18} />
            Visit my GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}