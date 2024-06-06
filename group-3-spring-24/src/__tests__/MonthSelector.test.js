import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MonthSelector from '../components/MonthSelector';


describe('MonthSelector component', () => {
  test('renders correctly with months dropdown', async () => { // make test async
    const setMonth = jest.fn(); // mock setMonth function
    const handleSubmit = jest.fn(); // mock handleSubmit function
    const { getByText } = render(
      <MonthSelector month="" setMonth={setMonth} handleSubmit={handleSubmit} />
    );

    // open dropdown
    const selectElement = screen.getByLabelText('Select Month');
    fireEvent.mouseDown(selectElement);

    // wait for dropdown options to render
    const dropdownOptions = await screen.findAllByRole('option');

    // dropdown options are present
    expect(dropdownOptions.length).toBe(13); // 12 months + "None" option

    // iterate through each month option and select it
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    months.forEach(month => {
      const option = dropdownOptions.find(option => option.textContent === month);
      fireEvent.click(option);

      // check selected month changes
      expect(selectElement).toHaveValue(month);
    });
    // check search button renders correctly
    expect(getByText('Search')).toBeInTheDocument();
  });

  test('calls setMonth and handleSubmit on selecting a month and clicking Search', () => {
    const setMonth = jest.fn(); // mock setMonth function
    const handleSubmit = jest.fn(); // mock handleSubmit function

    const { getByText, getByLabelText } = render(
      <MonthSelector month="" setMonth={setMonth} handleSubmit={handleSubmit} />
    );

    // select month from dropdown
    fireEvent.change(getByLabelText('Select Month'), { target: { value: 'january' } });

    // click Search button
    fireEvent.click(getByText('Search'));

    // check setMonth and handleSubmit functions are called with correct args
    expect(setMonth).toHaveBeenCalledWith('january');
    expect(handleSubmit).toHaveBeenCalled();
  });

  test('disables Search button when no month is selected', () => {
    const setMonth = jest.fn(); // mock setMonth function
    const handleSubmit = jest.fn(); // mock handleSubmit function

    const { getByText, getByLabelText } = render(
      <MonthSelector month="" setMonth={setMonth} handleSubmit={handleSubmit} />
    );

    // check Search button is disabled initially
    const searchButton = getByText('Search');
    expect(searchButton).toBeDisabled();

    // select month from dropdown
    fireEvent.change(getByLabelText('Select Month'), { target: { value: 'january' } });

    // check Search button is enabled after selecting month
    expect(searchButton).toBeEnabled();
  });
});
