import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateEvents() {
  const [inputTitle, setInputTitle] = useState(""); 
  const [inputDate, setInputDate] = useState(""); 
  const [inputPrice, setInputPrice] = useState("");
  const [inputDescr, setInputDescr] = useState("");

  const navigate = useNavigate();  


  function handleClick() {
    const newEvent = {
      id: Date.now(),
      title: inputTitle,
      date: inputDate,
      price: inputPrice,
      descr: inputDescr
    };


    let events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(newEvent);
    localStorage.setItem("events", JSON.stringify(events));


    setInputTitle("");
    setInputDate("");
    setInputPrice("");
    setInputDescr("");


    navigate('/');
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
