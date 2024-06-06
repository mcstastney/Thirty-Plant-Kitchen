import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MonthSelector from '../components/MonthSelector';

describe('MonthSelector component', () => {
  test('renders correctly with months dropdown', () => {
    const setMonth = jest.fn(); // Mock setMonth function
    const handleSubmit = jest.fn(); // Mock handleSubmit function

    const { getByText, getByLabelText } = render(
      <MonthSelector month="" setMonth={setMonth} handleSubmit={handleSubmit} />
    );

    // Check if the select label is rendered correctly
    expect(getByText('Select Month')).toBeInTheDocument();

    // Check if the dropdown menu renders months correctly
    expect(getByText('January')).toBeInTheDocument();
    expect(getByText('February')).toBeInTheDocument();
    expect(getByText('March')).toBeInTheDocument();
    expect(getByText('April')).toBeInTheDocument();
    expect(getByText('May')).toBeInTheDocument();
    expect(getByText('June')).toBeInTheDocument();
    expect(getByText('July')).toBeInTheDocument();
    expect(getByText('August')).toBeInTheDocument();
    expect(getByText('September')).toBeInTheDocument();
    expect(getByText('October')).toBeInTheDocument();
    expect(getByText('November')).toBeInTheDocument();
    expect(getByText('December')).toBeInTheDocument();

    // Check if the search button is rendered correctly
    expect(getByText('Search')).toBeInTheDocument();
  });

  test('calls setMonth and handleSubmit on selecting a month and clicking Search', () => {
    const setMonth = jest.fn(); // Mock setMonth function
    const handleSubmit = jest.fn(); // Mock handleSubmit function

    const { getByText, getByLabelText } = render(
      <MonthSelector month="" setMonth={setMonth} handleSubmit={handleSubmit} />
    );

    // Select a month from the dropdown
    fireEvent.change(getByLabelText('Select Month'), { target: { value: 'january' } });

    // Click the Search button
    fireEvent.click(getByText('Search'));

    // Check if setMonth and handleSubmit functions are called with the correct arguments
    expect(setMonth).toHaveBeenCalledWith('january');
    expect(handleSubmit).toHaveBeenCalled();
  });

  test('disables Search button when no month is selected', () => {
    const setMonth = jest.fn(); // Mock setMonth function
    const handleSubmit = jest.fn(); // Mock handleSubmit function

    const { getByText, getByLabelText } = render(
      <MonthSelector month="" setMonth={setMonth} handleSubmit={handleSubmit} />
    );

    // Check if the Search button is disabled initially
    const searchButton = getByText('Search');
    expect(searchButton).toBeDisabled();

    // Select a month from the dropdown
    fireEvent.change(getByLabelText('Select Month'), { target: { value: 'january' } });

    // Check if the Search button is enabled after selecting a month
    expect(searchButton).toBeEnabled();
  });
});
