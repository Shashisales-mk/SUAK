import React, { useState } from 'react';
import './popup.css';

const PopForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const isProduction = window.location.hostname === 'suak.in';
    const baseURL = isProduction ? 'https://suak.in/' : 'http://localhost:5000/';
  
    try {
      const response = await fetch(`${baseURL}api/get-started`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
  
      // Check if the response is JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const result = await response.json();
        if (result.success) {
          alert('Thank you for reaching out to us!');
          setFormData({
            name: '',
            contactNumber: '',
            email: '',
            message: '',
          });
          onClose();
        } else {
          alert('There was an error.');
        }
      } else {
        console.error('Response is not JSON:', response);
        alert('There was an error processing your request.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  };
  


  return (
    <div className="popup-form">
      <div className="form-container">
        <span className="close-icon" onClick={onClose}>&times;</span>
        <h2>Connect With Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopForm;
