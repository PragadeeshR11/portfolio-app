import "./App.css";
import { Layout } from "./UI/Layouts";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Footer";

function App() {
  return (
    <div className="relative w-full">
      <Layout>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
