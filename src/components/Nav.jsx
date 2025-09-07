import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
 <nav>
    <div className="container nav__container">
        <div className="row nav__row">
            <img src="https://cdn.dribbble.com/userupload/42396578/file/original-f57912593b3f18b04e4fb0ea4a91b2cb.gif" alt="" className="nav__logo" />
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
