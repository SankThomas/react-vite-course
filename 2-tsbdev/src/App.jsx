import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import BlogGrid from "./components/BlogGrid";
import BlogPost from "./components/BlogPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen text-white">
          <Header onSearch={handleSearch} />

          <main>
            <Routes>
              <Route
                path="/"
                element={<BlogGrid searchQuery={searchQuery} />}
              />
              <Route path="/posts/:slug" element={<BlogPost />} />
            </Routes>
          </main>

          <footer className="border-t border-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="text-gray-500">
                &copy; {new Date().getFullYear()} TsbSankara. Built with React,
                Vite, and Sanity CMS.
              </p>
            </div>
          </footer>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
