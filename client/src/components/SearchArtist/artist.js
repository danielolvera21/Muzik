import React from "react";

const Artist = ({ artist }) => {
  return (
    <div className="artist">
      <h2> {artist.name}</h2>
      <img alt="artist" src={artist.image}></img>
    </div>
  );
};

export default Artist;
