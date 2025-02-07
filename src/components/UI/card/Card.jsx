import React from 'react';
import './Card.scss';

import TagGoing from '../tag/TagGoing';
import TagSales from '../tag/TagSales';

export default function Card({ title, date, price, descr }) {
  return (
    <div className='card'>
      <a className="card__wrapper">
        <img src='../../../../public/Card-1.png' alt="" className="card__img" />
        <h2 className='card__title'>{title}</h2>
        <p className='card__date'>{date}</p>
        <p className='card__price'>{price}</p>
        <p className='card__descr'>{descr}</p>
      </a>
    </div>
  );
}
