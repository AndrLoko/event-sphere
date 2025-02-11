import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx'

export default function CreateEvents() {
  const [inputFile, setInputFile] = useState("")
  const [inputTitle, setInputTitle] = useState(""); 
  const [inputTime, setInputTime] = useState(""); 
  const [inputPrice, setInputPrice] = useState("");
  const [inputDescr, setInputDescr] = useState("");
  const [inputCity, setInputCity] = useState(""); 
  
  const [image, setImage] = useState('../../../public/Card-1.png')
  const [tag, setTag] = useState() 
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();  


  useEffect(() => {
    const eventsFromStorage = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(eventsFromStorage);
  }, []);

  function handleClick() {
    const newEvent = {
      id: Date.now(),
      tag: tag,
      img: image,
      title: inputTitle,
      time: inputTime,
      price: inputPrice,
      descr: inputDescr,
      city: inputCity,
    };

    const updatedEvents = [...events, newEvent]; 
    setEvents(updatedEvents); 
    localStorage.setItem("events", JSON.stringify(updatedEvents)); 


    setInputTitle("");
    setInputTime("");
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
        type="time" 
        value={inputTime} 
        onChange={(e) => setInputTime(e.target.value)} 
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
      <input 
        type="text" 
        value={inputCity} 
        onChange={(e) => setInputCity(e.target.value)}  
        placeholder="City"
      />
      <button onClick={handleClick}>Создать событие</button>

      <Footer />
    </div>
  );
}
