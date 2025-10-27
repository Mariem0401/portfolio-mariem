import { Code2, Database, Smartphone, Server, Award, Briefcase, GraduationCap, Download, Mail, Github, Linkedin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const skills = [
    {
      icon: <Code2 size={24} />,
      title: "Frontend Dev",
      techs: ["React", "Angular", "TypeScript", "Tailwind", "Astro"],
      color: "cyan",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: <Server size={24} />,
      title: "Backend Dev",
      techs: ["Node.js", "Express", "Spring Boot", "REST APIs"],
      color: "purple",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: <Database size={24} />,
      title: "Databases",
      techs: ["MongoDB", "PostgreSQL", "Firebase"],
      color: "green",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile & IoT",
      techs: ["React Native", "Raspberry Pi", "RFID"],
      color: "orange",
      gradient: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8  overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium backdrop-blur-sm">
              Get to know me
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-5xl md:text-6xl font-bold text-white"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Mariem
            </span>
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          {/* Profile Card - Bento Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 group"
          >
            <div className="relative">
              {/* Avatar with Gradient Ring */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-75 blur-md group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                  MG
                </div>
              </div>

              <div className="text-center space-y-2 mb-6">
                <h3 className="text-2xl font-bold text-white">Mariem Guibene</h3>
                <p className="text-cyan-400 font-medium">Software Engineer</p>
                <p className="text-gray-400 text-sm">📍 Sousse, Tunisia</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-2xl p-4 text-center border border-gray-700/30">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">5+</div>
                  <div className="text-xs text-gray-400 mt-1">Projects</div>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-4 text-center border border-gray-700/30">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">3</div>
                  <div className="text-xs text-gray-400 mt-1">Internships</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {["Full Stack", "IoT", "Mobile"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Info Cards */}
          <div className="lg:col-span-8 grid gap-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 hover:border-cyan-500/50 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                       Engineering Degree in Software Engineering
                    </span>
                    <br />
                    EPI Digital School, Sousse • 2023 - Present
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 hover:border-purple-500/50 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Briefcase size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Built IoT tracking systems with RFID & Raspberry Pi, developed HR management platforms with automated payroll, and created various web applications using modern tech stacks.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Current Goal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Current Goal</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Seeking a{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">
                      final-year internship
                    </span>{" "}
                    to work on innovative projects, grow technical skills, and contribute to a professional dev team.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skills Section - Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Arsenal</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 hover:border-gray-600 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {skill.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{skill.title}</h4>
                  <div className="space-y-2">
                    {skill.techs.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.gradient}`}></div>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bio Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 text-center"
        >
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I'm a passionate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
              Software Engineer
            </span>{" "}
            who loves crafting impactful digital experiences through clean code, creative design, and emerging technologies like{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold">
              IoT & AI
            </span>
            . Let's build something amazing together! 🚀
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}