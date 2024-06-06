import React from 'react';
import { render } from '@testing-library/react';
import RecipeInfoCard from '../components/RecipeInfoCard';

describe('RecipeInfoCard component', () => {
  test('renders correctly with specified props', () => {
    const image = '/path/to/image.jpg';
    const alt = 'Image alt text';
    const title = 'Recipe Title';
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    
    const { getByText, getByAltText } = render(
      <RecipeInfoCard image={image} alt={alt} title={title} text={text} />
    );

    // Check if the title and text are rendered
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
    
    // Check if the image is rendered with the correct alt text
    expect(getByAltText(alt)).toBeInTheDocument();
  });
});
