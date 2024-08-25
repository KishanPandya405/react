import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Home from './Component/Home';
import About from './Component/About';
import Projects from './Component/Projects';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
