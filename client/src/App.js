import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Donation from './components/Donation';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <main>
      <About></About>
      <Donation></Donation>
      <Contact></Contact>
      </main>
      
    </div>
  );
}

export default App;
