import React from 'react';

// Function to either return list of ingredients or a message that there are no recipes using selected ingredients
const RecipeList = ({ loading, recipes, showNoRecipesMessage }) => (
  <div>
    {loading ? (
     // Display a message indicating that recipes are still loading
      <p>Loading recipes...</p>
    ) : recipes.length > 0 ? (
     // If there are recipes available, display each recipe
      recipes.map((hit, index) => {
        const recipe = hit.recipe;
        return (
        // Display details of each recipe inside a container
          <div>
            <h2>{recipe.label}</h2>
            <img src={recipe.image} alt={recipe.label} />
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
    // Display a message indicating no recipes were found
    ) : showNoRecipesMessage && (
      <p>No recipes found. Try selecting different ingredient.</p>
    )}
  </div>
);

export default RecipeList;
