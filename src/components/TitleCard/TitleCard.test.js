import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TitleCard from './TitleCard';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('TitleCard', () => {
  test('renders TheBlackStore title', () => {
    renderWithRouter(<TitleCard />);
    const titleElement = screen.getByText('TheBlackStore');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders subtitle when not compact', () => {
    renderWithRouter(<TitleCard />);
    const subtitleElement = screen.getByText('Where Elegance Meets Darkness');
    expect(subtitleElement).toBeInTheDocument();
  });

  test('does not render subtitle when compact', () => {
    renderWithRouter(<TitleCard compact={true} />);
    const subtitleElement = screen.queryByText('Where Elegance Meets Darkness');
    expect(subtitleElement).not.toBeInTheDocument();
  });

  test('has clickable class when isClickable is true', () => {
    const { container } = renderWithRouter(<TitleCard isClickable={true} />);
    const titleCard = container.querySelector('.title-card-clickable');
    expect(titleCard).toBeInTheDocument();
  });

  test('does not have clickable class when isClickable is false', () => {
    const { container } = renderWithRouter(<TitleCard isClickable={false} />);
    const titleCard = container.querySelector('.title-card-clickable');
    expect(titleCard).not.toBeInTheDocument();
  });
});

