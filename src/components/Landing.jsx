import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';

const Landing = () => {
  return (
   <section id="landing">
    <header>
        <div className="header__container">
            <div className="header__description">
                <h1>Browse Our Movies</h1>
                <div className="input__wrapper">
                    <header class="title">
                    <h1 class="title-with-box">Browse Our Movies</h1>
                    <div class="input__wrapper">
                        <input type="text" id="search__Input" placeholder="Search by Title, Year or Keyword" onchange="searchChange(event)">
                            <button class="search__btn">
                                <FontAwesomeIcon icon="solid magnifying-glass" />
                            </button>
                       
                    </div>
                    
                </header>
                </div>
            </div>
        </div>
    </header>
   </section>
   
   
   
   
   
   

              
                    </div>
  )
}

export default Landing
