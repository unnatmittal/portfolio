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
      <About />
      <Proj />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
