import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Filter = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search by:", query);
    getMovies();
  };

  async function getMovies() {
    setLoading(true);

    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=c24b97b7&s=${query}`
    );

    setTimeout(() => {
      if (data.Search) {
        setMovies(data.Search.slice(0, 6));
      }
      setLoading(false);
    }, 2000);
  }


function filterMovies(filter) {
  console.log(filter);

  if (filter === "Newest") {
    setMovies((prevMovies) => [...prevMovies].sort((a, b) => b.Year - a.Year));
  }

  if (filter === "Oldest") {
    setMovies((prevMovies) => [...prevMovies].sort((a, b) => a.Year - b.Year));
  }
};

return (
  <section id="search">
    <div className="container search__container">
      <div className="row">
        <div className="filter__title--wrapper">
          <h2 className="filter__title">Browse Our Movies</h2>
        </div>
        <div className="input__wrapper">
          <div className="input">
            <form className="input__area" onSubmit={handleSearch}>
              <input
                type="text"
                id="search__Input"
                value={query}
                placeholder="Search by Title, Year or Keyword"
                onChange={(event) => setQuery(event.target.value)}
              />
              <button
                type="submit"
                className="search__btn"
                disabled={loading}
                onClick={getMovies}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>

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
        </div>
      </div>
    </div>
    <div className="container movie__container">
      <div className="row movie__row">
        <div className="movie__list">
          {loading ? (
            <div className="movie__results">
              <div className="movies__loading">
                <div className="movies__loading--spinner">
                  <FontAwesomeIcon icon={faSpinner} />
                </div>
              </div>
            </div>
          ) : (
            <>
              {movies.map((movie) => (
                <div className="movie" key={movie.Title}>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <figure className="movie__img--wrapper">
                      <img className="movie__img" src={movie.Poster} alt="" />
                    </figure>
                  </Link>
                  <div className="movie__title">{movie.Title}</div>
                  <div className="movie__year">{movie.Year}</div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  </section>
);
};
export default Filter;
