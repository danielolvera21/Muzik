import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero'
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <main>
      <About></About>
      </main>
    </div>
  );
}

export default App;
