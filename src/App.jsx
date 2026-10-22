import { MotionConfig } from "framer-motion";

import About from "./components/About";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OpenSource from "./components/OpenSource";
import Projects from "./components/Projects";
import Research from "./components/Research";
import ScrollProgress from "./components/ScrollProgress";
import Testimonials from "./components/Testimonials";

const App = () => (
  // reducedMotion="user" makes every animation respect the OS "reduce motion" setting.
  <MotionConfig reducedMotion="user">
    <ScrollProgress />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <OpenSource />
      <Projects />
      <Research />
      <Background />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </MotionConfig>
);

export default App;
