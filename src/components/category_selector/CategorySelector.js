import React from 'react';

const CategorySelector = ({ selectedCategories, setSelectedCategories, categories }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedCategories(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  return (
    <div>
      <h3>Select Categories</h3>
      {categories.map(category => (
        <label key={category}>
          <input
            type="checkbox"
            value={category}
            checked={selectedCategories.includes(category)}
            onChange={handleChange}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default CategorySelector;
