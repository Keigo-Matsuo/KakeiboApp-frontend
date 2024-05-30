import React, { useState, useEffect } from 'react';
import CategoryFormView from './CategoryFormView'; // 修正: コンポーネント名を修正
import './categoryForm.css'; // 必要に応じてCSSをインポート

const CategoryForm = () => {
  const [formData, setFormData] = useState({
    name: ''
  });

  const [categories, setCategories] = useState([]);

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
      setFormData({
        name: ''
      });
      window.location.href = '/settings/category';
    } catch (error) {
      console.error('登録エラー:', error);
      alert('登録中にエラーが発生しました。');
    }
  };

  return (
    <CategoryFormView
      formData={formData}
      categories={categories}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default CategoryForm;