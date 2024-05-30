import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import KakeiboFormView from './KakeiboFormView';

const KakeiboForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    date: '',
    categoryId: '',
    memo: ''
  });

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/payments/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setFormData({
        amount: '',
        date: '',
        categoryId: '',
        memo: ''
      });
      navigate('/home');
    } catch (error) {
      console.error('登録エラー:', error);
      alert('登録中にエラーが発生しました。');
    }
  };

  return (
    <KakeiboFormView
      formData={formData}
      categories={categories}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default KakeiboForm;