import React, { useState, useContext } from 'react'; 
import '../styles/Recipe.css';
import { UserContext } from '../components/UserContext';

function RecipesElisa() {
  const { user } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRecipes = (ingredient) => {
    setLoading(true);
    fetch(`http://127.0.0.1:5000/recipes?q=${ingredient}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRecipes(data.hits);
        setLoading(false);
        // Updates 'recipes' state with fetched data and set loading to false
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
        // Catch errors during fetch process, log to console, sets loading to false
      });
  };

  const handleSubmit = (e) => {
    //  Function to handle form submission. e = event
    e.preventDefault();
    // Prevent default form submission behaviour
    fetchRecipes(query);
    // Call fetchRecipes with current query state
  };

  const handleSaveRecipe = async (recipe) => {
    if (!user || !user.customerId) {
      console.error('Customer ID is missing');
      return;
    }

    const savedRecipe = {
      customer_id: user.customerId, 
      label: recipe.label,
      url: recipe.url,
      ingredients: recipe.ingredientLines.join(', '),
      servings: recipe.yield
    };

    try {
      const response = await fetch(`http://localhost:5000/save-recipe`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(savedRecipe)
      });
      const result = await response.json();
      console.log('Recipe saved:', result);
    } catch (error) {
      console.error('Error saving recipe:', error);
    }
  };


  return (
    <div className="recipe-body">
      <h1>Recommended recipes</h1>
      <form onSubmit={handleSubmit}>
        {/* // Form element with an onSubmit handler set to handleSubmit */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter an ingredient"
          // Input field for user to enter ingredient
          // Uses 'query' state as its value and updates the state on change
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        // Conditional rendering based on the loading state and recipes array
        <p>Loading recipes...</p>
        // If loading true, display loading message
      ) : (
        recipes.length > 0 ? (
          recipes.map((hit, index) => {
            // If loading false, map recipes array and render each recipe's details
            // Our app.py file contains the data/arguements we've chosen to collect from API (label, image, etc)
            const recipe = hit.recipe;
            return (
              <div key={index}>
                <h2>{recipe.label}</h2>
                <p>Ingredients:</p>
                <ul className="recipe-items">
                  {recipe.ingredientLines.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
                <p>Servings: {recipe.yield}</p>
                <button className="results-button"><a href={recipe.url} target="_blank" rel="noopener noreferrer">
                  Full Recipe
                </a></button>
                <button className="save-button" onClick={() => handleSaveRecipe(recipe)}>
                  Save this recipe
                  </button>
              </div>
            );
          })
        ) : (
          <p>No recipes found. Try a different ingredient.</p>
        )
      )}
    </div>
  );
}

export default RecipesElisa;
