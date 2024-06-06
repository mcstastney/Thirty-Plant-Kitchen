import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../components/Hero';

describe('Hero component', () => {
  test('renders correctly', () => {
    const { getByText, getByAltText } = render(<Hero />);
    
    // Check if the heading is rendered
    expect(getByText('30 Plant Kitchen')).toBeInTheDocument();

    // Check if the image is rendered
    expect(getByAltText('Healthy foods')).toBeInTheDocument();

    // Check if the sign up button is rendered
    expect(getByText('Sign up')).toBeInTheDocument();

    // Check if the video link is rendered
    expect(getByText('Video')).toBeInTheDocument();

    // Check if the paragraph is rendered
    expect(getByText('Join thousands of people around the world on a journey to improve their gut microbiome')).toBeInTheDocument();

    // Check if the social media icons are rendered
    expect(document.querySelector('.icons')).toBeInTheDocument();
  });
});
