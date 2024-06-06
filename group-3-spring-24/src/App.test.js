import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  test('renders Navbar and Footer', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Check if Navbar is rendered
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();

    // Check if Footer is rendered
    const footerElement = screen.getByRole('footer');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders Home page by default', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Check if Home page content is rendered
    const homePageContent = screen.getByTestId('homepage'); // Adjust the text to match the actual content of the Home page
    expect(homePageContent).toBeInTheDocument();
  });

  test('renders SignUpForm when navigating to /SignUp', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/SignUp']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Check if SignUpForm is rendered
    const signUpFormContent = screen.getByTestId('signup-form'); // Adjust the text to match the actual content of the SignUp page
    expect(signUpFormContent).toBeInTheDocument();
  });

  test('renders MyAccount when navigating to /myaccount', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/myaccount']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Check if MyAccount is rendered
    const myAccountContent = screen.getByTestId('my-account-page'); // Adjust the text to match the actual content of the MyAccount page
    expect(myAccountContent).toBeInTheDocument();
  });

  test('renders Recipes when navigating to /Recipes', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Recipes']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Check if Recipes page is rendered
    const recipesPageContent = screen.getByTestId('recipes-page'); // Adjust the text to match the actual content of the Recipes page
    expect(recipesPageContent).toBeInTheDocument();
  });

  test('renders About when navigating to /aboutPage', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/aboutPage']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Check if About page is rendered
    const aboutPageContent = screen.getByRole('heading', { name: /About Us/i, level: 1 });
    expect(aboutPageContent).toBeInTheDocument();
  });
});
