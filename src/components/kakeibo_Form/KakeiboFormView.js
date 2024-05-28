import React from 'react';
import './kakeiboForm.css';

const KakeiboFormView = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>記録する</h2>
      <form onSubmit={handleSubmit}>

        <div className='price'>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className='content'>
          <div className='date'>
            <label>Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>

          <div className='category'>
            <label>Category:</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} required />
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
