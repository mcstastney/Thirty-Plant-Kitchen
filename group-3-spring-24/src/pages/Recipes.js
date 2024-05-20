import React, { useEffect, useState } from 'react'; 
// Import React library and hooks useEffect and useState
import '../styles/Recipe.css';
// Import our CSS styles for the Recipe component

function Recipes() {
  // Declare state variables using the useState hook
  const [recipes, setRecipes] = useState([]);
  // Array to store the fetched recipes and function to update the recipes state
  const [query, setQuery] = useState('');
  // String to store the search query input by the user and function to update the query state
  const [loading, setLoading] = useState(false);
  // Boolean to indicate whether the data is being fetched and function to update the loading state

  const fetchRecipes = (ingredient) => {
    // Function that takes an ingredient as an argument
    setLoading(true);
    // Sets loading state to true to indicate data fetching in progress
    fetch(`http://127.0.0.1:5000/recipes?q=${ingredient}`)
    // Fetch request to local server endpoint, including ingredient in query parameters
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
          // Checks if response okay, if not throws error
        }
        return response.json();
        // If ok, parses the response as JSON
      })
      .then(data => {
        setRecipes(data.hits);
        setLoading(false);
        // Updates 'recipes' state with fetched data and sets loading to false
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
    // Prevents default form submission behaviour
    fetchRecipes(query);
    // Calls fetchRecipes with current query state
  };

  return (
    <div className="recipe-body">
      <body>
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
                <img src={recipe.image}></img>
                <p>Ingredients:</p>
                <ul>
                  {recipe.ingredientLines.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
                <p>Servings: {recipe.yield}</p>
                <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                  Full Recipe
                </a>
              </div>
            );
          })
        ) : (
          <p>No recipes found. Try a different ingredient.</p>
        )
      )}
    </body>
    </div>
  );
}

export default Recipes;
