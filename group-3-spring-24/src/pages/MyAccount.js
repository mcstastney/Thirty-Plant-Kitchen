import React, { useState, useContext } from 'react';
import { UserContext } from '../components/UserContext';
import '../styles/Recipe.css';
import VegCounter from '../components/VegCounter';

function MyAccount() {
  const { user } = useContext(UserContext);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const fetchSavedRecipes = async () => {
    if (!user || !user.customerId) {
      console.error('Customer ID is missing');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/view-saved-recipes?customer_id=${user.customerId}`);
      const data = await response.json();
      setSavedRecipes(data);
    } catch (error) {
      console.error('Error fetching saved recipes:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to your account, {user && user.firstName}!</h1>
      <p>Thank you for registering with us.</p>
      <h2>Your Saved Recipes</h2>
      <button onClick={fetchSavedRecipes}>Get saved recipes</button>
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

export default MyAccount;
