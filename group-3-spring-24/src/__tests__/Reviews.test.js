import React from 'react';
import { render, screen } from '@testing-library/react';
import Reviews from '../components/Reviews'; // Update the path to the Reviews component

describe('Reviews Component', () => {
  test('renders reviews container', () => {
    render(<Reviews />);
    const reviewsContainer = screen.getByTestId('reviews-container');
    expect(reviewsContainer).toBeInTheDocument();
  });

  test('renders reviews header', () => {
    render(<Reviews />);
    const reviewsHeader = screen.getByText('Reviews');
    expect(reviewsHeader).toBeInTheDocument();
  });

  test('renders review card with correct content', () => {
    render(<Reviews />);
    const reviewText = 'Rooting for this app, makes meal prep a breeze';
    const reviewCard = screen.getByText(reviewText);
    expect(reviewCard).toBeInTheDocument();
  });

  test('renders review card with correct first line', () => {
    render(<Reviews />);
    const firstLine = screen.getByText('Easy to use');
    expect(firstLine).toBeInTheDocument();
  });
});

// Challenging to decipher code through SVGs, could be a good opportunity to nest components and have the cards render with props