import React, { useState, useEffect } from 'react';
import './Home.scss';
import '../../styles/reset.scss';
import Slider from '../../components/Slider/Slider';
import Category from '../../components/UI/Category/Category';
import Location from '../../components/Location/Location';
import Card from '../../components/UI/card/Card.jsx';
import Footer from '../../components/Footer/Footer';
import defaultEvents from '../../constants/events.js';

const categories = [
  { link: 'SVG.png', text: 'Music' },
  { link: 'SVG-1.png', text: 'Nightlife' },
  { link: 'SVG-2.png', text: 'Performing & Visual Arts' },
  { link: 'SVG-3.png', text: 'Holidays' },
  { link: 'SVG-4.png', text: 'Dating' },
  { link: 'SVG-5.png', text: 'Hobbies' },
  { link: 'SVG-6.png', text: 'Business' },
  { link: 'SVG-7.png', text: 'Food & Drink' },
];

export default function Home() {
  const [events, setEvents] = useState([]); // События из localStorage
  const [filteredEvents, setFilteredEvents] = useState([]); // Фильтруемые события
  const [selectedCity, setSelectedCity] = useState(""); // Выбранный город

  useEffect(() => {
    // Загружаем события из localStorage
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
    setFilteredEvents(storedEvents); // Изначально показываем все добавленные пользователем события
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);

    // Фильтруем события по выбранному городу
    const filtered = events.filter((event) => event.city === city);
    setFilteredEvents(filtered);
  };

  return (
    <main>
      <Slider />
      <div className="container">
        <div className="grid__categories">
          {categories.map((category, index) => (
            <Category key={index} link={`/${category.link}`} text={category.text} img={category.image} />
          ))}
        </div>

        {/* Передаем handleCitySelect в компонент Location */}
        <Location onCitySelect={handleCitySelect} />

        {/* Отображаем дефолтные события */}
        <div className="grid__card">
          {defaultEvents.map((event) => (
            <Card key={event.id} title={event.title} week={event.week} time={event.time} price={event.price} descr={event.description} img={event.image} />
          ))}
        </div>

        {/* Отображаем события, добавленные пользователем */}
        <div className="grid__card">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Card key={event.id} {...event} />
            ))
          ) : (
            <p>No events found for the selected location.</p>
          )}
        </div>
      </div>
    </main>
  );
}
