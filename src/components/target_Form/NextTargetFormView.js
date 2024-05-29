import React from 'react';
import { LineGraph } from '../graph/Line';

const NextTargetFormView = ({ formData, handleChange, handleSubmit, kakeiboData }) => {
  return (
    <>
      <div className="App" style={{  width: '60%' }}>
        <LineGraph key={JSON.stringify(kakeiboData)} data={kakeiboData} />
      </div>

      <div>
        <h2>来月の目標</h2>
        <p>データベースの項目（入力項目）変える必要あり</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div>
            <label>Category:</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} required />
          </div>
          <div>
            <label>Price:</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div>
            <label>memo:</label>
            <textarea name="memo" value={formData.memo} onChange={handleChange} />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default NextTargetFormView;
