import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          <div className="product-overlay">
            <button className="quick-view-btn">Quick View</button>
          </div>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-fabric">{product.fabric}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <span className="product-sizes">Sizes: {product.sizes.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

