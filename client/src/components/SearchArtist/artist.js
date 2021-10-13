import React from "react";

const Artist = ({ artist }) => {
  return (
    <div className="artist-search">
      <h2 className="artist-name"> {artist.name}</h2>
      <img alt="artist-image" src={artist.image}></img>
    </div>
  );
};

export default Artist;
