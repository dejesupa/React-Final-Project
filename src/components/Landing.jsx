import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const Landing = () => {
 const { id } = useParams;
 const [movies, setMovies] = useState([]);
const [query, setQuery] = useState("");

  async function getMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=c24b97b7&s=${query}`
    );

    console.log(data)
    setMovies(data.Search.slice(0, 6));
  }

  function onSearchKeyPress(key) {
    if (key === 'Enter') {
        getMovies();
    }}

    function searchTerm(query) {
    if (query === "") {
        setMovies([]);
    } }

  useEffect(() => {
  getMovies();
   
    }
  
  , []);

  return (
    <section id="landing">
      <div className="header__container">
        <div className="header__description">
          <div className="description__title">
            <h1>Browse Our Movies</h1>
          </div>
          <div className="input__wrapper">
            <input
              type="text"
              id="search__Input"
              value={searchTerm}
              placeholder="Search by Title, Year or Keyword"
              onChange={(event) => setQuery(event.target.value)}
                onKeyUp={(event) => onSearchKeyPress(event.key)}   
            />
            <button className="search__btn" onClick={(event) => getMovies(event.target.value)}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
