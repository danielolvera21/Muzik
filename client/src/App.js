import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Donation from './components/Donation';
import Fillerone from './components/Filler';
import Fillertwo from './components/FillerTwo';
import Footer from './components/Footer';
import './App.css';

function App() {
  
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      {!contactSelected ? (
        <>
      <Hero></Hero>
      <About></About>
      <main>
      <Fillertwo></Fillertwo>
      <Fillerone></Fillerone>
      <Contact></Contact>
      <Fillertwo></Fillertwo>
      </main>
      </>
      ) : (
        <Donation></Donation>
      )}
      <footer>
      <Footer></Footer>
      </footer>
      
    </div>
  );
}

export default App;
