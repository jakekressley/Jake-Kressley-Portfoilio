import { BrowserRouter } from "react-router-dom";

import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
extend({ OrbitControls });

import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <div className="arrow-up"></div>
      <Navbar />
      <About />
      <Contact />
      <Hero />
    </BrowserRouter>
  );
};

export default App;
