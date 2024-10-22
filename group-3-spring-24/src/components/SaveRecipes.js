// Asynchronous function takes two arguments: current user and recipe to save
export const handleSaveRecipe = async (customerId, recipe) => {

    // If user does not exist, log error
    if (!customerId) {
      console.error('Customer ID is missing');
      return;
    }
  
    // Create new object that formats recipe data to be sent to server
    const savedRecipe = {
      customer_id: customerId,
      label: recipe.label,
      url: recipe.url,
      ingredients: recipe.ingredientLines.join(', '),
      servings: recipe.yield
    };
  
    // 'fetch' request to send recipe data to server via '/save-recipe' endpoint / PUT request 
    try {
      const response = await fetch(`http://localhost:5000/save-recipe`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(savedRecipe)
      });
  
      // If request successful, convert response to JSON and log result
      if (response.ok) {
        const result = await response.json();
        console.log('Recipe saved:', result);
        return { success: true };
      } else {
        // If request unsuccessful, log error
        console.error('Failed to save recipe:', response.statusText);
        return { success: false };
      }
    } catch (error) {
      console.error('There was an error saving the recipe:', error);
      return { success: false };
    }
  };
  