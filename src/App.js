import About from "./components/About";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import CustomCursor from "./components/CustomCursor";
import { useState, useEffect } from "react";

function App() {
  const [showComponent, setShowComponent] = useState(window.innerWidth > 480);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowComponent(window.innerWidth > 480);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="app-container">
      <About />
      <Aboutme />
      <Projects />
      {showComponent && <CustomCursor />}
    </div>
  );
}

export default App;