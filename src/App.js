import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Proj } from "./components/Projects/Proj";

function App() {
  return (
    <div>
      <Home />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Proj />
      </div>
      <div id="contact">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
