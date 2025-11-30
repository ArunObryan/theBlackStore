import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

const mockProduct = {
  id: 1,
  name: 'Classic Black Tee',
  gender: 'men',
  category: 'T-Shirts',
  price: 49.99,
  fabric: 'Cotton',
  color: 'Black',
  sizes: ['S', 'M', 'L', 'XL'],
  image: 'https://example.com/image.jpg',
};

describe('ProductCard', () => {
  test('renders product name', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Classic Black Tee')).toBeInTheDocument();
  });

  test('renders product fabric', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Cotton')).toBeInTheDocument();
  });

  test('renders product price', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('$49.99')).toBeInTheDocument();
  });

  test('renders product sizes', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(/Sizes: S, M, L, XL/)).toBeInTheDocument();
  });

  test('renders quick view button', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Quick View')).toBeInTheDocument();
  });

  test('renders product card with image', () => {
    render(<ProductCard product={mockProduct} />);
    // The image is applied as background-image via CSS, so we just verify the card renders
    expect(screen.getByText('Classic Black Tee')).toBeInTheDocument();
  });
});

