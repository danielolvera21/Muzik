import React, { useState } from "react";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        id="query"
        className="searched-artist"
        placeholder="Search for an Artist..."
      />
      <input
        onClick={callSearchFunction}
        type="submit"
        className="artist-search-button"
        value="SEARCH"
      />
    </form>
  );
}

export default Search;
