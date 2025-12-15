import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-white"
    >
      <div className="container-custom section-padding pt-32 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg"
              alt="Profile image"
              className="size-32 rounded-full mx-auto object-cover border-4 border-white shadow-xl"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I am <span className="gradient-text">Thomas Sankara</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full Stack Web Developer and UI/UX Designer creating beautiful,
            functional digital experiences
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            I specialize in React, NodeJs, and modern web technologies.
            Passionate about clean code, user experience, and bringing ideas to
            life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
            >
              View My Work
            </button>

            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/sankthomas"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Github size={24} />
            </a>

            <a
              href="https://linkedin.com/"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:sankara@example.com"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce-slow text-gray-400 hover:text-primary-600 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
