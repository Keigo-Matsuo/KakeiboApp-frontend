import React from 'react';
import './categoryForm.css';

const CategoryFormView = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>カテゴリを登録する</h2>
      <form onSubmit={handleSubmit}>
        <div className='category-name'>
          <label>Category Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <button type="submit" className='submit'>登録する！</button>
      </form>
    </div>
  );
};

export default CategoryFormView;