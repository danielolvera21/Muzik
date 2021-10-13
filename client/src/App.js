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
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import "./App.css";

function App() {

  const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const [categories] = useState([
    { name: "home", description: "main page" },
    { name: "about", description: "about the website" },
    { name: "contact", description: "contact us" },
    { name: "donate", description: "donate to us" },
    { name: "search", description: "search an artist" },
    { name: "live", description: "Live shows" },
    { name: "login", description: "logs you in" },
    { name: "signup", description: "signs you up" }
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
        <main>
          <Filler></Filler>
          <Fillertwo></Fillertwo>
          <Contact></Contact>
        </main>
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
