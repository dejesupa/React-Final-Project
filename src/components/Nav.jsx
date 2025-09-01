import React from 'react'

const Nav = () => {
  return (
 <nav>
    <div className="container nav__container">
        <div className="row nav__row">
            <a href="/">
            <img src="https://t3.ftcdn.net/jpg/04/84/16/58/240_F_484165867_mYKhr65zUWkReGSbH93zHr9xdVXgmLxr.jpg" alt="" className="nav__logo" />
            </a>
            <ul className="nav__link--list">
                        <li className="nav__link">
                            <a href="/" className="
                            nav__link--anchor
                            link__hover-effect
                            ">Home</a>
                        </li>
                        <li className="nav__link">
                            <a href="/" className="
                            nav__link--anchor
                            link__hover-effect
                            ">Find Your Movie</a>
                        </li>
                        <button className="btn">CONTACT</button>
                    </ul>
        </div>
    </div>
 </nav>
  )
}

export default Nav
