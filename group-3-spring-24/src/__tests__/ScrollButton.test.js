import { render, fireEvent } from '@testing-library/react';
import ScrollButton from './ScrollButton';

describe('ScrollButton', () => {
  test('scrolls to signup form when clicked', () => {
    // mock scrollTo func
    window.scrollTo = jest.fn();

    // render ScrollButton component
    const { getByText } = render(<ScrollButton />);

    // click event on the button
    fireEvent.click(getByText('Sign Up'));

    // check scrollTo called with correct arguments
    expect(window.scrollTo).toHaveBeenCalledWith(expect.objectContaining({
      top: expect.any(Number),
      behavior: 'smooth',
    }));
  });
});
