import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Movie = () => {

const { imdbID } = useParams;
const [movies, setMovies] = useState([]);


async function getMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=c24b97b7&s=${imdbID}`
    );
    setMovies(data.Search);

    //   const movie = movies.find(movie => +movies.id === +id)
    //   console.log(getMovies)
  }


 


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
            <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img
                  src={"https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"}
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
              Movie Title
                </h2>
                <div className="book__selected--year">
                    2003
                    </div>
                <div className="movie__summary--title">
                    Summary
                </div>
                <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos id tempore veniam illum. Illum iste nostrum aperiam, voluptate sed quasi repellat, incidunt quis, sit nesciunt aut deserunt nulla dolor.
                </p>
                <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos id tempore veniam illum. Illum iste nostrum aperiam, voluptate sed quasi repellat, incidunt quis, sit nesciunt aut deserunt nulla dolor.
                </p>
             
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Movie;
