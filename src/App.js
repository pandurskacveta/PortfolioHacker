import React from "react"
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import NavBar  from './components/NavBar';
import Banner from './components/Banner'
import Skills  from "./components/Skills";
import Projects from "./components/Projects";
import Quotes from "./components/Quotes";
import Contact from './components/Contact'
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <Skills />
     <Projects />
     <Quotes />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
