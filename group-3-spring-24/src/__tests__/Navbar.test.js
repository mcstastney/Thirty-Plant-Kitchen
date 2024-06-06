import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  const mockStore = configureStore();
  const initialState = {
    user: {
      isSignedIn: false,
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders correctly when user is not signed in', () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );

    // Check if the navbar renders correctly
    expect(getByText('Homepage')).toBeInTheDocument();
    expect(getByText('Find Seasonal Recipes')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText('Sign up')).toBeInTheDocument();
  });

  test('renders correctly when user is signed in', () => {
    const initialStateSignedIn = {
      user: {
        isSignedIn: true,
      },
    };
    const storeSignedIn = mockStore(initialStateSignedIn);

    const { getByText, queryByText } = render(
      <Provider store={storeSignedIn}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );

    // Check if the logout button is rendered when user is signed in
    expect(getByText('Logout')).toBeInTheDocument();
    // Check if the login and sign up buttons are not rendered when user is signed in
    expect(queryByText('Login')).toBeNull();
    expect(queryByText('Sign up')).toBeNull();
  });

  test('displays error message if login fails', async () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );

    // Simulate entering invalid email and password
    fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });

    // Simulate clicking the login button
    fireEvent.click(getByText('Login'));

    // Check if the error message is displayed
    expect(getByText('Please enter the email address and password you used to register, or create a new account.')).toBeInTheDocument();
  });
});
