import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/TeamCard'; 

describe('Card', () => {
  test('renders card with correct props', () => {
    const mockProps = {
      image: 'profile.jpg',
      name: 'John Doe',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      contact: 'mailto:john.doe@example.com',
    };

    // Render the Card component with mock props
    const { getByAltText, getByText, getByRole } = render(
      <Card {...mockProps} />
    );

    // Assert that the card elements are rendered with correct props
    expect(getByAltText('profile')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('About: Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument();
    
    // Ensure that the "Contact me" link has the correct href attribute
    const contactLink = getByRole('link', { name: /contact me/i });
    expect(contactLink).toHaveAttribute('href', 'mailto:john.doe@example.com');
  });
});
