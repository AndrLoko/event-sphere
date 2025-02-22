import React, { useState } from "react";
import { useNavigate } from "react-router";
import './Login.scss'

export default function LogIn() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData; 

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      return;
    }

    const usersString = localStorage.getItem("user");
    const user = usersString ? JSON.parse(usersString) : [];


    if (user && user.password === password) {
      setMessage("Welcome!");
      localStorage.setItem("loggedUser", JSON.stringify(user)); 
      navigate("/");
    } else {
      setMessage("Invalid email or password!");
    }
  };

  return (
    <div className="login__container">
      <h2 className="login__heading">Login</h2>
      <form className="login__form" onSubmit={handleSubmit}>
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
        <button type="submit" className="submit__btn">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}
