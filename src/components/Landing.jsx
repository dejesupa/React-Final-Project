import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Landing = () => {

function onChange(event) {
    console.log(event.target.value)
}

const [movies, setMovies] = useState([]);

  async function getMovies() {
    const { data } = await axios.get(
      "https://www.omdbapi.com/?apikey=c24b97b7&s=fast"
    );
    setMovies(data.Search.slice(0, 6));
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
   <section id="landing">
    <div className="header__container">
        <div className="header__description">
            <div className="description__title">
                  <h1>Browse Our Movies</h1>
            </div>          
            <div className="input__wrapper">
                <input type="text" id="search__Input" placeholder="Search by Title, Year or Keyword" onChange="searchChange(event)" />
                <button className="search__btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    </div>
   </section>
   
  );
}

export default Landing

