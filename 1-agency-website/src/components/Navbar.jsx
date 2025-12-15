import { Menu, X } from "lucide-react";

export default function Navbar({
  milk,
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
}) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-slate-900">
            <span className="text-red-500">Acme</span> Agency
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["hero", "services", "work", "about", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => milk(section)}
                className={`capitalize transition-all duration-300 ${
                  activeSection === section
                    ? "text-red-500 font-medium"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {section === "hero" ? "Home" : section}
              </button>
            ))}

            <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="p-4 md:hidden bg-white border-t border-slate-200">
          {["hero", "services", "work", "about", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => milk(section)}
              className="block w-full text-left py-2 text-slate-600 hover:text-red-500 capitalize transition-colors duration-300"
            >
              {section === "hero" ? "Home" : section}
            </button>
          ))}

          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
