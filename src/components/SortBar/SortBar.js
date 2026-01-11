import React from 'react';
import './SortBar.css';

const SortBar = ({ sortBy, onSortChange, productCount }) => {
  return (
    <div className="sort-bar">
      <div className="sort-bar-content">
        <div className="product-count">
          <span>{productCount} {productCount === 1 ? 'product' : 'products'} found</span>
        </div>
        <div className="sort-options">
          <label className="sort-label">Sort by:</label>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortBar;

