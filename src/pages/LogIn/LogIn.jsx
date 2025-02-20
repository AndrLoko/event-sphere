import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function LogIn() {
  // Form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // Message for the user
  const [message, setMessage] = useState("");
  const navigate = useNavigate();  

  // Handler for form value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Email validation using regular expression
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!validateEmail(formData.email)) {
      setMessage("Please enter a valid email");
      return;
    }

    // Password validation
    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      return;
    }

    // Simulating registration (saving data to LocalStorage)
    localStorage.setItem("user", JSON.stringify(formData));
    setMessage("Registration successful!");

    navigate('/'); 
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Login</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}
