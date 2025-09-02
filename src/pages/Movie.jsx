import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ search }) => {
  return (
   <div id="movie__body">
    <main id="movie__main">
        <div className="movie__container">
            <div className="row">
                <div className="movie__selected">
                    <Link to="/movies" className="movie__link">
                    <FontAwesomeIcon icon="arrow-left" />
                    </Link>
                </div>
            </div>
        </div>
    </main>
   </div>
  )
}

export default Movie
