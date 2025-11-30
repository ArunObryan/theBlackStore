import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Home', () => {
  test('renders TitleCard', () => {
    renderWithRouter(<Home />);
    const titleCard = screen.getByRole('heading', { level: 1, name: /TheBlackStore/i });
    expect(titleCard).toBeInTheDocument();
  });

  test('renders Navigation', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('MEN')).toBeInTheDocument();
    expect(screen.getByText('WOMEN')).toBeInTheDocument();
  });

  test('renders PremiumCards section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Premium Collections')).toBeInTheDocument();
  });

  test('renders Footer', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Premium black garments/)).toBeInTheDocument();
  });
});

