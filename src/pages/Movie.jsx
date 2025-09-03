import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Movie = () => {

const { imdbID } = useParams();
const [movies, setMovies] = useState({});
const [loading, setLoading] = useState(true);

async function getMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=c24b97b7&i=${imdbID}`
    );
    setMovies(data);
    setLoading(false);
    console.log(data);
  }

  useEffect(() => {
    if (imdbID) {
        getMovies(imdbID);
    }
  }, [imdbID]);

  return (
<div id="movie__body">
    <main id="movie__main">
    <div className="movie__container">
        <div className="row">
        <div className="movie__selected">
        <Link to="/movies" className="movie__link">
            <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to="/movies" className="movie__link">
            <h2 className="movie__selected--title">Movies</h2>
            </Link>
        </div>
        {
            loading
            ? (
                <> 
                 <div className="movie__img--skeleton"></div>
            <div className="skeleton movie__title--skeleton"></div>
            <div className="skeleton movie__year--skeleton"></div>
            <div className="skeleton movie__summary--skeleton"></div>
            <div className="skeleton movie__description--skeleton"></div>
            </>
            )
            : (
                <> 
                <div className="movie__selected--wrapper">
        <div className="movie__selected">
            <figure className="movie__selected--figure">
            <img
                src={movies?.Poster}
                alt={movies?.Title}
                className="movie__selected--img"
            />
            </figure>
            <div className="movie__selected--description">
            <h2 className="movie__selected--title">
            {movies?.Title}
            </h2>
            <div className="movie__selected--year">
               {movies?.Year}
                </div>
            <div className="movie__summary--title">
                Summary
            </div>
            <p className="movie__summary--para">
                {movies?.Plot}           
                 </p>
            </div>
        </div>
        </div>
        </div>
        </>
            )
        }
        
    </div>
    </main>
</div>
  );
};

export default Movie;
