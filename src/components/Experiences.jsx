import { Briefcase, MapPin, Calendar, GraduationCap } from "lucide-react";

export default function Experiences() {
  const experiences = [
    {
      title: "Web & Mobile Developer Intern",
      company: "IWARE",
      period: "February 2026 - June 2026",
      location: "Sousse, Tunisia",
      description:
        "Designed and developed a loyalty management platform for companies, partner stores and promotional offers. Implemented microservices architecture with Spring Boot, Eureka Discovery Server and OpenFeign. Developed web and mobile applications using React, React Native and Spring Boot.",
      technologies: ["React", "React Native", "Spring Boot", "Microservices", "Eureka", "OpenFeign", "MySQL", "Docker", "CI/CD"],
      type: "Internship",
    },
    {
      title: "Web Development Intern",
      company: "GPRO Consulting",
      period: "July 2025 - August 2025",
      location: "Sousse, Tunisia",
      description:
        "Developed a Human Resources management system. Implemented frontend interfaces using React and backend services using Node.js. Managed application data using MongoDB.",
      technologies: ["React", "Node.js", "MongoDB"],
      type: "Internship",
    },
    {
      title: "IoT Final Year Project Intern",
      company: "GPRO Consulting",
      period: "February 2023 - June 2023",
      location: "Sousse, Tunisia",
      description:
        "Developed a real-time production monitoring system using RFID technology. Built backend services with Spring Boot and frontend interfaces with Angular. Integrated Raspberry Pi devices for data acquisition.",
      technologies: ["Angular", "Spring Boot", "Raspberry Pi", "RFID", "MySQL"],
      type: "PFE (Graduation Project)",
    },
    {
      title: "IT Intern",
      company: "Draxlmaier",
      period: "July 2022",
      location: "Sousse, Tunisia",
      description:
        "Provided technical support and computer maintenance. Assisted with hardware configuration and network troubleshooting.",
      technologies: ["Technical Support", "IT Maintenance", "Networking"],
      type: "Internship",
    },
  ];

  const education = [
    {
      degree: "Engineering Degree in Software Engineering",
      school: "EPI Digital School",
      period: "2023 - 2026",
      location: "Sousse, Tunisia",
      description:
        "Specializing in web and mobile development, software architecture, and distributed systems.",
    },
    {
      degree: "Bachelor's Degree in Computer Systems Engineering",
      school: "ISITCOM",
      period: "2020 - 2023",
      location: "Sousse, Tunisia",
      description:
        "Specialization: IoT and Embedded Systems. Final project focused on RFID-based production tracking.",
    },
  ];

  return (
    <section id="experiences" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* === Section Title === */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Professional Experiences
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A journey through my technical and professional evolution 🚀
          </p>
        </div>

        {/* === Experiences List === */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-850 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md shadow-cyan-500/30">
                      <Briefcase size={18} sm:size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm sm:text-base md:text-lg">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} sm:size={14} /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} sm:size={14} /> {exp.location}
                        </span>
                        <span className="px-2 py-1 bg-gray-900/70 border border-gray-700 rounded-md text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 pl-11 sm:pl-14 text-sm sm:text-base">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pl-11 sm:pl-14">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-gray-900 border border-gray-700 text-cyan-400 rounded-full text-xs sm:text-sm font-medium hover:border-cyan-500 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* === Education Section === */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-gray-800/70 to-gray-900/80 border border-gray-700 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm hover:border-cyan-500/20 transition">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <GraduationCap className="text-cyan-400" size={20} sm:size={24} /> Academic Background
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-cyan-500/30 hover:shadow-md hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <h4 className="text-base sm:text-lg font-semibold text-gray-100 mb-1">
                  {edu.degree}
                </h4>
                <p className="text-cyan-400 font-medium mb-1 text-sm sm:text-base">{edu.school}</p>
                <p className="text-gray-400 text-xs sm:text-sm mb-2">
                  {edu.period} • {edu.location}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}