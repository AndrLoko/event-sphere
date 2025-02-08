import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateEvents() {
  const [inputTitle, setInputTitle] = useState(""); 
  const [inputDate, setInputDate] = useState(""); 
  const [inputPrice, setInputPrice] = useState("");
  const [inputDescr, setInputDescr] = useState("");
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();  

  // Загружаем события из localStorage при монтировании
  useEffect(() => {
    const eventsFromStorage = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(eventsFromStorage);
  }, []);

  function handleClick() {
    const newEvent = {
      id: Date.now(),
      title: inputTitle,
      date: inputDate,
      price: inputPrice,
      descr: inputDescr
    };

    const updatedEvents = [...events, newEvent]; // Добавляем новое событие в массив
    setEvents(updatedEvents); // Обновляем состояние
    localStorage.setItem("events", JSON.stringify(updatedEvents)); // Записываем в localStorage

    // Очищаем инпуты
    setInputTitle("");
    setInputDate("");
    setInputPrice("");
    setInputDescr("");

    navigate('/'); // Переход на главную
  }

  return (
    <div className="input__wrapper">
      <input 
        type="text" 
        value={inputTitle} 
        onChange={(e) => setInputTitle(e.target.value)}  
        placeholder="Event Title"
      />
      <input 
        type="date" 
        value={inputDate} 
        onChange={(e) => setInputDate(e.target.value)} 
      />
      <input 
        type="number" 
        value={inputPrice} 
        onChange={(e) => setInputPrice(e.target.value)} 
        placeholder="Event Price"
      />
      <input 
        type="text" 
        value={inputDescr} 
        onChange={(e) => setInputDescr(e.target.value)}  
        placeholder="Event Description"
      />
      <button onClick={handleClick}>Создать событие</button>
    </div>
  );
}
