import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider.jsx'
import Category from '../../components/UI/category/category.jsx'
import Location from '../../components/Location/Location.jsx'
import Card from '../../components/UI/card//Card.jsx'

export default function Home() {
  return (
    <>
        <Slider />
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
                <Location />
                <Card />
            </div>

    </>
  )
}
