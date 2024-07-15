import React, { useState } from 'react';

function FilterForm({ applyFilters }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterApply = () => {
    // Convert prices to numbers for comparison (if needed)
    const filters = {
      minPrice: parseInt(minPrice),
      maxPrice: parseInt(maxPrice),
    };

    // Apply filters
    applyFilters(filters);
  };

  return (
    <div className="filter-form">
      <input
        type="text"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilterApply}>Apply Filters</button>
    </div>
  );
}

export default FilterForm;
