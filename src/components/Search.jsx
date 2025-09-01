import React, { useEffect, useState } from "react";
import axios from "axios";


const Search = () => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const { data } = await axios.get(
      "https://www.omdbapi.com/?apikey=c24b97b7&s=fast"
    );
    setMovies(data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section id="search">
        <div className="movie__list"> 
          {movies.map((movie) => (
        <div className="movie">
                <figure className="movie__img--wrapper">
                  <img className="movie__img" src={movie.Poster} alt="" />
                </figure>
                <div className="movie__title">{movie.Title}</div>
                <div className="movie__year">{movie.Year}</div>
              </div>
      )) }
        </div>
       
        
      <div className="container search__container">
        <div className="row">
          <div className="search__header">
            <div className="search__title">
              <h1 className="title__search">
                Search Results:
                <span className="search__results"></span>
              </h1>
            </div>
            <select id="filter" onchange="sortChange(event)">
              <option value="" disabled selected>
                Sort
              </option>
              <option value="Newest">Newest to Oldest</option>
              <option value="Oldest">Oldest to Newest</option>
            </select>
            <div class="movie__results movies__loading">
              <i class="fas fa-spinner books__loading--spinner"></i>
            </div>
          </div>
     
     
        </div>
      </div>
    </section>
  );
};

export default Search;
