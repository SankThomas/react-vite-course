import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/sankthomas",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      url: "https://twitter.com/tsbsankara",
      label: "Twitter",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:sankara@example.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12 px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Thomas Sankara
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I specialize in React, NodeJs, and modern web technologies.
              Passionate about clean code, user experience, and bringing ideas
              to life.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  href={social.url}
                  key={index}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>Nairobi, KE</p>
              <p>sankara@example.com</p>
              <p>+254 (0) 712 345 678</p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => scrollToSection("#contact")}
                className="btn-primary"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Thomas Sankara. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with{" "}
              <Heart size={16} className="text-red-500 mx-1 fill-current" />{" "}
              using React and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
