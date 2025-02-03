import React, { useState } from "react";
import "./Location.scss";
import locationIcon from "../../../public/location-arrow.svg";

export default function Location() {
  const [selectedCity, setSelectedCity] = useState(""); 
  const [isOpen, setIsOpen] = useState(false);

  const cities = ["Los Angeles", "Miami", "New York"];

  const handleSelect = (city) => {
    setSelectedCity(city);
    setIsOpen(false); 
  };

  return (
    <div className="location">
      <form>
        <label htmlFor="cities" className="select">
          Browsing events in
        </label>
        <div className="select-wrapper" onClick={() => setIsOpen(!isOpen)}>
          <img src={locationIcon} alt="Location Icon" className="select-icon" />
          <div className={`select-choice ${isOpen ? "open" : ""}`}>
            {cities.map((city, index) => (
              <div
                key={index}
                className="select-item"
                onClick={() => handleSelect(city)}
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </form>
      <input
        type="text"
        className="location__input"
        placeholder="Choose a location"
        value={selectedCity}
        readOnly
      />
    </div>
  );
}
