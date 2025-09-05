import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <section className="landing__page">
        <div className="container landing__container">
            <div className="row landing__row">
                <div className="landing__title">
                    <h1 className="header__title">
                        America's most awarded movie subscription platform
                    </h1>
                    <h2 className="landing__subtitle">
                        FIND A MOVIE TO ENJOY NOW!
                    </h2>
                </div>
                 <div className="button__wrapper">
                        <button className="search__btn">
                        <Link to="/movies" className="btn__name">
                    Search a Movie
                        </Link>
                        </button>
                    </div>
                    <div className="landing__img--wrapper">
                        <div className="landing__img">
                        <figure className="img">
                            <img src="https://www.shutterstock.com/image-vector/movie-time-600w-324455369.jpg" alt="" /> 
                        </figure>
                    </div>
                    </div>
                                    
            </div>
        </div>
    </section>
  )
}

export default Home;
