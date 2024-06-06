import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InSeasonItems from '../components/InSeasonItems';

describe('InSeasonItems component', () => {
  test('renders correctly with items', () => {
    const title = 'Fruits';
    const items = ['Apple', 'Orange', 'Banana'];
    const selectedItems = ['Apple'];
    const toggleItem = jest.fn(); // Mock toggleItem function
    const month = 'january'; // Month for testing

    const { getByText, getAllByRole } = render(
      <InSeasonItems title={title} items={items} selectedItems={selectedItems} toggleItem={toggleItem} month={month} />
    );
    
    // Check if the title is rendered correctly
    expect(getByText('Fruits')).toBeInTheDocument();

    // Check if all items are rendered correctly
    expect(getByText('Apple')).toBeInTheDocument();
    expect(getByText('Orange')).toBeInTheDocument();
    expect(getByText('Banana')).toBeInTheDocument();

    // Check if the correct number of buttons are rendered
    expect(getAllByRole('button')).toHaveLength(3);
  });

  test('renders correctly with no items', () => {
    const title = 'Vegetables';
    const items = [];
    const selectedItems = [];
    const toggleItem = jest.fn(); // Mock toggleItem function
    const month = 'march'; // Month for testing

    const { getByText } = render(
      <InSeasonItems title={title} items={items} selectedItems={selectedItems} toggleItem={toggleItem} month={month} />
    );
    
    // Check if the title is rendered correctly
    expect(getByText('Vegetables')).toBeInTheDocument();

    // Check if the no items message is rendered correctly
    expect(getByText('There are no in-season vegetables for March.')).toBeInTheDocument();
  });
});
