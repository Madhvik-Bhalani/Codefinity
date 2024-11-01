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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <TeamSection />
        <ContactSection/>
      </BrowserRouter>
    </>
  );
}

export default App;
