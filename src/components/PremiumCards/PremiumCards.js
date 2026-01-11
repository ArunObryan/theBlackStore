import React from 'react';
import LazyCard from '../LazyCard/LazyCard';
import './PremiumCards.css';

const PremiumCards = () => {
  const cards = [
    {
      id: 1,
      title: 'Elegant Evening',
      description: 'Sophisticated black evening wear',
      image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&h=1000&fit=crop'
    },
    {
      id: 2,
      title: 'Classic Sophistication',
      description: 'Timeless black formal attire',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop'
    },
    {
      id: 3,
      title: 'Modern Minimalism',
      description: 'Contemporary black fashion',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop'
    },
    {
      id: 4,
      title: 'Luxury Defined',
      description: 'Premium black collection',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop'
    }
  ];

  return (
    <section className="premium-cards-section">
      <div className="premium-cards-container">
        <h2 className="section-title">Premium Collections</h2>
        <div className="cards-grid">
          {cards.map((card) => (
            <LazyCard key={card.id}>
              <div className="premium-card">
                <div className="card-image-wrapper">
                  <div 
                    className="card-image"
                    style={{ backgroundImage: `url(${card.image})` }}
                  >
                    <div className="card-overlay"></div>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <div className="card-accent"></div>
                </div>
              </div>
            </LazyCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumCards;

