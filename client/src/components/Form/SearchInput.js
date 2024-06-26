import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/SearchInput.css"; // Import custom CSS file

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const keyword = values.keyword ? values.keyword.trim() : "";

    if (!keyword) {
      console.log("Keyword is empty or invalid");
      return;
    }

    try {
      console.log(`Searching for: ${keyword}`);
      const encodedKeyword = encodeURIComponent(keyword);
      const url = `/api/v1/product/search/${encodedKeyword}`;
      console.log(`Request URL: ${url}`);

      const { data } = await axios.get(url);
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="search-input-container"> {/* Apply custom container class */}
      <form className="search-form" role="search" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword || ""}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
