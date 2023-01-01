import "./styles.css";
import Contact from "../src/components/Contact/Contact";
import Nav from "../src/components/Nav/Nav";
import Home from "../src/components/Home/Home";
import Services from "../src/components/Services/Services";
import Footer from "../src/components/Footer/Footer";
import Portfolio from "../src/components/Portfolio/Portfolio";
import TechStack from "../src/components/TechStack/Techstack";
import About from "../src/components/About/About";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <hr />
      <Home />
      <hr />
      <About />
      <hr />
      <TechStack />
      <hr />
      <Services />
      <hr />
      <Portfolio />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </div>
  );
}
