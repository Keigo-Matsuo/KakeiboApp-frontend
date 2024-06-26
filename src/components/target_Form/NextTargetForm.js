import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NextTargetFormView from './NextTargetFormView';
import { useKakeiboData } from '../../hooks/useKakeiboData';

const NextTargetForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    category: '',
    price: '',
    memo: ''
  });

  const navigate = useNavigate();
  const kakeiboData = useKakeiboData();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/payments/new', { // URL変える必要あり
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data submitted successfully', data);
        navigate('/home');
      })
      .catch(error => {
        console.error('Error submitting data', error);
      });
  };

  return (
    <NextTargetFormView
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      kakeiboData={kakeiboData}
    />
  );
};

export default NextTargetForm;
