import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [option, setOption] = useState([]);

  function filterMovies(filter) {
    console.log (filter)

    if (filter === "Newest") {
      setOption(option.slice().sort((a, b) => b.Year - a.Year));
    }
    if (filter === "Oldest") {
      setOption(option.slice().sort((a, b) => a.Year - b.Year));
    }
 
  }

  //  function sortChange(event) {
  //         const sortOption = event.target.value

  //         let sortedMovies = [...currentMovies]

  //         if (sortOption === "Newest") {
  //             sortedMovies.sort((a, b) => (b.Year) - (a.Year));
  //         }
  //         else if (sortOption === "Oldest") {
  //             sortedMovies.sort((a, b) => (a.Year) - (b.Year));
  //         }

  //         displayMovies(sortedMovies);

  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const { data } = await axios.get(
      "https://www.omdbapi.com/?apikey=c24b97b7&s=fast"
    );
    setMovies(data.Search);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section id="search">
      <div className="container search__container">
        <div className="row">
          <div className="search__header">
            <div className="search__title">
              <h1 className="title__search">
                Search Results:
                <span className="search__results"></span>
              </h1>
            </div>
            <select
              id="filter"
              defaultValue="DEFAULT"
              onChange={(event) => filterMovies(event.target.value)}
            >
              <option value="" disabled>
                Sort
              </option>
              <option value="Newest">Newest to Oldest</option>
              <option value="Oldest">Oldest to Newest</option>
            </select>
            <div className="movie__results movies__loading">
              <i className="fas fa-spinner books__loading--spinner"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="movie__list">
        {movies.map((movie) => (
          <div className="movie" key={movie.Title}>
            <figure className="movie__img--wrapper">
              <img className="movie__img" src={movie.Poster} alt="" />
            </figure>
            <div className="movie__title">{movie.Title}</div>
            <div className="movie__year">{movie.Year}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
