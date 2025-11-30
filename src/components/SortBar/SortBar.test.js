import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SortBar from './SortBar';

const mockOnSortChange = jest.fn();

describe('SortBar', () => {
  beforeEach(() => {
    mockOnSortChange.mockClear();
  });

  test('renders product count', () => {
    render(<SortBar sortBy="price-low" onSortChange={mockOnSortChange} productCount={10} />);
    expect(screen.getByText('10 products found')).toBeInTheDocument();
  });

  test('renders singular product count', () => {
    render(<SortBar sortBy="price-low" onSortChange={mockOnSortChange} productCount={1} />);
    expect(screen.getByText('1 product found')).toBeInTheDocument();
  });

  test('renders sort label', () => {
    render(<SortBar sortBy="price-low" onSortChange={mockOnSortChange} productCount={10} />);
    expect(screen.getByText('Sort by:')).toBeInTheDocument();
  });

  test('renders sort select with current value', () => {
    render(<SortBar sortBy="price-low" onSortChange={mockOnSortChange} productCount={10} />);
    const selectElement = screen.getByDisplayValue('Price: Low to High');
    expect(selectElement).toBeInTheDocument();
  });

  test('calls onSortChange when sort option changes', () => {
    render(<SortBar sortBy="price-low" onSortChange={mockOnSortChange} productCount={10} />);
    
    const selectElement = screen.getByDisplayValue('Price: Low to High');
    fireEvent.change(selectElement, { target: { value: 'price-high' } });
    
    expect(mockOnSortChange).toHaveBeenCalledWith('price-high');
  });

  test('renders all sort options', () => {
    render(<SortBar sortBy="price-low" onSortChange={mockOnSortChange} productCount={10} />);
    
    const selectElement = screen.getByDisplayValue('Price: Low to High');
    expect(selectElement.querySelector('option[value="price-low"]')).toBeInTheDocument();
    expect(selectElement.querySelector('option[value="price-high"]')).toBeInTheDocument();
    expect(selectElement.querySelector('option[value="name-asc"]')).toBeInTheDocument();
    expect(selectElement.querySelector('option[value="name-desc"]')).toBeInTheDocument();
  });
});

