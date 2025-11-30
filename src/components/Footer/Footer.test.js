import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders TheBlackStore title', () => {
    render(<Footer />);
    expect(screen.getByText('TheBlackStore')).toBeInTheDocument();
  });

  test('renders footer description', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Premium black garments for the discerning fashion enthusiast/)
    ).toBeInTheDocument();
  });

  test('renders Contact Us section', () => {
    render(<Footer />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText(/contact@theblackstore.com/)).toBeInTheDocument();
  });

  test('renders Help section', () => {
    render(<Footer />);
    expect(screen.getByText('Help')).toBeInTheDocument();
    expect(screen.getByText('Shipping Information')).toBeInTheDocument();
    expect(screen.getByText('Returns & Exchanges')).toBeInTheDocument();
  });

  test('renders Follow Us section', () => {
    render(<Footer />);
    expect(screen.getByText('Follow Us')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
  });

  test('renders copyright with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} TheBlackStore`))).toBeInTheDocument();
  });

  test('renders legal links', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });
});

