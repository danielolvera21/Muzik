import React, { useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Donation from "./components/Donation";
import SearchArtist from "./components/SearchArtist";
import Footer from "./components/Footer";
import DonationFillerOne from './components/DonationFillerOne';
import DonationFillerTwo from './components/DonationFillerTwo';
import DonationFillerThree from './components/DonationFillerThree';
import DonationFillerFour from './components/DonationFillerFour';
import Filler from './components/Filler';
import Fillertwo from './components/Fillertwo';
import "./App.css";

function App() {

  const [categories] = useState([
    { name: "home", description: "main page" },
    { name: "about", description: "about the website" },
    { name: "contact", description: "contact us" },
    { name: "donate", description: "donate to us" },
    { name: "search", description: "search an artist" },
    { name: "live", description: "Live shows" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
       {currentCategory.name === "home" ? (
        <main>
        <Fillertwo></Fillertwo>
        <Home></Home>
        <Filler></Filler>
        <Fillertwo></Fillertwo>
        </main>
       ) : currentCategory.name === "about" ? (
        <main>
        <Fillertwo></Fillertwo>
        <About></About>
        <Fillertwo></Fillertwo>
        </main>
      ) : currentCategory.name === "contact" ? (
        <Contact></Contact>
      ) : currentCategory.name === "donate" ? (
        <main>
        <DonationFillerFour></DonationFillerFour>
        <Donation></Donation>
        <DonationFillerTwo></DonationFillerTwo>
        <DonationFillerOne></DonationFillerOne>
        <DonationFillerThree></DonationFillerThree>
        </main>
      ) : currentCategory.name === "search" ? (
        <SearchArtist></SearchArtist>
      ) : (
        <></>

      )}
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;
