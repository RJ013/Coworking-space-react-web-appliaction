import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/signin.css';

const Signin = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      setMessage(response.data.message);
      console.log(response.data.message);
      setAuth('true'); // Update the auth state in the parent component
      navigate('/admin');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="signin-form">
      
      <h2>Login</h2>
     
      <div className="signin-form-group">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /></div>
       <div className="signin-form-group">
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /></div>
      <button onClick={handleLogin}>Login</button>
      <p className="signin-message">{message}</p>
    </div>
  );
};

export default Signin;