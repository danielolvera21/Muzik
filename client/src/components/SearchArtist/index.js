import React, { useEffect, useState } from "react";
import Search from "./search";
import artistSearch from "./api/logic";
var apiKey = "MjM4MDM5MDN8MTYzMzY1Mjk1MC45NTUyODc1";
var clientSecret =
  "85c614d7653cdf917ec0283b9fd1ae57dc2f38cb57df6239ac7238f7f021a3ed";
var apiUrl =
  "https://api.seatgeek.com/2/performers?client_id=" +
  apiKey +
  "&client_secret=" +
  clientSecret +
  "&q={searchValue}";

function SearchArtist() {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const search = (searchValue) => {
    if (!searchValue) return;
    setLoading(true);
    setErrorMessage(null);
    var apiString = apiUrl
      .replace("{searchValue}", searchValue)
      .replace(" ", "+");

    fetch(apiString)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setArtists(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <section className="fillertwo">
      <h1 className="about-head" id="about">
        Search for An Artist
      </h1>
      <Search search={search}></Search>
    </section>
  );
}

export default SearchArtist;
