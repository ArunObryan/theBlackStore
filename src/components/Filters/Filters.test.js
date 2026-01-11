import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filters from './Filters';

const mockFilters = {
  sizes: [],
  fabrics: [],
  colors: [],
};

const mockOnFilterChange = jest.fn();
const mockOnClearFilters = jest.fn();

describe('Filters', () => {
  beforeEach(() => {
    mockOnFilterChange.mockClear();
    mockOnClearFilters.mockClear();
  });

  test('renders Filters title', () => {
    render(
      <Filters
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
    expect(screen.getByText('Filters')).toBeInTheDocument();
  });

  test('renders all filter sections', () => {
    render(
      <Filters
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
    expect(screen.getByText('Sizes')).toBeInTheDocument();
    expect(screen.getByText('Fabrics')).toBeInTheDocument();
    expect(screen.getByText('Colors')).toBeInTheDocument();
  });

  test('renders size options', () => {
    render(
      <Filters
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
    expect(screen.getByText('XS')).toBeInTheDocument();
    expect(screen.getByText('S')).toBeInTheDocument();
    expect(screen.getByText('M')).toBeInTheDocument();
    expect(screen.getByText('L')).toBeInTheDocument();
  });

  test('calls onFilterChange when a filter is clicked', () => {
    render(
      <Filters
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
    
    const sizeCheckbox = screen.getByLabelText('S');
    fireEvent.click(sizeCheckbox);
    
    expect(mockOnFilterChange).toHaveBeenCalledWith('sizes', 'S');
  });

  test('shows clear filters button when filters are active', () => {
    const activeFilters = {
      sizes: ['S'],
      fabrics: [],
      colors: [],
    };
    
    render(
      <Filters
        filters={activeFilters}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
    
    expect(screen.getByText('Clear All')).toBeInTheDocument();
  });

  test('does not show clear filters button when no filters are active', () => {
    render(
      <Filters
        filters={mockFilters}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
    
    expect(screen.queryByText('Clear All')).not.toBeInTheDocument();
  });

  test('calls onClearFilters when clear button is clicked', () => {
    const activeFilters = {
      sizes: ['S'],
      fabrics: ['Cotton'],
      colors: [],
    };
    
    render(
      <Filters
        filters={activeFilters}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
    
    const clearButton = screen.getByText('Clear All');
    fireEvent.click(clearButton);
    
    expect(mockOnClearFilters).toHaveBeenCalled();
  });
});

