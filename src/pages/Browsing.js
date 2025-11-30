import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TitleCard from '../components/TitleCard/TitleCard';
import Navigation from '../components/Navigation/Navigation';
import Filters from '../components/Filters/Filters';
import LazyProductCard from '../components/LazyProductCard/LazyProductCard';
import SortBar from '../components/SortBar/SortBar';
import Footer from '../components/Footer/Footer';
import { productsData } from '../data/products';
import './Browsing.css';

const Browsing = () => {
  const { gender, category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    sizes: [],
    fabrics: [],
    colors: []
  });
  const [sortBy, setSortBy] = useState('price-low');

  useEffect(() => {
    // Filter products by gender and optionally by category
    let filtered = productsData.filter(
      (product) => product.gender.toLowerCase() === gender.toLowerCase()
    );

    // If category is provided, filter by category as well
    if (category) {
      const categoryFormatted = category.replace(/-/g, ' ');
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === categoryFormatted.toLowerCase()
      );
    }

    setProducts(filtered);
    setFilteredProducts(filtered);
  }, [gender, category]);

  useEffect(() => {
    let filtered = [...products];

    // Apply filters
    if (filters.sizes.length > 0) {
      filtered = filtered.filter((product) =>
        filters.sizes.some((size) => product.sizes.includes(size))
      );
    }

    if (filters.fabrics.length > 0) {
      filtered = filtered.filter((product) =>
        filters.fabrics.some((fabric) => product.fabric.toLowerCase() === fabric.toLowerCase())
      );
    }

    if (filters.colors.length > 0) {
      filtered = filtered.filter((product) =>
        filters.colors.some((color) => product.color.toLowerCase() === color.toLowerCase())
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [filters, sortBy, products]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      sizes: [],
      fabrics: [],
      colors: []
    });
  };

  const categoryDisplay = category 
    ? category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    : 'All Items';

  return (
    <div className="browsing-page">
      <TitleCard isClickable={true} compact={true} />
      <Navigation />
      <div className="browsing-header">
        <h1 className="browsing-title">
          {gender.toUpperCase()} {category ? `- ${categoryDisplay}` : ''}
        </h1>
        <p className="browsing-subtitle">Discover our premium black collection</p>
      </div>
      
      <div className="browsing-content">
        <aside className="filters-sidebar">
          <Filters
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
          />
        </aside>
        
        <main className="products-section">
          <SortBar sortBy={sortBy} onSortChange={setSortBy} productCount={filteredProducts.length} />
          
          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <LazyProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="no-products">
                <p>No products found matching your filters.</p>
              </div>
            )}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Browsing;

