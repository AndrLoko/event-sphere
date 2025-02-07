import React, { useState, useEffect } from 'react';
import './Home.scss';
import '../../styles/reset.scss';
import Slider from '../../components/Slider/Slider';
import Category from '../../components/UI/Category/Category';
import Location from '../../components/Location/Location';
import Card from '../../components/UI/card/Card';
import Footer from '../../components/Footer/Footer';
import CreateEvents from '../CreateEvents/CreateEvents'; // Импортируем компонент CreateEvents

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
  const [events, setEvents] = useState([]);

  // Загружаем события из localStorage
  useEffect(() => {
    const eventsFromStorage = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(eventsFromStorage);
  }, []); // Пустой массив зависимостей, чтобы загрузить данные только один раз при монтировании

  return (
    <>
      <Slider />
      <div className="container">
        <div className="grid__categories">
          {categories.map((category, index) => (
            <Category key={index} link={`../../../public/${category.link}`} text={category.text} />
          ))}
        </div>

        <Location />
        
        {/* Добавляем компонент CreateEvents с пропсом onEventCreate */}

        <div className="grid__card">
          {/* Отображаем созданные события */}
          {events.map(event => (
            <Card key={event.id} {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
