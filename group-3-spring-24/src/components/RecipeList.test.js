import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeList from './RecipeList';
import CircularProgressWithLabel from '../components/ProgressTracker';
import { handleSaveRecipe } from './saveRecipe';

jest.mock('./saveRecipe');
jest.mock('../components/ProgressTracker', () => () => <div>Loading...</div>);

const mockStore = configureStore([]);

const renderWithProviders = (ui, { reduxState } = {}) => {
  const store = mockStore(reduxState);
  return render(
    <Provider store={store}>
      <Router>
        {ui}
      </Router>
    </Provider>
  );
};

describe('RecipeList', () => {
  test('renders loading state', () => {
    renderWithProviders(<RecipeList loading={true} recipes={[]} showNoRecipesMessage={false} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders no recipes message', () => {
    renderWithProviders(<RecipeList loading={false} recipes={[]} showNoRecipesMessage={true} />);
    expect(screen.getByText('No recipes found for selected ingredients. Try selecting a different ingredient!')).toBeInTheDocument();
  });

  test('renders recipe list', () => {
    const recipes = [
      {
        recipe: {
          uri: 'recipe_1',
          label: 'Recipe 1',
          image: 'image1.jpg',
          ingredientLines: ['ingredient1', 'ingredient2'],
          yield: 4,
          url: 'http://recipe1.com'
        }
      }
    ];
    renderWithProviders(<RecipeList loading={false} recipes={recipes} showNoRecipesMessage={false} />);
    expect(screen.getByText('Recipe 1')).toBeInTheDocument();
    expect(screen.getByText('Ingredients:')).toBeInTheDocument();
    expect(screen.getByText('Servings: 4')).toBeInTheDocument();
    expect(screen.getByText('Full Recipe')).toHaveAttribute('href', 'http://recipe1.com');
  });

  test('handles save recipe click when signed in', async () => {
    const recipes = [
      {
        recipe: {
          uri: 'recipe_1',
          label: 'Recipe 1',
          image: 'image1.jpg',
          ingredientLines: ['ingredient1', 'ingredient2'],
          yield: 4,
          url: 'http://recipe1.com'
        }
      }
    ];

    handleSaveRecipe.mockResolvedValue({ success: true });

    renderWithProviders(<RecipeList loading={false} recipes={recipes} showNoRecipesMessage={false} />, {
      reduxState: { user: { customerId: '123', isSignedIn: true } }
    });

    fireEvent.click(screen.getByText('Save this recipe'));

    expect(await screen.findByText('Recipe saved')).toBeInTheDocument();
  });

  test('shows sign in message when not signed in', () => {
    const recipes = [
      {
        recipe: {
          uri: 'recipe_1',
          label: 'Recipe 1',
          image: 'image1.jpg',
          ingredientLines: ['ingredient1', 'ingredient2'],
          yield: 4,
          url: 'http://recipe1.com'
        }
      }
    ];

    renderWithProviders(<RecipeList loading={false} recipes={recipes} showNoRecipesMessage={false} />, {
      reduxState: { user: { customerId: '123', isSignedIn: false } }
    });

    fireEvent.click(screen.getByText('Save this recipe'));

    expect(screen.getByText('Please sign up to save recipes.')).toBeInTheDocument();
  });
});
