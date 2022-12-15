import Nav from './components/Nav';
import Projects from './components/Projects';
import './style.css';


function App() {
  return (
    <div className='full-page-grid' >
       <Nav/>
      <div>
        <Projects/>
      </div>
      <div></div>
    </div>
  );
}

export default App;
