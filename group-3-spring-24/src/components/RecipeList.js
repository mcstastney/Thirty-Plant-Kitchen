import React, { useContext } from 'react';
import '../styles/Recipe.css';
import {handleSaveRecipe} from './saveRecipe';
import CircularProgressWithLabel from '../components/ProgressTracker';

// 'UserContext' used to share data (customerId) with other components
import { UserContext } from './UserContext';

// Function to return list of recipes or no recipes message
const RecipeList = ({ loading, recipes, showNoRecipesMessage }) => {
  const { user } = useContext(UserContext);
  
  return (
  <div className="recipe-body">
    {loading ? (
     
     // Display progress wheel with %
     <CircularProgressWithLabel />
    ) : recipes.length > 0 ? (
     
      // If recipes available, display each recipe
      recipes.map((hit, index) => {
        const recipe = hit.recipe;
        return (
        
          // Display details of each recipe inside a container
          <div>
            <h2>{recipe.label}</h2>
            <div class="recipe-image-container">
              <img src={recipe.image}  alt={recipe.label} />
            </div>
            <p>Ingredients:</p>
            <ul>
              {recipe.ingredientLines.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <p>Servings: {recipe.yield}</p>
            <button className="results-button"><a href={recipe.url} target="_blank" rel="noopener noreferrer">
                  Full Recipe
                </a></button>
                <button className="save-button" onClick={() => handleSaveRecipe(user, recipe)}>
                  Save this recipe
                  </button>
          </div>
        );
      })
    // Display no recipes found message
    ) : showNoRecipesMessage && (
      <p>No recipes found for selected ingredients. Try selecting a different ingredient!</p>
    )}
  </div>
);
};

export default RecipeList;
