import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import Card from '../components/TeamCard'; 

describe('Card', () => {
  test('renders card with correct props', () => {
    const mockProps = {
      image: 'profile.jpg',
      name: 'John Doe',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      contact: 'mailto:john.doe@example.com',
    };

    // render Card component with mock props
    const { getByAltText, getByText, getByRole } = render(
      <Card {...mockProps} />
    );

    // check card elements are rendered with correct props
    expect(getByAltText('profile')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByTestId('team-card'))).toBeInTheDocument();
    
    // "Contact me" link has the correct href attribute
    const contactLink = getByRole('link', { name: /contact me/i });
    expect(contactLink).toHaveAttribute('href', 'mailto:john.doe@example.com');
  });

