import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import configureStore from 'redux-mock-store'; // import configureStore- create mock Redux store
import VegCounter from '../components/VegCounter'; 

const mockStore = configureStore([]);

describe('VegCounter', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      plantCounter: {
        plantCount: 0, // initialise to 0 for tests
      },
    });
  });

  test('renders with initial plant count and buttons', () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <VegCounter />
      </Provider>
    );

    expect(getByText('Plant tracker')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument(); // initial plant count is rendered

    // buttons are rendered
    expect(getByRole('button', { name: /vegetable/i })).toBeInTheDocument();
    expect(getByRole('button', { name: /fruit/i })).toBeInTheDocument();
    expect(getByRole('button', { name: /nuts\/seed/i })).toBeInTheDocument();
    expect(getByRole('button', { name: /legumes/i })).toBeInTheDocument();
    expect(getByRole('button', { name: /herbs\/spices/i })).toBeInTheDocument();
    expect(getByRole('button', { name: /wholegrains/i })).toBeInTheDocument();
    expect(getByRole('button', { name: /remove plant/i })).toBeInTheDocument();
    expect(getByRole('button', { name: /reset/i })).toBeInTheDocument();
  });

  test('increments plant count when vegetable button is clicked', () => {
    const { getByRole, getByText } = render(
      <Provider store={store}>
        <VegCounter />
      </Provider>
    );

    fireEvent.click(getByRole('button', { name: /vegetable/i }));

    expect(getByText('1')).toBeInTheDocument(); //check increments as expected
  });

  // aim to add more tests for other button clicks, message display, etc.
});
