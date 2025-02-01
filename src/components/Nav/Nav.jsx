import React from 'react'
import { Link } from 'react-router'

import '../../styles/fonts.css'
import './Nav.scss'

export default function Nav() {
  return (
    <nav>
        <div className="nav__wrapper">
            <a href="/" className='logo'>
              <img src='../../logo.png' className="logo__img"></img>
            </a>
            <p className="logo__text">EVENTSPHERE</p>
            <div className="nav__search">
              <input type="text" className='nav__search-input'></input>
              <button className="nav__search-btn"><img src="../../../public/search.png" alt="" /></button>
            </div>
            <ul className="nav__list">
                <li><Link className="nav__link" to='/create-events'>Create Events</Link></li>
                <li><Link className="nav__link" to='/find-tickets'>Find my tickets</Link></li>
                <li><Link className="nav__link" to='/login'>Log In</Link></li>
                <li><Link className="nav__link nav__link-btn" to='/signup'>Sign Up</Link></li>
            </ul>
        </div>
    </nav>
  )
}
