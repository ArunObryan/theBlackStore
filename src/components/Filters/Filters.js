import React from 'react';
import './Filters.css';

const Filters = ({ filters, onFilterChange, onClearFilters }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const fabrics = ['Cotton', 'Silk', 'Wool', 'Polyester', 'Linen', 'Cashmere'];
  const colors = ['Black', 'Charcoal', 'Navy Black', 'Jet Black'];

  const hasActiveFilters = 
    filters.sizes.length > 0 || 
    filters.fabrics.length > 0 || 
    filters.colors.length > 0;

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h2 className="filters-title">Filters</h2>
        {hasActiveFilters && (
          <button className="clear-filters-btn" onClick={onClearFilters}>
            Clear All
          </button>
        )}
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Sizes</h3>
        <div className="filter-options">
          {sizes.map((size) => (
            <label key={size} className="filter-option">
              <input
                type="checkbox"
                checked={filters.sizes.includes(size)}
                onChange={() => onFilterChange('sizes', size)}
              />
              <span className="filter-label">{size}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Fabrics</h3>
        <div className="filter-options">
          {fabrics.map((fabric) => (
            <label key={fabric} className="filter-option">
              <input
                type="checkbox"
                checked={filters.fabrics.includes(fabric)}
                onChange={() => onFilterChange('fabrics', fabric)}
              />
              <span className="filter-label">{fabric}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Colors</h3>
        <div className="filter-options">
          {colors.map((color) => (
            <label key={color} className="filter-option">
              <input
                type="checkbox"
                checked={filters.colors.includes(color)}
                onChange={() => onFilterChange('colors', color)}
              />
              <span className="filter-label">{color}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;

