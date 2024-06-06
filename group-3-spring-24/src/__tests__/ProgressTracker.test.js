import React from 'react';
import { render } from '@testing-library/react';
import CircularProgressWithLabel from '../components/CircularProgressWithLabel';

describe('CircularProgressWithLabel component', () => {
  test('renders correctly with specified value', () => {
    const { getByText } = render(<CircularProgressWithLabel value={50} />);
    // Check if the circular progress is rendered
    expect(getByText('50%')).toBeInTheDocument();
  });
});
