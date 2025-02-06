import React from 'react'
import './Card.scss'
import TagGoing from '../tag/TagGoing'
import TagSales from '../tag/TagSales'

export default function Card({ image, tag, title, date, price, descr }) {
  return (
    <div className='card'>
        <a className="card__wrapper">
            <img src='../../../../public/Card-1.png' alt="" className="card__img" />
            <div className="card__tag"><TagSales /></div>
            <h2 className='card__title'>2025 Wichita Local Food Producers Workshop</h2>
            <p className='card__date'>Saturday • 9:00 AM</p>
            <p className='card__price'>From $25.00</p>
            <p className='card__descr'>K-State Research & Extension - Local Food Systems</p>
        </a>
    </div>
  )
}
