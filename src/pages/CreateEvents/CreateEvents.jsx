import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx';
import './CreateEvents.scss';

export default function CreateEvents() {
  const [inputTitle, setInputTitle] = useState(""); 
  const [inputTime, setInputTime] = useState(""); 
  const [inputPrice, setInputPrice] = useState("");
  const [inputDescr, setInputDescr] = useState("");
  const [inputCity, setInputCity] = useState(""); 
  
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState(""); 
  const [events, setEvents] = useState([]);

  const [week, setWeek] = useState(""); 
  const [isOpen, setIsOpen] = useState(false); // Включаем по умолчанию закрыто

  const weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const handleSelect = (week) => {
    setWeek(week);
    setIsOpen(false); 
  };

  const navigate = useNavigate();  

  useEffect(() => {
    // Считываем события из localStorage
    const eventsFromStorage = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(eventsFromStorage);
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setImage(base64Image);
        localStorage.setItem("userImage", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    const newEvent = {
      id: Date.now(),
      img: image,
      tag: tag,
      title: inputTitle,
      time: inputTime,
      week: week,
      price: inputPrice,
      descr: inputDescr,
      city: inputCity,
    };

    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    // Очистка формы
    setInputTitle("");
    setInputTime("");
    setInputPrice("");
    setInputDescr("");
    setInputCity("");
    setImage(null);
    setTag("");
    setWeek("");
    setIsOpen(false);

    // Переход на главную страницу
    navigate('/');
  };

  return (
    <div className='events'>
      <img src="/create-event.png" className='events__img' alt="" />
      <div className="input__wrapper">
        <h2 className='input__title'>Create Event</h2>

        {/* Image Upload */}
        <div className="image-upload-card">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
          />
          {image && <img src={image} alt="Event" className="create__image" />}
        </div>

        {/* Week Selection */}
        <div className="create-wrapper" onClick={() => setIsOpen(!isOpen)}>
          <div className={`create-choice ${isOpen ? "open" : ""}`}>
            {weeks.map((week, index) => (
              <div
                key={index}
                className="create-item"
                onClick={() => handleSelect(week)}
              >
                {week}
              </div>
            ))}
          </div>
        </div>

        {/* Event Title Input */}
        <div className="input-card">
          <input 
            type="text" 
            value={inputTitle} 
            onChange={(e) => setInputTitle(e.target.value)}  
            placeholder="Event Title"
          />
        </div>

        {/* Week Input */}
        <div className="input-card">
          <input
            type="text"
            className="create__input"
            placeholder="Week"
            value={week}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* Event Time Input */}
        <div className="input-card">
          <input 
            type="time" 
            value={inputTime} 
            onChange={(e) => setInputTime(e.target.value)} 
          />
        </div>

        {/* Event Price Input */}
        <div className="input-card">
          <input 
            type="number" 
            value={inputPrice} 
            onChange={(e) => setInputPrice(e.target.value)} 
            placeholder="Event Price"
          />
        </div>

        {/* Event Description Input */}
        <div className="input-card">
          <textarea 
            value={inputDescr} 
            onChange={(e) => setInputDescr(e.target.value)} 
            placeholder="Event Description"
          />
        </div>

        {/* Event City Input */}
        <div className="input-card">
          <input 
            type="text" 
            value={inputCity} 
            onChange={(e) => setInputCity(e.target.value)}  
            placeholder="City"
          />
        </div>

        {/* Create Event Button */}
        <button onClick={handleClick} className="submit-button">Create Event</button>
      </div>
      <div>
    </div>
    </div>

  );
}
