import { Mail, Linkedin, Github, Phone, MapPin, Send, Download } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "mariemguib@gmail.com",
      link: "mailto:mariemguib@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+216 96 201 966",
      link: "tel:+21696201966",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Sousse, Tunisia",
      link: null,
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/mariem-guibene-8b039123a/",
      target: "_blank",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      link: "https://github.com/Mariem0401",
      target: "_blank",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      link: "mailto:mariemguib@gmail.com",
      target: undefined,
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Let's connect and discuss how we can work together on your next project.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>

            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-1 uppercase tracking-wider">{info.label}</h4>
                  {info.link ? (
                    <a href={info.link} className="text-base sm:text-lg text-white font-medium hover:text-cyan-400 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-base sm:text-lg text-white font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-4 sm:pt-6">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider">Connect With Me</h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target={social.target}
                    rel={social.target ? 'noopener noreferrer' : undefined}
                    className="p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:mariemguib@gmail.com"
                className="group flex items-center justify-center gap-2 sm:gap-3 w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <Send size={16} sm:size={20} className="group-hover:rotate-12 transition-transform" />
                Send a Message
              </a>

              <a
                href="https://www.linkedin.com/in/mariem-guibene-8b039123a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 sm:gap-3 w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-800 border border-gray-700 text-white rounded-xl font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all text-sm sm:text-base"
              >
                <Linkedin size={16} sm:size={20} />
                View LinkedIn Profile
              </a>

              <a
                href="/resume/Mariem_Guibene_Resume.pdf"
                download
                className="group flex items-center justify-center gap-2 sm:gap-3 w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-800 border border-gray-700 text-white rounded-xl font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all text-sm sm:text-base"
              >
                <Download size={16} sm:size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}