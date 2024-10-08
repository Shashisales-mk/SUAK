// ResetPassword.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/admin/reset-password/${token}`, { password });
      setMessage('Password reset successful');
    } catch (err) {
      setMessage('Error resetting password');
    }
  };

  return (
    <form onSubmit={handleReset}>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ResetPassword;
