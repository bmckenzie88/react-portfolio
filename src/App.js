import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Moose from "./pages/Moose";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router basename="/react-portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/moose" element={<Moose />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
