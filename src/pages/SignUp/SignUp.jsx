import React, { useState } from 'react';
import './SignUp.scss'; // Importing the stylesheet
import { useNavigate } from 'react-router';

export default function SignUp() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });


  const [message, setMessage] = useState("");
  const navigate = useNavigate();  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


  const handleSubmit = (e) => {
    e.preventDefault();


    if (formData.username.length < 3) {
      setMessage("Username must be at least 3 characters long");
      return;
    }


    if (!validateEmail(formData.email)) {
      setMessage("Please enter a valid email");
      return;
    }


    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    setMessage("Registration successful!");

    navigate('/'); 
  };

  return (
    <div className="signup__container">
      <h2 className="signup__heading">Registration</h2>
      <form className="signup__form" onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            type="text"
            name="username"
            className="form__input"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <input
            type="email"
            name="email"
            className="form__input"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <input
            type="password"
            name="password"
            className="form__input"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit__btn">Sign Up</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}
