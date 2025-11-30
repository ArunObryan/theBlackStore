import React, { useState, useRef, useEffect } from 'react';
import './LazyCard.css';

const LazyCard = ({ children, className = '' }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const currentRef = cardRef.current;
    if (!currentRef) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasLoaded(true);
            // Once loaded, we can stop observing
            observer.unobserve(currentRef);
          }
        });
      },
      {
        root: null,
        rootMargin: '100px', // Start loading 100px before the card enters viewport
        threshold: 0.01
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`lazy-card-wrapper ${className}`}>
      {hasLoaded ? (
        children
      ) : (
        <div className="lazy-card-placeholder">
          <div className="placeholder-image"></div>
          <div className="placeholder-content">
            <div className="placeholder-line placeholder-title"></div>
            <div className="placeholder-line placeholder-subtitle"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyCard;

