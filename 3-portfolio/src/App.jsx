import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
