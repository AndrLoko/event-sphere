import React from 'react'
import './Card.scss'
import TagGoing from '../tag/TagGoing'
import TagSales from '../tag/TagSales'

export default function Card({ image, tag, title, date, price, descr }) {
  return (
    <div className='card'>
        <a className="card__wrapper">
            <img src={image} alt="" className="card__img" />
            <div className="card__tag">{tag}</div>
            <h2 className='card__title'>{title}</h2>
            <p className='card__date'>{date}</p>
            <p className='card__price'>{price}</p>
            <p className='card__descr'>{descr}</p>
        </a>
    </div>
  )
}
