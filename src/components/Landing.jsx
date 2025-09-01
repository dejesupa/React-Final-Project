import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Landing = () => {
  return (
   <section id="landing">
    <div className="header__container">
        <div className="header__description">
            <div className="description__title">
                  <h1>Browse Our Movies</h1>
            </div>          
            <div className="input__wrapper">
                <input type="text" id="search__Input" placeholder="Search by Title, Year or Keyword" onchange="searchChange(event)" />
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

