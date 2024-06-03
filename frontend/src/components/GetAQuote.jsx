import React, { useState } from "react";
import "./css/GetAQuote.css";

const GetAQuote = () => {
    const [WhatAreYouInterestedIn, setWhatAreYouInterestedIn] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [WhenDoYouNeedToMove, setWhenDoYouNeedToMove] = useState("");
    const [HowManyPeople, setHowManyPeople] = useState("");
    const [HowLongFor, setHowLongFor] = useState("");
    const [CompanyName, setCompanyName] = useState("");
    const [CompanySize, setCompanySize] = useState("");
    const [errors, setErrors] = useState({});
    const [responseMessage, setResponseMessage] = useState("");

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!WhatAreYouInterestedIn) {
            errors.WhatAreYouInterestedIn = "required field";
            isValid = false;
        }

        if (!name) {
            errors.name = "Name is required";
            isValid = false;
        }

        if (!email) {
            errors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
            isValid = false;
        }

        if (!phone) {
            errors.phone = "Phone number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Phone number is invalid (10 digits)";
            isValid = false;
        }

        if (!WhenDoYouNeedToMove) {
            errors.WhenDoYouNeedToMove = "required field";
            isValid = false;
        }

        if (!HowManyPeople) {
            errors.HowManyPeople = "required field";
            isValid = false;
        }

        if (!HowLongFor) {
            errors.HowLongFor = "required field";
            isValid = false;
        }

        if (!CompanyName) {
            errors.CompanyName = "Company Name is required";
            isValid = false;
        }

        if (!CompanySize) {
            errors.CompanySize = "required field";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const collectData = async (e) => {
        e.preventDefault();  // Prevent default form submission
        if (validateForm()) {
            const data = {
                WhatAreYouInterestedIn, name, email, phone, WhenDoYouNeedToMove, HowManyPeople, HowLongFor, CompanyName, CompanySize
            };
            console.warn(data);

            try {
                let result = await fetch("http://localhost:5000/form", {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                let response = await result.json();
                console.warn(response);

                if (response.success) {
                    setResponseMessage("Email sent successfully.");
                } else {
                    setResponseMessage("An error occurred while sending the email.");
                }

                // Reset form fields
                setWhatAreYouInterestedIn("");
                setName("");
                setEmail("");
                setPhone("");
                setWhenDoYouNeedToMove("");
                setHowManyPeople("");
                setHowLongFor("");
                setCompanyName("");
                setCompanySize("");
            } catch (error) {
                console.error("Error:", error);
                setResponseMessage("An error occurred while sending the email.");
            }
        }
    };

    return (
        <div>
             <div className="header">
        <h1>
Be Part of a Vibrant Community
</h1>
<p>Seeking for a workspace at KIF?<br/>
Fill out the form to explore our co-working spaces</p>
      </div>
        
        <div className="Get-a-quote">
            <h1>Join KIF Today!</h1>
            <form onSubmit={collectData}>
                <select className="inputBox" value={WhatAreYouInterestedIn} onChange={(e) => setWhatAreYouInterestedIn(e.target.value)}>
                    <option value="">What are you interested in?</option>
                    <option value="OfficeSpace">Office Space</option>
                    <option value="Coworking">Coworking</option>
                    <option value="VirtualOffices">Virtual Offices</option>
                    <option value="Membership">Membership</option>
                    <option value="MeetingRooms">Meeting Rooms</option>
                    <option value="Coworking  Space for 1/2 days">Coworking  Space for 1/2 days </option>
                    <option value="Space to launch your Statup product">Space to launch your Statup product</option>
                    <option value="Other">Other</option>
                </select>
                {errors.WhatAreYouInterestedIn && <p className="error">{errors.WhatAreYouInterestedIn}</p>}

                <input className="inputBox" type="text" placeholder="Full Name"
                    value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name && <p className="error">{errors.name}</p>}

                <input className="inputBox" type="text" placeholder="Email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p className="error">{errors.email}</p>}

                <input className="inputBox" type="text" placeholder="Enter Phone Number"
                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <select className="inputBox" value={WhenDoYouNeedToMove} onChange={(e) => setWhenDoYouNeedToMove(e.target.value)}>
                    <option value="">When do you need to move?</option>
                    <option value="Immediately">Immediately</option>
                    <option value="NextMonth">Next month</option>
                    <option value="In-More-Than-1-Month">In More Than 1 Month</option>
                    <option value="No-Date-In-Mindship">No Date In Mind</option>
                </select>
                {errors.WhenDoYouNeedToMove && <p className="error">{errors.WhenDoYouNeedToMove}</p>}

                <select className="inputBox" value={HowManyPeople} onChange={(e) => setHowManyPeople(e.target.value)}>
                    <option value="">How many people?</option>
                    <option value="1-5-People">1-5 People</option>
                    <option value="6-99-People">6-99 People</option>
                    <option value="100+-People">100+ People</option>
                </select>
                {errors.HowManyPeople && <p className=".error">{errors.HowManyPeople}</p>}

                <select className="inputBox" value={HowLongFor} onChange={(e) => setHowLongFor(e.target.value)}>
                    <option value="">How long for?</option>
                    <option value="A-Day">A Day</option>
                    <option value="Less-than-a-month">Less than a month</option>
                    <option value="Up-to-a-year">Up to a year</option>
                    <option value="More-than-a-year">More than a year</option>
                </select>
                {errors.HowLongFor && <p className="error">{errors.HowLongFor}</p>}

                <input className="inputBox" type="text" placeholder="Company Name"
                    value={CompanyName} onChange={(e) => setCompanyName(e.target.value)} />
                {errors.CompanyName && <p className="error">{errors.CompanyName}</p>}

                <select className="inputBox" value={CompanySize} onChange={(e) => setCompanySize(e.target.value)}>
                    <option value="">Company size</option>
                    <option value="1-5-People">1-5 People</option>
                    <option value="6-99-People">6-99 People</option>
                    <option value="100-300-People">100-300 People</option>
                    <option value="300+-People">300+ People</option>
                </select>
                {errors.CompanySize && <p className="error">{errors.CompanySize}</p>}

                <button className="appButton" type="submit">Request Your Quote</button>
                {responseMessage && <p className="response">{responseMessage}</p>}
            </form>
        </div>
        </div>
    );
};

export default GetAQuote;

