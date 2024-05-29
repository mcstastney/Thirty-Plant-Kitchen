import React, { useState, useContext } from 'react';
// 'UserContext' used to share data (customerId) with other components
import { UserContext } from '../components/UserContext';
import '../styles/Recipe.css';
import VegCounter from '../components/VegCounter';


// Functional component uses 'useContext' hook to get user object from UserContext
export default function MyAccount() {
  const { user } = useContext(UserContext);

  // 'useState' hook to create state variable savedRecipes, initialized as empty array, and function 'setSavedRecipes' to update it
  const [savedRecipes, setSavedRecipes] = useState([]);

  // Asynchronous function to fetch saved recipes for the user
  const fetchSavedRecipes = async () => {

    // If user does not exist, log error
    if (!user || !user.customerId) {
      console.error('Customer ID is missing');
      return;
    }

      // 'fetch' function to send GET request to server via '/view-saved-recipes' endpoint with customerId
    try {
      const response = await fetch(`http://localhost:5000/view-saved-recipes?customer_id=${user.customerId}`);

      // If request successful, convert response to JSON and log result
      const data = await response.json();
      setSavedRecipes(data);
      console.log('Recipes returned:', data, 'for customerId:', user.customerId);
      
    } catch (error) {
      console.error('Error fetching saved recipes:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to your account, {user && user.firstName}!</h1>
      <p>Thank you for registering with us.</p>
      <h2>Your Saved Recipes</h2>

      <button onClick={fetchSavedRecipes}>
        Get saved recipes
      </button>

      {/* If there are saved recipes, map savedRecipes array to display each recipe
      For each recipe, display label (name), ingredients, servings and link to full recipe / instructions */}
      {savedRecipes.length > 0 ? (
        savedRecipes.map((recipe, index) => (
          <div key={index}>
            <h3>{recipe.label}</h3>
            <p>Ingredients:</p>
            <ul>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <p>Servings: {recipe.servings}</p>
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">Full Recipe</a>
          </div>
        ))
      ) : (
        <p>You have no saved recipes.</p>
      
      )}
      <VegCounter/>  
    </div>
  );
}
