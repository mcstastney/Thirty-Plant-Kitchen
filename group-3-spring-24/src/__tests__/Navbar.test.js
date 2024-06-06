import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Install redux-mock-store package

import Navbar from '../components/Navbar';

const mockStore = configureStore([]);

describe('Navbar component', () => {
  test('renders correctly when user is not signed in', () => {
    const store = mockStore({
      user: {
        isSignedIn: false,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );

    expect(getByText('Sign up')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  test('renders correctly when user is signed in', () => {
    const store = mockStore({
      user: {
        isSignedIn: true,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );

    expect(getByText('My Account')).toBeInTheDocument();
    expect(getByText('Logout')).toBeInTheDocument();
  });

  test('handles login functionality', async () => {
    // mock fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ customer_id: '123', first_name: 'John' }),
      })
    );

    const store = mockStore({
      user: {
        isSignedIn: false,
      },
    });

    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );

    // mock user input
    fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });

    // mock login button click
    fireEvent.click(getByText('Login'));

    // wait for login to complete
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
  });

  test('handles logout functionality', async () => {
    const store = mockStore({
      user: {
        isSignedIn: true,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );

    // mock logout button click
    fireEvent.click(getByText('Logout'));

    // check logout action is dispatched
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'user/logout' }]); 
  });
});
