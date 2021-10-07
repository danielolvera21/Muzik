import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Donation from './components/Donation';
import Fillerone from './components/Filler';
import Fillertwo from './components/FillerTwo';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <main>
      <About></About>
      <Fillertwo></Fillertwo>
      <Fillerone></Fillerone>
      <Contact></Contact>
      <Fillertwo></Fillertwo>
      <Donation></Donation>
      </main>
      <footer>

      </footer>
      
    </div>
  );
}

export default App;
