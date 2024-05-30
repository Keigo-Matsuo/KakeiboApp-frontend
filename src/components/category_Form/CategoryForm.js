import React, { useState } from 'react';
import CategoryFormView from './CategoryFormView';

const CategoryForm = () => {
  const [formData, setFormData] = useState({
    name: ''
  });

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
      const response = await fetch('http://localhost:8080/api/category/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert('カテゴリが登録されました！');
      setFormData({ name: '' });
    } catch (error) {
      console.error('登録エラー:', error);
      alert('登録中にエラーが発生しました。');
    }
  };

  return (
    <CategoryFormView
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default CategoryForm;