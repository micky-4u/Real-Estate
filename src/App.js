import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Welcome from './pages';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'
import ProjectInfoPage from './pages/projectInfoPage';
function App() {
  return (
    <>
    <Router>
      <Routes>

        <Route path ='/' element ={<Welcome /> } />

        <Route path ='/home' element ={<Home /> } />

        <Route path ='/about' element ={<About />} />
        <Route path ='/projects' element ={<Projects />} />
        <Route path ='/contact' element ={<Contact />} />
        <Route path ='/projectInfoPage' element ={<ProjectInfoPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
