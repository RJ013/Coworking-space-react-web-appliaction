import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!name) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!email) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }

        if (!message) {
            errors.message = 'Message is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const collectData = async () => {
        if (validateForm()) {
            try {
                await axios.post('https://form2-7uno.onrender.com/send-email', { name, email, message });
                console.log('Email sent successfully');
                // Add any further actions you want to take after sending the email
            } catch (error) {
                console.error('Error sending email:', error);
                // Handle error if email sending fails
            }
        }
    };

    return (
        <div className="register">
            <h1>Contact Us</h1>
            <input className="inputBox" type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            {errors.name && <p className="error">{errors.name}</p>}
            <input className="inputBox" type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className="error">{errors.email}</p>}
            <input className="inputBox" type="text" placeholder="Enter Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            {errors.message && <p className="error">{errors.message}</p>}
            <button className="appButton" onClick={collectData}>Submit</button>
        </div>
    );
};

export default MyForm;
