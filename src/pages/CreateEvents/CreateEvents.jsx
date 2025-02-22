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
  const [tag, setTag] = useState();
  const [events, setEvents] = useState([]);

  const [week, setWeek] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const handleSelect = (week) => {
    setWeek(week);
    setIsOpen(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const savedImage = localStorage.getItem('userImage');
    if (savedImage) {
      setImage(savedImage);
    }
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
      week: week,
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
      <div>
        <div className="input__wrapper">
          <h2 className="form-heading">Create Event</h2>

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

          <input
            type="text"
            className="input-field"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            placeholder="Event Title"
          />
          
          <input
            type="text"
            className="input-field"
            placeholder="Week"
            value={week}
            onClick={() => setIsOpen(!isOpen)}
          />

          <input
            type="time"
            className="input-field"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
          />

          <input
            type="number"
            className="input-field"
            value={inputPrice}
            onChange={(e) => setInputPrice(e.target.value)}
            placeholder="Event Price"
          />

          <input
            type="text"
            className="input-field"
            value={inputDescr}
            onChange={(e) => setInputDescr(e.target.value)}
            placeholder="Event Description"
          />

          <input
            type="text"
            className="input-field"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            placeholder="City"
          />

          <input
            type="file"
            className="input-file"
            accept="*image/*"
            onChange={handleImageUpload}
          />

          {image && <img src={image} alt="Event" className="create__image" />}

          <button onClick={handleClick} className="submit-button">
            Create Event
          </button>
          
        </div>
        <Footer />
      </div>
    
  );
}
