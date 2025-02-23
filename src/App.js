import About from './components/About';
import './App.css';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <About />
      <Aboutme />
      <Projects />
    </div>
  );
}

export default App;
