import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

import Hero from '../components/Hero';

describe('Hero component', () => {
  test('renders correctly', () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter> {/* Wrap Hero component with BrowserRouter */}
        <Hero />
      </BrowserRouter>
    );
    
    // Check heading is rendered
    expect(getByText('30 Plant Kitchen')).toBeInTheDocument();

    // Check image is rendered
    expect(getByAltText('Healthy foods')).toBeInTheDocument();

    // Check sign up button is rendered
    expect(getByText('Sign up')).toBeInTheDocument();

    // Check video link is rendered
    expect(getByText('Video')).toBeInTheDocument();

    // Check paragraph is rendered
    expect(getByText(/Join.*people.*improve their gut microbiome/)).toBeInTheDocument();


    // Check social media icons are rendered
    expect(document.querySelector('.icons')).toBeInTheDocument();
  });
});
