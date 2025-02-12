import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx'
import './CreateEvents.scss'

export default function CreateEvents() {
  const [inputTitle, setInputTitle] = useState(""); 
  const [inputTime, setInputTime] = useState(""); 
  const [inputPrice, setInputPrice] = useState("");
  const [inputDescr, setInputDescr] = useState("");
  const [inputCity, setInputCity] = useState(""); 
  
  const [image, setImage] = useState(null)
  const [tag, setTag] = useState() 
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();  

  useEffect (() => {
    const savedImage = localStorage.getItem('userImage')
    if (savedImage) {
      setImage(savedImage)
    }
  }, [])


  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64Image = reader.result;
        setImage(base64Image)
        localStorage.setItem("userImage", base64Image)
      };
      reader.readAsDataURL(file)
    }
  }


  useEffect(() => {
    const eventsFromStorage = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(eventsFromStorage);
  }, []);

  function handleClick() {
    const newEvent = {
      id: Date.now(),
      img: image,
      tag: tag,
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
        type="file" 
        accept='*image/*' 
        onChange={handleImageUpload} 
      />
      {image && <img src={image} alt="" className='create__image' />}
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
