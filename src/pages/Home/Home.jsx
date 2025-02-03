import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider.jsx'
import Category from '../../components/UI/category/category.jsx'

export default function Home() {
  return (
    <>
        <Slider />
        <div className="categories__wrapper">
            <div className="container">
                <div className="grid__categories">
                    <Category link="../../../public/SVG.png" text="Music"/>
                    <Category link="../../../public/SVG-1.png" text="Nightlife"/>
                    <Category link="../../../public/SVG-2.png" text="Performing & Visual Arts"/>
                    <Category link="../../../public/SVG-3.png" text="Holidays"/>
                    <Category link="../../../public/SVG-4.png" text="Dating"/>
                    <Category link="../../../public/SVG-5.png" text="Hobbies"/>
                    <Category link="../../../public/SVG-6.png" text="Business"/>
                    <Category link="../../../public/SVG-7.png" text="Food & Drink"/>
                </div>
            </div>
        </div>
    </>
  )
}
