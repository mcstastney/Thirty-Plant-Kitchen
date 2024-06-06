import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm'; 
import { Provider } from 'react-redux';
import { store } from '../redux/store'; 

describe('SignUpForm', () => {
  test('submits form with correct data', async () => {
    const mockFirstName = 'John';
    const mockLastName = 'Doe';
    const mockEmailAddress = 'john.doe@example.com';
    const mockPassword = 'password';

    // Render the SignUpForm component wrapped in a Provider with the store and Router
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <SignUpForm />
        </Router>
      </Provider>
    );

    // Fill in form inputs
    fireEvent.change(getByPlaceholderText('Enter your first name'), { target: { value: mockFirstName } });
    fireEvent.change(getByPlaceholderText('Enter your surname'), { target: { value: mockLastName } });
    fireEvent.change(getByPlaceholderText('Email Address'), { target: { value: mockEmailAddress } });
    fireEvent.change(getByPlaceholderText('Enter your password'), { target: { value: mockPassword } });

    // Submit the form
    fireEvent.submit(getByTestId('signup-form'));

    // Wait for the form submission to complete
    await waitFor(() => {
      // Assert that the correct data was submitted
      expect(fetchMock).toHaveBeenCalledWith("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: mockFirstName,
          last_name: mockLastName,
          email_address: mockEmailAddress,
          password: mockPassword,
        }),
      });
    });
  });
});
