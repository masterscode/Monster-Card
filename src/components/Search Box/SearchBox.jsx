import React from "react";
import "./searchbox.css";

const SearchBox = ({placeholder, handleSearch}) => (
      <p align = 'center'><input
    type="search"
    className = 'search'
    placeholder={placeholder}
    onChange={handleSearch}
  /></p>
) ;

export default SearchBox;