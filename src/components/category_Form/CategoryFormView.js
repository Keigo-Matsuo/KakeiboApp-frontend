import React from 'react';
import './categoryForm.css';

const CategoryFormView = ({ formData, handleChange, handleSubmit, categories }) => {
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

      <h2>カテゴリ一覧</h2>
      <table className="category-table">
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.categoryId}>
              <td>{category.categoryId}</td>
              <td>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryFormView;