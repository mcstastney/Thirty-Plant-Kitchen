import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import VegCounter from '../components/VegCounter';



// Functional component uses 'useSelector' hook to get user info from redux store
export default function MyAccount() {
  const customerId = useSelector((state) => state.user.customerId);
  const firstName = useSelector((state) => state.user.firstName);

  // 'useState' hook to create state variable savedRecipes, initialized as empty array, and function 'setSavedRecipes' to update it
  const [savedRecipes, setSavedRecipes] = useState([]);

  // State to track loading status
  const [loading, setLoading] = useState(false); 

  // Asynchronous function to fetch saved recipes for the user
  const fetchSavedRecipes = async () => {

    // Set loading to true before making the API call
    setLoading(true); 

    // If user does not exist, log error
    if (!customerId) {
      console.error('Customer ID is missing');
      setLoading(false);
      return;
    }

      // 'fetch' function to send GET request to server via '/view-saved-recipes' endpoint with customerId
      try {
        const response = await fetch(`http://localhost:5000/view-saved-recipes?customer_id=${customerId}`);
  
        // If request successful, convert response to JSON and log result
        const data = await response.json();
        setSavedRecipes(data);
        console.log('Recipes returned:', data, 'for customerId:', customerId);
        
      } catch (error) {
        console.error('Error fetching saved recipes:', error);
      } finally {
              setLoading(false);
      }
    };
  
    return (
      <div>
        <h1>Welcome to your account, {firstName}!</h1>
        <p>Thank you for registering with Thirty Plant Kitchen.</p>
        <button onClick={fetchSavedRecipes}>
          View your recipes
        </button>

        {savedRecipes.length > 0 && savedRecipes.map((recipe, index) => (
            <div key={index}>
              <h3>{recipe.label}</h3>
              <p>Ingredients:</p>
              <ul>
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <p>Servings: {recipe.servings}</p>
              <button><a href={recipe.url} target="_blank" rel="noopener noreferrer">Full Recipe</a></button>
            </div>
          ))}
          
        <br></br>
        <h2>Looking for inspiration?</h2>
        <p>Search our library for seasonal recipes.</p>
        <Link to="/Recipes">
          <button type="button">Search recipes</button>
        </Link>
        <div className = 'counter'>
        <VegCounter/>  
        </div>
        
      </div>
    );
  }
  