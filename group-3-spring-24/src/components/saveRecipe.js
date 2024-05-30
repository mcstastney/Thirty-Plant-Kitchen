import React, { useState,  useContext } from 'react'; 

// 'UserContext' used to share data (customerId) with other components
import { UserContext } from './UserContext';


// Asynchronous function takes two arguments: objects representing current user and recipe to be saved
export const handleSaveRecipe = async (user, recipe) => {

  // If user does not exist, log error
  if (!user || !user.customerId) {
    console.error('Customer ID is missing');
    return;
  }

  // Create new object that formats recipe data to be sent to server
  const savedRecipe = {
    customer_id: user.customerId,
    label: recipe.label,
    url: recipe.url,
    ingredients: recipe.ingredientLines.join(', '),
    servings: recipe.yield
  };

  // Log successful save with customerId
  console.log('Saving recipe with customer ID:', user.customerId);

  // 'fetch' function to send PUT request to server via '/save-recipe' endpoint with savedRecipe data
  try {
    const response = await fetch(`http://localhost:5000/save-recipe`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(savedRecipe)
    });

    // If request successful, convert response to JSON and log result
    const result = await response.json();
    console.log('Recipe saved:', result);
    
  } catch (error) {
    console.error('Error saving recipe:', error);
  }
};
