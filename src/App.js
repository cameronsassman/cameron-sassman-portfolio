import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Intro from "./components/sections/Intro";
import Projects from "./components/sections/Projects";
import SkillsBar from "./components/sections/SkillsBar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <About />
                <SkillsBar />
                <Experience />
                <Projects />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <footer>
        <p>Crafted by Cameron Sassman using React Js & too much coffee 👾</p>
      </footer>
    </>
  );
}

export default App;
