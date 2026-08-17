import { Code2, Database, Smartphone, Server, Award, Briefcase, GraduationCap, Download, Mail, Github, Linkedin, Cpu, MapPin, Phone } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: <Code2 size={24} />,
      title: "Frontend Dev",
      techs: [
        "React",
        "React Native",
        "Angular",
        "Flutter",
        "TypeScript",
        "TailwindCSS",
        "Bootstrap",
      ],
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: <Server size={24} />,
      title: "Backend Dev",
      techs: [
        "Spring Boot",
        "Node.js",
        "Express",
        "REST APIs",
        "Microservices",
        "Eureka",
        "OpenFeign",
      ],
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: <Database size={24} />,
      title: "Databases",
      techs: ["MongoDB", "PostgreSQL", "Firebase"],
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: <Smartphone size={24} />,
      title: "DevOps & Tools",
      techs: [
        "Docker",
        "Git",
        "GitLab CI/CD",
        "Nginx",
        "Postman",
        "Swagger",
        "Selenium",
      ],
      gradient: "from-orange-400 to-red-500",
    },
    {
      icon: <Award size={24} />,
      title: "AI & Data",
      techs: ["TensorFlow", "Machine Learning", "Image Processing", "Python"],
      gradient: "from-pink-400 to-rose-500",
    },
    {
      icon: <Cpu size={24} />,
      title: "IoT & Hardware",
      techs: ["Arduino", "Raspberry Pi", "Sensors", "RFID"],
      gradient: "from-yellow-400 to-amber-500",
    },
  ];

  return (
    <section id="about" className="relative py-20 px-6 bg-gray-900 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Software Engineer focused on building reliable and scalable digital products.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Profile Card */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 sm:p-8 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold text-white shadow-xl">
              MG
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Mariem Guibene</h3>
            <p className="text-cyan-400 font-medium mb-3 sm:mb-4 text-sm sm:text-base">Software Engineer</p>

            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-2">
                <MapPin size={14} sm:size={16} className="text-gray-500" />
                <span>Sousse, Tunisia</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail size={14} sm:size={16} className="text-gray-500" />
                <span>mariemguib@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone size={14} sm:size={16} className="text-gray-500" />
                <span>+216 96 201 966</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-gray-800/50 rounded-xl p-3 sm:p-4 border border-gray-700/30">
                <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  7+
                </div>
                <div className="text-xs text-gray-400 mt-1">Projects</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-3 sm:p-4 border border-gray-700/30">
                <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Full Stack
                </div>
                <div className="text-xs text-gray-400 mt-1">Developer</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-4 sm:mb-6">
              {["Full Stack", "IoT", "Mobile", "Microservices", "AI/ML"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <a
              href="/resume/Mariem_Guibene_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all text-sm sm:text-base"
            >
              <Download size={16} sm:size={18} />
              Download Resume
            </a>
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Education */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} sm:size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Education</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                      Engineering Degree in Software Engineering
                    </span>
                    <br />
                    EPI Digital School, Sousse • 2023 - 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase size={20} sm:size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Experience</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Built full-stack applications across web, mobile, IoT and AI domains. Experienced in developing scalable applications with Angular, React, Spring Boot, Docker and microservices architecture. Currently working on a modular social-commerce platform designed to help merchants transition from social selling to structured online businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Goal */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 sm:p-6 hover:border-yellow-500/50 transition-all">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={20} sm:size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Current Goal</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Seeking a{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">
                      Software Engineer / Full-Stack Developer
                    </span>{" "}
                    opportunity where I can build scalable applications, solve real-world problems, and continue growing as an engineer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 sm:p-6 hover:border-gray-600 transition-all group"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{skill.icon}</div>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{skill.title}</h4>
                <div className="space-y-1 sm:space-y-2">
                  {skill.techs.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.gradient}`}></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bio Statement */}
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 sm:p-8 text-center mb-6 sm:mb-8">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
            I'm a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
              Software Engineer
            </span>{" "}
            focused on building reliable and scalable digital products. My experience spans{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold">
              full-stack web development, mobile applications, microservices, AI and IoT
            </span>
            . I enjoy turning real-world problems into practical software solutions through clean architecture, modern technologies and thoughtful user experiences.
          </p>
        </div>

        {/* Languages */}
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { name: "French", level: "Fluent", flag: "🇫🇷" },
              { name: "English", level: "Intermediate", flag: "🇬🇧" },
              { name: "Arabic", level: "Native", flag: "🇹🇳" },
            ].map((lang, i) => (
              <div
                key={i}
                className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-center hover:border-cyan-500/50 transition-all min-w-[120px] sm:min-w-[140px]"
              >
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{lang.flag}</div>
                <div className="text-white font-medium text-sm sm:text-base">{lang.name}</div>
                <div className="text-cyan-400 text-xs sm:text-sm">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}