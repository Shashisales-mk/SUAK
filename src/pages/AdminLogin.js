import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // useNavigate for redirect

  const isProduction = window.location.hostname === 'suak.in';
  const baseURL = isProduction ? 'https://suak.in/' : 'http://localhost:5000/';

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseURL}api/admin/login`, { email, password });
      
      localStorage.setItem('token', res.data.token);
      setMessage('Login successful!');

      // Redirect to Admin Panel
      navigate('/admin-panel');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <>
    <ScrollToTop></ScrollToTop>
    <Navbar></Navbar>
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
    <div className="bor-lin pst"></div>
    <Footer></Footer>
    </>
  );
};

// Inline CSS for styling
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    // backgroundColor: '#f4f4f9',
    padding: '0 20px',
  },
  form: {
    backgroundColor: 'rgb(243 241 241)',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    padding: '15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    transition: 'border-color 0.3s ease',
    outline: 'none',
  },
  button: {
    padding: '15px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  message: {
    textAlign: 'center',
    color: '#e74c3c',
    fontSize: '14px',
  },
};

export default AdminLogin;
