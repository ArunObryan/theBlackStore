import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    // Check for title in TitleCard (h1 with class title-main)
    const titleCard = screen.getByRole('heading', { level: 1, name: /TheBlackStore/i });
    expect(titleCard).toBeInTheDocument();
  });

  test('renders Home page at root route', () => {
    render(<App />);
    // Check for title in TitleCard
    const titleCard = screen.getByRole('heading', { level: 1, name: /TheBlackStore/i });
    expect(titleCard).toBeInTheDocument();
    expect(screen.getByText('Premium Collections')).toBeInTheDocument();
  });
});

