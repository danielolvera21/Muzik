import React, { useState } from "react";
import artist from "../Artist";

function Fillertwo() {

  return (
    <section className="fillertwo">
      <h1 className="about-head" id="about">
        Search for An Artist
      </h1>
      <form id="form" classname>
        <input
          type="search"
          id="query"
          className="searched-artist"
          placeholder="Search for an Artist..."
        ></input>

        <button className="artist-search-button">Search</button>
      </form>
    </section>
  );
}

export default Fillertwo;
