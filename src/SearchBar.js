import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ setCity }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setCity(input);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city"
      />
      <button className="btn" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;