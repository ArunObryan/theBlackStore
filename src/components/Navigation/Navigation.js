import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const categories = {
    men: ['T-Shirts', 'Shirts', 'Pants', 'Jackets', 'Suits', 'Accessories'],
    women: ['Dresses', 'Tops', 'Pants', 'Jackets', 'Skirts', 'Accessories']
  };

  const handleCategoryClick = (gender, category) => {
    navigate(`/browse/${gender}/${category.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const handleGenderClick = (gender) => {
    navigate(`/browse/${gender}`);
  };

  const handleMouseEnter = (gender) => {
    setActiveDropdown(gender);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-item" 
             onMouseEnter={() => handleMouseEnter('men')}
             onMouseLeave={handleMouseLeave}>
          <span className="nav-link" onClick={() => handleGenderClick('men')}>MEN</span>
          {activeDropdown === 'men' && (
            <div className="dropdown-menu">
              {categories.men.map((category) => (
                <div
                  key={category}
                  className="dropdown-item"
                  onClick={() => handleCategoryClick('men', category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="nav-item"
             onMouseEnter={() => handleMouseEnter('women')}
             onMouseLeave={handleMouseLeave}>
          <span className="nav-link" onClick={() => handleGenderClick('women')}>WOMEN</span>
          {activeDropdown === 'women' && (
            <div className="dropdown-menu">
              {categories.women.map((category) => (
                <div
                  key={category}
                  className="dropdown-item"
                  onClick={() => handleCategoryClick('women', category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

