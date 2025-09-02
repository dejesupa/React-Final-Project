import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
 <nav>
    <div className="container nav__container">
        <div className="row nav__row">
            <Link to="/">
            <img src="https://t3.ftcdn.net/jpg/04/84/16/58/240_F_484165867_mYKhr65zUWkReGSbH93zHr9xdVXgmLxr.jpg" alt="" className="nav__logo" />
            </Link>
            <ul className="nav__link--list">
                        <li className="nav__link">
                            <Link to="/" className="
                            nav__link--anchor
                            link__hover-effect
                            ">Home</Link>
                        </li>
                        <li className="nav__link">
                            <Link to="/movies" className="
                            nav__link--anchor
                            link__hover-effect
                            ">Find Your Movie</Link>
                        </li>
                        <button className="btn">CONTACT</button>
                    </ul>
        </div>
    </div>
 </nav>
  )
}

export default Nav
