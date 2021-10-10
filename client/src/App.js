import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Donation from "./components/Donation";
import Fillerone from "./components/Filler";
import Fillertwo from "./components/FillerTwo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [categories] = useState([
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
      {currentCategory.name === "about" ? (
        <About></About>
      ) : currentCategory.name === "contact" ? (
        <Contact></Contact>
      ) : currentCategory.name === "donate" ? (
        <Donation></Donation>
      ) : currentCategory.name === "search" ? (
        <Fillertwo></Fillertwo>
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
