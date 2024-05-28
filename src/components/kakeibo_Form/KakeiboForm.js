import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KakeiboFormView from './KakeiboFormView';

const KakeiboForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    category: '',
    price: '',
    memo: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/expense/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data submitted successfully', data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error submitting data', error);
      });
  };

  return (
    <KakeiboFormView
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default KakeiboForm;
