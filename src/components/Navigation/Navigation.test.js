import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();

const renderWithRouter = (component) => {
  useNavigate.mockReturnValue(mockNavigate);
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navigation', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('renders MEN and WOMEN navigation links', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText('MEN')).toBeInTheDocument();
    expect(screen.getByText('WOMEN')).toBeInTheDocument();
  });

  test('shows dropdown menu on hover for MEN', async () => {
    renderWithRouter(<Navigation />);
    const menLink = screen.getByText('MEN');
    
    fireEvent.mouseEnter(menLink);
    
    await waitFor(() => {
      expect(screen.getByText('T-Shirts')).toBeInTheDocument();
    });
    expect(screen.getByText('Shirts')).toBeInTheDocument();
    expect(screen.getByText('Pants')).toBeInTheDocument();
  });

  test('shows dropdown menu on hover for WOMEN', async () => {
    renderWithRouter(<Navigation />);
    const womenLink = screen.getByText('WOMEN');
    
    fireEvent.mouseEnter(womenLink);
    
    await waitFor(() => {
      expect(screen.getByText('Dresses')).toBeInTheDocument();
    });
    expect(screen.getByText('Tops')).toBeInTheDocument();
    expect(screen.getByText('Pants')).toBeInTheDocument();
  });

  test('navigates to gender page when MEN is clicked', () => {
    renderWithRouter(<Navigation />);
    const menLink = screen.getByText('MEN');
    
    fireEvent.click(menLink);
    
    expect(mockNavigate).toHaveBeenCalledWith('/browse/men');
  });

  test('navigates to gender page when WOMEN is clicked', () => {
    renderWithRouter(<Navigation />);
    const womenLink = screen.getByText('WOMEN');
    
    fireEvent.click(womenLink);
    
    expect(mockNavigate).toHaveBeenCalledWith('/browse/women');
  });

  test('navigates to category page when category is clicked', async () => {
    renderWithRouter(<Navigation />);
    const menLink = screen.getByText('MEN');
    
    fireEvent.mouseEnter(menLink);
    
    await waitFor(() => {
      expect(screen.getByText('T-Shirts')).toBeInTheDocument();
    });
    
    const tShirtsLink = screen.getByText('T-Shirts');
    fireEvent.click(tShirtsLink);
    expect(mockNavigate).toHaveBeenCalledWith('/browse/men/t-shirts');
  });
});

