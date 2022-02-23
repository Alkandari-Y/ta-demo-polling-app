import React from "react";

const Search = ({ query }) => {
  const handleChange = (e) => {
    query = e.target.value;
    console.log(query);
  };

  return (
    <input type="text" placeholder="Search By Title" onChange={handleChange} />
  );
};

export default Search;
