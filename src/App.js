import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import TeamSection from "./Components/TeamSection/TeamSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";
import ImprintModal from "./Components/ImprintModal/ImprintMode";
import { useRef } from "react";

function App() {

  const imprintRef = useRef(null)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <TeamSection />
        <ContactSection />
        <ImprintModal imprintRef={imprintRef} />
        <Footer imprintRef={imprintRef} />
      </BrowserRouter>
    </>
  );
}

export default App;
