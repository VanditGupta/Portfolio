import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Research,
  Hero,
  Navbar,
  Tech,
  Works,
  Achievements,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Research />
        <Achievements />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
