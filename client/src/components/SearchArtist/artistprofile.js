import React from "react";

const Profile = ({ event }) => {
  return (
    <div className="artist">
      <h2> {event.venue}</h2>
      <img alt="artist" src={event.image}></img>
    </div>
  );
};

export default Profile;
