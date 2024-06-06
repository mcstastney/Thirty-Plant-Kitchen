import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScrollButton from '../components/ScrollButton'; 

describe('ScrollButton', () => {
  test('scrolls to signup form when clicked', () => {
    // Mock scrollTo function
    const originalScrollTo = window.scrollTo;
    window.scrollTo = jest.fn();

    // Render the ScrollButton component
    const { getByText } = render(<ScrollButton />);

    // Simulate button click
    fireEvent.click(getByText('Sign Up'));

    // Expect scrollTo to have been called with correct arguments
    expect(window.scrollTo).toHaveBeenCalledWith(expect.objectContaining({
      top: expect.any(Number),
      behavior: 'smooth',
    }));

    // Restore original scrollTo function
    window.scrollTo = originalScrollTo;
  });
});
