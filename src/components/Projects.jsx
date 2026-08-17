import { ExternalLink, Github, Play, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      title: "Social Commerce Platform",
      description:
        "Modular commerce platform designed to help social-commerce merchants transition from informal selling on Facebook, Instagram and WhatsApp to structured, scalable online businesses. Provides merchant storefronts, product and inventory management, order management, customer management and business insights through a reusable, tenant-aware architecture. The first marketplace focuses on perfumes in Tunisia, with the platform designed to support additional niche marketplaces across the MENA region.",
      technologies: [
        "Angular",
        "Spring Boot",
        "Docker",
        "MySQL",
        "REST API",
        "Multi-Tenancy",
      ],
      image: "/image/commerce-platform.png",
      video: "/videos/social-commerce.mp4",
      github: "",
      demo: "",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Fideli – Loyalty Management Platform",
      description:
        "Full-stack platform managing companies, partner stores and promotional offers. Implemented microservices architecture with Spring Boot, Eureka Discovery Server and OpenFeign. Developed web and mobile applications using React, React Native and Spring Boot.",
      technologies: [
        "React",
        "React Native",
        "Spring Boot",
        "Microservices",
        "MySQL",
        "Docker",
        "Eureka",
        "OpenFeign",
      ],
      image: "/image/fideli.jpg",
      video: "/videos/fideli.mp4",
      github: "https://github.com/Mariem0401/Fideli",
      demo: "",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "AdoptiPet",
      description:
        "MERN application for pet adoption, temporary care and product management. Features smart matching, user authentication, and admin dashboard.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      image: "/image/adopti.png",
      video: "/videos/adoptipet.mp4",
      github: "https://github.com/Mariem0401/pfaProject",
      demo: "https://adoptipet-demo.vercel.app",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Greenly – Smart Plant Care",
      description:
        "Mobile application that helps users intelligently manage and care for their plants. Combines real-time weather data, plant type and location to optimize watering reminders. Provides personalized plant care tips based on local environmental conditions.",
      technologies: ["Flutter", "Dart", "Firebase", "Weather API"],
      image: "/image/greenly.jpg",
      video: "/videos/greenly.mp4",
      github: "https://github.com/Mariem0401/Greenly",
      demo: "",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "FarmHealth – Tomato Disease Detection",
      description:
        "Image analysis application for detecting tomato leaf diseases using AI and machine learning. Built with TensorFlow for image processing and Flask for the backend API.",
      technologies: [
        "Python",
        "TensorFlow",
        "Flask",
        "React",
        "Machine Learning",
      ],
      image: "/image/farm.png",
      video: "/videos/farmhealth.mp4",
      github: "https://github.com/Mariem0401/Projet_integration",
      demo: "",
      gradient: "from-red-500 to-orange-600",
    },
    {
      title: "Real-time Production Tracking",
      description:
        "Industrial production monitoring system using RFID tags and Raspberry Pi for real-time tracking of manufacturing operations. Built with Angular frontend and Spring Boot backend.",
      technologies: ["Angular", "Spring Boot", "Raspberry Pi", "RFID", "MySQL"],
      image: "/image/ac.png",
      video: "/videos/production-tracking.mp4",
      github: "https://github.com/mariam/rfid-production-tracking",
      demo: "",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      title: "Pointi HR Management System",
      description:
        "Web-based HR management platform that automates employee attendance, leave requests, and salary calculations in real-time. Features React frontend with Node.js backend.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      image: "/image/pointi.png",
      video: "/videos/pointi.mp4",
      github: "https://github.com/Mariem0401/Pointi",
      demo: "",
      gradient: "from-indigo-500 to-blue-600",
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
            A selection of projects showcasing my experience in full-stack
            development, mobile applications, AI, microservices and scalable
            software architecture.
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
              {/* Image/Video */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button
                    onClick={() => setSelectedVideo(project.video)}
                    className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all transform hover:scale-110"
                  >
                    <Play size={24} className="text-white" />
                  </button>
                </div>
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
            href="https://github.com/Mariem0401"
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

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-cyan-400 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full aspect-video"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
