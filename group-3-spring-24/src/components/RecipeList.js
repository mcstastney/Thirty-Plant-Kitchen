import React, { useState } from "react";
import "../styles/Recipe.css";
import { handleSaveRecipe } from "./saveRecipe";
import CircularProgressWithLabel from "../components/ProgressTracker";
import { Link } from "react-router-dom";
// Import useSelector hook from react-redux to access the customerId state
import { useSelector } from 'react-redux';

// Function to return list of recipes or no recipes message
const RecipeList = ({ loading, recipes, showNoRecipesMessage }) => {
  // Use useSelector to get the customerId from the Redux store
  const customerId = useSelector((state) => state.user.customerId);
  const [savedRecipes, setSavedRecipes] = useState({});

  // Asynchronous function to check if recipe already saved by user to savedRecipes state
  const saveRecipe = async (customerId, recipe) => {
    // recipe.uri is a unique identifier for each recipe
    if (savedRecipes[recipe.uri]) {
      return;
    }

  // Asynchronous function to call handleSaveRecipe
  const result = await handleSaveRecipe(customerId, recipe);
    if (result.success) {
      // Spreads properties of previous state (...prev), preserving all existing saved recipes
      setSavedRecipes((prev) => ({
        ...prev,
        // Add new property to state object with key recipe.uri and set value true
        [recipe.uri]: true
      }));
    }
  };

  return (
    <div className="recipe-body">
      {loading ? (
        // Display progress wheel with %
        <CircularProgressWithLabel />
      ) : recipes.length > 0 ? (
        // If recipes available, display each recipe
        recipes.map((hit, index) => {
          const recipe = hit.recipe;
          const isSaved = savedRecipes[recipe.uri];

          return (
            // Display details of each recipe inside a container
            <div key={recipe.uri}>
              <h2>{recipe.label}</h2>
              <div class="recipe-image-container">
                <img src={recipe.image} alt={recipe.label} />
              </div>
              <p>Ingredients:</p>
              <ul>
                {recipe.ingredientLines.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <p>Servings: {recipe.yield}</p>
              <button className="results-button">
                <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                  Full Recipe
                </a>
              </button>

              <button
                className="save-button"
                tyle={{
                backgroundColor: isSaved ? "#283618" : "#606C38",
                color: "#FEFAE0"
                }}
                onClick={() => saveRecipe(customerId, recipe)}>
                {isSaved ? "Recipe saved" : "Save this recipe"}
              </button>

              <br></br>
              
            {isSaved && (
                <button className="view-saved">
                  <Link to="/MyAccount">View saved recipes</Link>
                </button>
              )}
            </div>
          );
        })
      ) : (
        // Display no recipes found message
        showNoRecipesMessage && (
          <p>
            No recipes found for selected ingredients. Try selecting a different
            ingredient!
          </p>
        )
      )}
    </div>
  );
};

export default RecipeList;
