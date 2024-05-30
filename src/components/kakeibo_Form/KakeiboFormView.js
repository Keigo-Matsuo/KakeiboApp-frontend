// src/components/KakeiboFormView.js

import React from 'react';
import './kakeiboForm.css';

const KakeiboFormView = ({ formData, categories, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>記録する</h2>
      <form onSubmit={handleSubmit}>
        <div className='price'>
          <label>Price:</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        </div>

        <div className='content'>
          <div className='date'>
            <label>Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>

          <div className='category'>
            <label>Category:</label>
            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
            >
              <option value="">選択してください</option>
              {categories.map(category => (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <a href='/settings/category'>カテゴリの新規追加はこちら</a>
          </div>
        </div>

        <div className='memo'>
          <p>memo:</p>
          <textarea name="memo" value={formData.memo} onChange={handleChange} />
        </div>
        <button type="submit" className='submit'>登録する！</button>
      </form>
    </div>
  );
};

export default KakeiboFormView;
