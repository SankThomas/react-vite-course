import {
  X,
  Menu,
  ArrowRight,
  Play,
  TrendingUp,
  Star,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

const services = [
  {
    icon: <TrendingUp size={32} />,
    title: "Brand Strategy",
    description:
      "Comprehensive brand positioning and strategic planning that sets you apart from the competition.",
    color: "red",
  },
  {
    icon: <Star size={32} />,
    title: "Web Design",
    description:
      "Stunning, responsive websites that convert visitors into customers with intuitive user experiences.",
    color: "blue",
  },
  {
    icon: <Users size={32} />,
    title: "Digital Marketing",
    description:
      "Data-driven marketing campaigns that reach your ideal audience and maximize your ROI.",
    color: "green",
  },
  {
    icon: <Award size={32} />,
    title: "Brand Identity",
    description:
      "Distinctive visual identities that communicate your values and resonate with your market.",
    color: "purple",
  },
  {
    icon: <Play size={32} />,
    title: "Video Production",
    description:
      "Compelling video content that tells your story and engages audiences across all platforms.",
    color: "yellow",
  },
  {
    icon: <ArrowRight size={32} />,
    title: "Consulting",
    description:
      "Strategic guidance and expert insights to help you navigate the digital landscape successfully.",
    color: "indigo",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ["hero", "services", "work", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }

        return false;
      });

      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  return (
    <div className="relative bg-slate-50 overflow-x-hidden">
      <div
        className="fixed size-6 bg-red-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isMenuOpen ? 2 : 1})`,
        }}
      />

      <Navbar
        milk={smoothScroll}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-slate-900"
          style={{
            transform: `translateY(${scrollY * 0.5})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We Create{" "}
              <span className="block text-transparent bg-clip-text bg-linear-to-br from-red-400 to-red-600">
                Digital Magic
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your brand with cutting-edge design and development that
              captivates audiences and drives results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => smoothScroll("work")}
                className="group bg-red-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-600 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View Our Work
                <ArrowRight
                  className="group-hover:translate-x-1 transtiion-transform duration-300"
                  size={20}
                />
              </button>
              <button className="group flex items-center gap-3 text-white hover:text-red-400 transition-colors duration-300">
                <div className="size-16 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-red-400 transition-colors duration-300">
                  <Play size={24} fill="currentColor" />
                </div>
                <span className="text-lg">Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 size-20 bg-red-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-20 size-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 size-16 bg-yellow-500/20 rounded-full blur-xl animate-pulse delay-500" />
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              What We <span className="text-red-500">Deliver</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to completion, we craft digital experiences that
              elevate your brand and engage your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-slate-100"
              >
                <div
                  className={`text-${service.color}-500 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-red-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight
                    size="16"
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work section */}
      <section id="work" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="text-red-500">Portfolio</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Discover how we have helped brands transform their digital
              presence and achieve remarkable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "TechCorp Rebrand",
                category: "Brand Identity",
                image:
                  "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
                description:
                  "Complete brand transformation for a Fortune 500 technology company.",
              },
              {
                title: "EcoLife Campaign",
                category: "Digital Marketing",
                image:
                  "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=600",
                description:
                  "Sustainable living awareness campaign that reached 10M+ people.",
              },
              {
                title: "StartupLab Platform",
                category: "Web Design",
                image:
                  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
                description:
                  "Modern SaaS platform design with focus on user experience.",
              },
              {
                title: "Fashion Forward",
                category: "E-commerce",
                image:
                  "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=600",
                description:
                  "Luxury fashion e-commerce platform with seamless shopping experience.",
              },
              {
                title: "HealthTech Mobile",
                category: "App Design",
                image:
                  "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
                description:
                  "Healthcare mobile app connecting patients with medical professionals.",
              },
              {
                title: "GreenEnergy Site",
                category: "Corporate Web",
                image:
                  "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600",
                description:
                  "Renewable energy company website showcasing sustainability initiatives.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-40 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-red-400 text-sm font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-600 transition-all duration-300 hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">
                Crafting <span className="text-red-500">Excellence</span> Since
                2019
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum
                voluptate libero, maxime laudantium sed laborum distinctio vel
                mollitia praesentium reiciendis perferendis? Culpa, ad nam.
              </p>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                aliquam inventore qui dicta neque in maiores, suscipit quae,
                incidunt illum provident ducimus vitae harum reprehenderit magni
                nihil molestias ratione commodi!
              </p>

              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">
                    300+
                  </div>
                  <p className="text-slate-600">Projects Completed</p>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">
                    98%
                  </div>
                  <p className="text-slate-600">Client Satisfaction</p>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">
                    24/7
                  </div>
                  <p className="text-slate-600">Support Available</p>
                </div>
              </div>

              <button className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-105">
                Meet our Team
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team working"
                className="rounded-2xl shadow-2xl"
              />

              <div className="absolute -bottom-6 -left-4 bg-red-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">5+ Years</div>
                <div className="text-red-100">Of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-slate-900">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Let's Create <span className="text-red-500">Together</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Ready to transform your brand? Get in touch and let's discuss how
              we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Mail className="text-red-400" size="20" />
                  </div>

                  <div>
                    <div className="text-white font-medium">Email us</div>
                    <div className="text-slate-400">hello@acmeagency.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="size-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Phone className="text-red-400" size="20" />
                  </div>

                  <div>
                    <div className="text-white font-medium">Call us</div>
                    <div className="text-slate-400">+254 (0) 723 456 789</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="size-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-red-400" size="20" />
                  </div>

                  <div>
                    <div className="text-white font-medium">Visit us</div>
                    <div className="text-slate-400">
                      123 Thomas Sankara Road, Ouagadougou
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-slate-300 text-sm font-medium mb-2"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors duration-300"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors duration-300"
                    placeholder="Tell us about your project"
                    rows="5"
                  ></textarea>
                </div>

                <button className="group bg-red-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-600 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Send Message
                  <ArrowRight
                    className="group-hover:translate-x-1 transtiion-transform duration-300"
                    size={20}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="container-width">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-red-">Acme </span>Agency
            </h2>

            <p className="mb-8">
              Creating digital experiences that inspire and deliver results
            </p>

            <div className="border-t border-slate-800 pt-8">
              <p>
                &copy; {new Date().getFullYear()} Acme Agency. All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
