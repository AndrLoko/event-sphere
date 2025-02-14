import React, { useState } from 'react';
import './Slider.scss';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    '/public/Slide-1.jpg',
    '/public/Slide-2.jpeg',
    '/public/Slide-3.jpg',
  ];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <img
        src={slides[currentIndex]}
        className="slides"
        alt={`Slide ${currentIndex + 1}`}
      />
      <div className="controls">
        <button onClick={prevSlide} className="controls__button">
          <img
            src="../../../public/arrow.png"
            className="arrow-left"
            alt="left arrow"
          />
        </button>
        <button onClick={nextSlide} className="controls__button">
          <img
            src="../../../public/arrow.png"
            className="arrow-right"
            alt="right arrow" 
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
