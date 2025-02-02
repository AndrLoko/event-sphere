import React from 'react'
import './category.scss'

export default function category({ link }) {
  return (
    <>
        <button className="category">
            <img src={link} alt="" className="category__icon" />
        </button>
    </>
  )
}
