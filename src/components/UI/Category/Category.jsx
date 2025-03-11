import React from 'react'
import './Category.scss'

export default function Category({ link, text }) {
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