import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBarComp from './components/NavBarComp.js';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
     
    <NavBarComp/>
    
    </div>
  );
}

export default App;
