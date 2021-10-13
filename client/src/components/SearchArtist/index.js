import React, { useState } from "react";
import Search from "./search";
import Artist from "./artist";
import moment from "moment";

var apiKey = "MjM4MDM5MDN8MTYzMzY1Mjk1MC45NTUyODc1";
var clientSecret =
  "85c614d7653cdf917ec0283b9fd1ae57dc2f38cb57df6239ac7238f7f021a3ed";
var apiUrl =
  "https://api.seatgeek.com/2/{searchType}?client_id=" +
  apiKey +
  "&client_secret=" +
  clientSecret +
  "&q={searchValue}";

var eventAPI =
  "https://api.seatgeek.com/2/events?performers.slug={searchValue}&client_id=" +
  apiKey +
  "&client_secret=" +
  clientSecret;

function SearchArtist() {
  const [artistSelected, setArtistSelected] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState({});
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState({
    performers: [],
    meta: {},
  });
  const [event, setEvents] = useState({
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
        setArtists(jsonResponse);
        setLoading(false);
      } else {
        setErrorMessage(jsonResponse.message);
        setLoading(false);
      }
    });
  };

  function getArtistEvents(searchValue) {
    setArtistSelected(true);
    var apiString = eventAPI
      .replace("{searchType}", "events")
      .replace("{searchValue}", searchValue);

    callApi(apiString).then((jsonResponse) => {
      if (!jsonResponse.message) {
        setEvents(jsonResponse);
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
      <div className="artist-wrapper">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : artistSelected ? (
          event.events.length === 0 ? (
            <span>
              <Artist artist={selectedArtist}></Artist>
              <p>no upcoming events</p>
            </span>
          ) : (
            <span>
              <Artist artist={selectedArtist}></Artist>
              {event.events.map((event, index) => {
                return (
                  <div
                    key={`${index}-${event.id}`}
                    className="artist-event-wrapper"
                  >
                    <h1 className="artist-event-name">{event.title}</h1>
                    <h3 className="artist-lineup">Artist Lineup</h3>
                    {event.performers.map((performer, i) => {
                      return (
                        <span key={`${i}-${performer.id}`}>
                          <h4 className="artist-profile-name">
                            {performer.name}
                          </h4>
                        </span>
                      );
                    })}

                    <ul className="artist-event-details">
                      <li>{moment(event.datetime_local).format('lll')}</li>
                      <li>{event.venue.name}</li>
                      <li>{event.venue.address}</li>
                      <li>{event.venue.display_location}</li>
                    </ul>

                    <p></p>
                  </div>
                );
              })}
            </span>
          )
        ) : (
          artists.performers.map((performer, index) => {
            return (
              <div
                key={`${index}-${performer.id}`}
                onClick={() => {
                  setSelectedArtist(performer);
                  getArtistEvents(`${performer.slug}`);
                }}
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
