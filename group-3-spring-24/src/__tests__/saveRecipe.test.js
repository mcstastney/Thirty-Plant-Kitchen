import { handleSaveRecipe } from '../path/to/handleSaveRecipe'; // Update the path to the handleSaveRecipe function

describe('handleSaveRecipe', () => {
  beforeEach(() => {
    // Mock fetch to return a resolved Promise with JSON data
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: 'Recipe saved successfully' }),
    });
  });

  test('saves recipe successfully', async () => {
    const customerId = '123';
    const recipe = {
      label: 'Test Recipe',
      url: 'http://example.com',
      ingredientLines: ['Ingredient 1', 'Ingredient 2'],
      yield: 4,
    };
    const result = await handleSaveRecipe(customerId, recipe);
    expect(result.success).toBe(true);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/save-recipe', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer_id: customerId,
        label: recipe.label,
        url: recipe.url,
        ingredients: recipe.ingredientLines.join(', '),
        servings: recipe.yield,
      }),
    });
  });

  test('returns false if customer ID is missing', async () => {
    const customerId = null;
    const recipe = {
      label: 'Test Recipe',
      url: 'http://example.com',
      ingredientLines: ['Ingredient 1', 'Ingredient 2'],
      yield: 4,
    };
    const result = await handleSaveRecipe(customerId, recipe);
    expect(result.success).toBe(false);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test('returns false if request fails', async () => {
    const customerId = '123';
    const recipe = {
      label: 'Test Recipe',
      url: 'http://example.com',
      ingredientLines: ['Ingredient 1', 'Ingredient 2'],
      yield: 4,
    };
    global.fetch.mockResolvedValueOnce({ ok: false, statusText: 'Internal Server Error' });
    const result = await handleSaveRecipe(customerId, recipe);
    expect(result.success).toBe(false);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test('returns false if there is an error during fetch', async () => {
    const customerId = '123';
    const recipe = {
      label: 'Test Recipe',
      url: 'http://example.com',
      ingredientLines: ['Ingredient 1', 'Ingredient 2'],
      yield: 4,
    };
    global.fetch.mockRejectedValueOnce(new Error('Network Error'));
    const result = await handleSaveRecipe(customerId, recipe);
    expect(result.success).toBe(false);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
