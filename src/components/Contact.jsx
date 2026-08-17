import { Mail, Linkedin, Github, Phone, MapPin, Send, MessageCircle, Download } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "mariemguib@gmail.com",
      link: "mailto:mariemguib@gmail.com",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+216 96 201 966",
      link: "tel:+21696201966",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Sousse, Tunisia",
      link: null,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/mariem-guibene-8b039123a/",
      target: "_blank",
      color: "from-blue-600 to-blue-400",
      hoverColor: "hover:border-blue-500"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      link: "https://github.com/Mariem0401",
      target: "_blank",
      color: "from-gray-600 to-gray-400",
      hoverColor: "hover:border-gray-500"
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      link: "mailto:mariemguib@gmail.com",
      target: undefined,
      color: "from-cyan-600 to-cyan-400",
      hoverColor: "hover:border-cyan-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden bg-gray-800/30">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <MessageCircle className="inline mr-2 text-cyan-400" size={20} />
            <span className="text-cyan-400 font-medium text-sm">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm currently seeking a <span className="text-cyan-400 font-semibold">final year internship</span> opportunity.
            Let's connect and discuss how I can contribute to your team!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl blur transition-opacity duration-300"
                   style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {info.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">{info.label}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-gray-100 font-medium hover:text-cyan-400 transition break-all text-sm"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-100 font-medium text-sm">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-100 mb-3">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-300 text-lg">
              I'd love to hear about it and discuss how I can help bring your ideas to life
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:mariemguib@gmail.com"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Send size={20} className="group-hover:rotate-45 transition-transform duration-300" />
              Send a Message
            </a>
            <a 
              href="https://www.linkedin.com/in/mariem-guibene-8b039123a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800 border border-gray-700 text-gray-300 rounded-xl font-semibold hover:border-cyan-500 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <Linkedin size={20} />
              View LinkedIn Profile
            </a>
            <a
              href="/resume/Mariem_Guibene_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800 border border-gray-700 text-gray-300 rounded-xl font-semibold hover:border-cyan-500 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-gray-400 mb-6 font-medium">Connect with me on social media</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.link}
                target={social.target}
                rel={social.target ? 'noopener noreferrer' : undefined}
                className={`group relative p-5 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl ${social.hoverColor} transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg`}
                aria-label={social.label}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 group-hover:scale-110 transform">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
}