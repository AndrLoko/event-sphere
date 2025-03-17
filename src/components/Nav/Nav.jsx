import React, { useState } from 'react'
import { Link } from 'react-router-dom';



import '../../styles/fonts.css'
import './Nav.scss'

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav>
        <div className="nav__wrapper">
            <Link to="/" className='logo'>
              <img src='/logo.png' className="logo__img"></img>
            </Link>
            <p className="logo__text">EVENTSPHERE</p>
            <button className='nav__burger' onClick={toggleModal}><img className='nav__burger-img' src="/burger-menu.png" alt="gravisio" /></button>
            <ul className="nav__list">
                <li className='nav__item'><Link className="nav__link" to='/create-events'>Create Events</Link></li>
                <li className='nav__item'><Link className="nav__link" to='/find-tickets'>Find my tickets</Link></li>
                {/* <li className='nav__item'><Link className="nav__link" to='/login'>Log In</Link></li>
                <li className='nav__item'><Link className="nav__link nav__link-btn" to='/signup'>Sign Up</Link></li> */}
            </ul>
        </div>
        {isModalOpen && (
        <div className="modal">
          <ul className="modal__list">
            <li className="modal__item">
              <Link className="modal__link" to="/create-events">Create Events</Link>
            </li>
            <li className="modal__item">
              <Link className="modal__link" to="/find-tickets">Find my tickets</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
