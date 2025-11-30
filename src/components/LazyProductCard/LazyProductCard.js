import React, { useState, useRef, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './LazyProductCard.css';

const LazyProductCard = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasLoaded(true);
            // Once loaded, we can stop observing
            if (cardRef.current) {
              observer.unobserve(cardRef.current);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '100px', // Start loading 100px before the card enters viewport
        threshold: 0.01
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="lazy-product-card-wrapper">
      {hasLoaded ? (
        <ProductCard product={product} />
      ) : (
        <div className="lazy-product-card-placeholder">
          <div className="placeholder-image"></div>
          <div className="placeholder-content">
            <div className="placeholder-line placeholder-title"></div>
            <div className="placeholder-line placeholder-subtitle"></div>
            <div className="placeholder-line placeholder-price"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyProductCard;

