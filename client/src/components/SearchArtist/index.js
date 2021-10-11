import React, { useState } from "react";
import Search from "./search";
import Artist from "./artist";

var apiKey = "MjM4MDM5MDN8MTYzMzY1Mjk1MC45NTUyODc1";
var clientSecret =
  "85c614d7653cdf917ec0283b9fd1ae57dc2f38cb57df6239ac7238f7f021a3ed";
var apiUrl =
  "https://api.seatgeek.com/2/{searchType}?client_id=" +
  apiKey +
  "&client_secret=" +
  clientSecret +
  "&q={searchValue}";

function SearchArtist() {
  const [artistSelected, setArtistSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState({
    performers: [],
    meta: {},
  });
  const [events, setEvents] = useState({
    events: [],
    meta: {},
  });

  const [errorMessage, setErrorMessage] = useState(null);

  function callApi(url) {
    return fetch(url).then((response) => response.json());
  }

  const search = (searchValue) => {
    setArtistSelected(false);
    setLoading(true);
    setErrorMessage(null);
    var apiString = apiUrl
      .replace("{searchType}", "performers")
      .replace("{searchValue}", searchValue)
      .replace(" ", "+");

    callApi(apiString).then((jsonResponse) => {
      if (!jsonResponse.message) {
        setArtists({ ...jsonResponse });
        setLoading(false);
      } else {
        setErrorMessage(jsonResponse.message);
        setLoading(false);
      }
    });
  };

  function getArtistEvents(searchValue) {
    setArtistSelected(true);
    var apiString = apiUrl
      .replace("{searchType}", "events")
      .replace("{searchValue}", searchValue)
      .replace(" ", "+");

    callApi(apiString).then((jsonResponse) => {
      if (!jsonResponse.message) {
        setEvents({ ...jsonResponse });
        setLoading(false);
      } else {
        setErrorMessage(jsonResponse.message);
        setLoading(false);
      }
    });
  }

  return (
    <section className="fillertwo">
      <h1 className="about-head" id="about">
        Search for An Artist
      </h1>
      <Search search={search}></Search>
      <div className="artists">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : artistSelected ? (
          <></>
        ) : (
          artists.performers.map((performer, index) => {
            return (
              <div
                key={`${index}-${performer.id}`}
                onClick={() => getArtistEvents(`${performer.id}`)}
              >
                <Artist artist={performer}></Artist>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

export default SearchArtist;
