import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Browsing from './Browsing';

// Mock the products data
jest.mock('../data/products', () => ({
  productsData: [
    {
      id: 1,
      name: 'Test Product',
      gender: 'men',
      category: 'T-Shirts',
      price: 49.99,
      fabric: 'Cotton',
      color: 'Black',
      sizes: ['S', 'M', 'L'],
      image: 'https://example.com/image.jpg',
    },
    {
      id: 2,
      name: 'Another Product',
      gender: 'men',
      category: 'Shirts',
      price: 99.99,
      fabric: 'Silk',
      color: 'Charcoal',
      sizes: ['M', 'L', 'XL'],
      image: 'https://example.com/image2.jpg',
    },
  ],
}));

// Create a wrapper that includes Routes to properly set up useParams
const renderWithRouter = (component, path = '/browse/men') => {
  const { Routes, Route } = require('react-router-dom');
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/browse/:gender" element={component} />
        <Route path="/browse/:gender/:category" element={component} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Browsing', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver = class IntersectionObserver {
      disconnect() {}
      observe() {}
      takeRecords() {
        return [];
      }
      unobserve() {}
    };
    
    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test('renders TitleCard', () => {
    renderWithRouter(<Browsing />);
    const titleCard = screen.getByRole('heading', { level: 1, name: /TheBlackStore/i });
    expect(titleCard).toBeInTheDocument();
  });

  test('renders Navigation', () => {
    renderWithRouter(<Browsing />);
    // Check for navigation links specifically (they have nav-link class)
    const navLinks = screen.getAllByText('MEN');
    expect(navLinks.length).toBeGreaterThan(0);
    expect(screen.getByText('WOMEN')).toBeInTheDocument();
  });

  test('displays gender in header', async () => {
    renderWithRouter(<Browsing />, '/browse/men');
    
    // Wait for the component to render and products to load
    await waitFor(() => {
      // Check that Filters component is rendered (indicates page loaded)
      expect(screen.getByText('Filters')).toBeInTheDocument();
    }, { timeout: 3000 });
    
    // Now check for the heading - there might be multiple h1 elements
    const headings = screen.getAllByRole('heading', { level: 1 });
    const browsingHeading = headings.find(h => h.className.includes('browsing-title'));
    expect(browsingHeading).toBeInTheDocument();
    expect(browsingHeading?.textContent).toMatch(/MEN/i);
  });

  test('displays category in header when category is provided', async () => {
    renderWithRouter(<Browsing />, '/browse/men/t-shirts');
    
    // Wait for the component to render
    await waitFor(() => {
      expect(screen.getByText('Filters')).toBeInTheDocument();
    }, { timeout: 3000 });
    
    // Check for the heading with category
    const headings = screen.getAllByRole('heading', { level: 1 });
    const browsingHeading = headings.find(h => h.className.includes('browsing-title'));
    expect(browsingHeading).toBeInTheDocument();
    expect(browsingHeading?.textContent).toMatch(/MEN/i);
    // Category might be formatted as "T-Shirts" or "T Shirts"
    expect(browsingHeading?.textContent).toMatch(/T-Shirts|T Shirts/i);
  });

  test('renders Filters component', () => {
    renderWithRouter(<Browsing />);
    expect(screen.getByText('Filters')).toBeInTheDocument();
  });

  test('renders SortBar component', () => {
    renderWithRouter(<Browsing />);
    expect(screen.getByText('Sort by:')).toBeInTheDocument();
  });

  test('renders Footer', () => {
    renderWithRouter(<Browsing />);
    expect(screen.getByText(/Premium black garments/)).toBeInTheDocument();
  });
});

