import React from 'react'
import './category.scss'

export default function category({ link, text }) {
  return (
    <>
        <div className="category">
            <button className="category">
                <img src={link} alt="" className="category__icon" />
            </button>
            <p className='category__text'>{text}</p>
        </div>
    </>
  )
}
