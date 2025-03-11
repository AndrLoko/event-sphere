import React from 'react';
import './Card.scss';

import TagGoing from '../tag/TagGoing';
// import TagSales from '../tag/TagSales';

const Card = ({ title, week, time, price, descr, img, tag = <TagGoing /> }) => (
  <div className='card'>
    <a className="card__wrapper">
      <img src={img} alt="" className="card__img" />
      <div className="card__tag">{tag}</div>
      <h2 className='card__title'>{title}</h2>
      <p className='card__date'>{week} • {time}</p>
      <p className='card__price'>From ${price}</p>
      <p className='card__descr'>{descr}</p>
    </a>
  </div>
);

export default Card;
