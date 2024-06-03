import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/datafetcher.css';

function DataFetcher() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getallform');
        setForms(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching forms:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownloadCSV = () => {
    const csvData = generateCSV(forms);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'forms.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const generateCSV = forms => {
    const header = 'S.no.,Name,Email,Phone Number,What are you interested in?,When do you need to move?,How many people?,How long for?,Company Name,Company size\n';
    const rows = forms.map((form, index) => {
      return `${index + 1},${form.name},${form.email},${form.phone},${form.WhatAreYouInterestedIn},${form.WhenDoYouNeedToMove},${form.HowManyPeople},${form.HowLongFor},${form.CompanyName},${form.CompanySize}\n`;
    });
    return header + rows.join('');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <h1>Forms</h1>
      </div>
      <div>
      <button className="data-button" onClick={handleDownloadCSV}>Download CSV file</button>
      </div>
      <table className="form-table">
        <thead>
          <tr>
            <th>S.no.</th>
            <th>What are you interested in?</th>
            <th>Name</th>
            <th>Email</th>
            <th>phone no.</th>
            <th>When do you need to move?</th>
            <th>How many people?</th>
            <th>How long for?</th>
            <th>Company Name</th>
            <th>Company size</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form, index) => (
            <React.Fragment key={form._id}>
              <tr>
                <td>{index + 1}</td>
                <td>{form.WhatAreYouInterestedIn}</td>
                <td>{form.name}</td>
                <td>{form.email}</td>
                <td>{form.phone}</td>
                <td>{form.WhenDoYouNeedToMove}</td>
                <td>{form.HowManyPeople}</td>
                <td>{form.HowLongFor}</td>
                <td>{form.CompanyName}</td>
                <td>{form.CompanySize}</td>
              </tr>
              <tr className="divider-row"><td colSpan="10"></td></tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataFetcher;