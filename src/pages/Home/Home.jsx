import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider.jsx'
import Category from '../../components/UI/category/category.jsx'

export default function Home() {
  return (
    <>
        <Slider />
        <div className="container">
            <div className="grid__categories">
                <Category link="../../../public/SVG.png" />
                <Category link="../../../public/SVG-1.png" />
                <Category link="../../../public/SVG-2.png" />
                <Category link="../../../public/SVG-3.png" />
                <Category link="../../../public/SVG-4.png" />
                <Category link="../../../public/SVG-5.png" />
                <Category link="../../../public/SVG-6.png" />
                <Category link="../../../public/SVG-7.png" />
            </div>
        </div>
    </>
  )
}
