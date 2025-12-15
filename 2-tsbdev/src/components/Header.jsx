import { useState } from "react";
import { Search, Menu, X, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Header({ onSearch }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, login, logout, isAdmin } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-gray-800">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-text">TsbSankara</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-magenta transition-colors"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-magenta transition-colors"
            >
              About
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-magenta transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Search className="size-5" />
            </button>

            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-300">{user.name}</span>

                {isAdmin && (
                  <span className="px-2 py-1 bg-magenta text-white text-xs rounded-full">
                    Admin
                  </span>
                )}

                <button
                  onClick={logout}
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <LogOut className="size-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => login("admin@blog.com", "Thomas Sankara")}
                className="btn-primary"
              >
                <User className="size-4 inline mr-2" /> Login
              </button>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="mt-4 slide-in">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for an article..."
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-magenta text-white"
                autoFocus
              />

              <button
                type="submit"
                className="px-6 py-2 bg-magenta hover:bg-magenta-dark text-white rounded-r-lg transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800 slide-in">
            <nav className="space-y-4">
              <a
                href="#"
                className="block text-gray-300 hover:text-magenta transition-colors"
              >
                Home
              </a>

              <a
                href="#"
                className="block text-gray-300 hover:text-magenta transition-colors"
              >
                About
              </a>

              <a
                href="#"
                className="block text-gray-300 hover:text-magenta transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
