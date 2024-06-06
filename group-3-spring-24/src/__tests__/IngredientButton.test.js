import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IngredientButton from '../components/IngredientButton';

describe('IngredientButton component', () => {
  test('renders correctly', () => {
    const ingredient = 'Tomato';
    const isSelected = false;
    const onClick = jest.fn(); // Mock onClick function

    const { getByText } = render(
      <IngredientButton ingredient={ingredient} isSelected={isSelected} onClick={onClick} />
    );
    
    // Check if the button text is rendered correctly
    expect(getByText('Tomato')).toBeInTheDocument();

    // Check if the button has the correct class
    expect(document.querySelector('.ingredient-button')).toBeInTheDocument();
  });

  test('handles click event', () => {
    const ingredient = 'Tomato';
    const isSelected = false;
    const onClick = jest.fn(); // Mock onClick function

    const { getByText } = render(
      <IngredientButton ingredient={ingredient} isSelected={isSelected} onClick={onClick} />
    );

    // Simulate a click event
    fireEvent.click(getByText('Tomato'));

    // Check if the onClick function is called
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
