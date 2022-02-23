import React from "react";

const Search = ({ query, setQuery }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      placeholder="Search By Title"
      onChange={handleChange}
    />
  );
};

export default Search;
