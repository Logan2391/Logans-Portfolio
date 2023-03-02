import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './style.css';


function App() {
  return (
      <div>
        <Nav />
        <Home />
        <Projects />
        <Contact />
      </div>
  );
}

export default App;
