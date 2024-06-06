import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer'; 

describe('Footer component', () => {
  test('renders footer with correct content', () => {
    render(<Footer />);
    
    // test if footer is in doc
    const footerElement = screen.getByRole('footer');
    expect(footerElement).toBeInTheDocument();

    // test for copyright icon present
    const copyrightIcon = screen.getByTestId('copyright');
    expect(copyrightIcon).toBeInTheDocument();

    // test for expected text present
    const cookedText = screen.getByText(/Cooked up by/i);
    expect(cookedText).toBeInTheDocument();

    // test for link present and correct
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/mcstastney/group-3-fullstack');
  });
});
