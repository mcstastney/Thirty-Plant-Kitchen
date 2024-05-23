import React, { useState } from 'react';
import '../styles/Recipe.css';
import MonthSelector from '../components/MonthSelector';
import InSeasonIngredients from '../components/InSeasonIngredients';
import RecipeList from '../components/RecipeList';


const Recipes = () => {
  // State to store in-season ingredients
  const [inSeasonIngredients, setInSeasonIngredients] = useState([]);
  // State to store selected ingredients
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  // State to store loading status
  const [loading, setLoading] = useState(false);
  // State to store returned recipes
  const [recipes, setRecipes] = useState([]);
  // State to store the selected month
  const [month, setMonth] = useState('');
  // State to manage whether to show "No recipes found" message
  const [showNoRecipesMessage, setShowNoRecipesMessage] = useState(false);
  // State to manage if search button is clicked
  const [searchClicked, setSearchClicked] = useState(false);

  // Function to fetch the seasonal produce from local API based on the selected month
  const fetchInSeasonIngredients = () => {
    setLoading(true);
    fetch(`http://localhost:5000/api/seasonal-produce?month=${month}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Update in-season state with fetched ingredients
        setInSeasonIngredients(data.produce);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching in-season ingredients:', error);
        setLoading(false);
      });
  };

  // Function for managing the selection/deselection of ingredients
  const toggleIngredient = (ingredient) => {
    setSelectedIngredients(prevSelected => {
      if (prevSelected.includes(ingredient)) {
        return prevSelected.filter(item => item !== ingredient);
      } else {
        return [...prevSelected, ingredient];
      }
    });
  };

  // Function to return recipes based on the selected ingredients
  const fetchRecipes = () => {
    setLoading(true);
    const query = selectedIngredients.join(',');
    fetch(`http://127.0.0.1:5000/recipes?q=${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRecipes(data.hits);
        // Set state to show message if no recipes found
        if (data.hits.length === 0) {
          setShowNoRecipesMessage(true);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  // Function to prevent page reloading upon submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Set state to indicate search button clicked
    setSearchClicked(true); 
    fetchInSeasonIngredients();
  };

  return (
    // Main container for the recipes component
    <div className="recipe-body">
      <h1>Ingredients in Season</h1>
      <MonthSelector
        month={month}
        setMonth={setMonth}
        handleSubmit={handleSubmit}
      />
      {loading ? (
        <p>Loading in-season ingredients...</p>
      ) : (
        <div>
          {searchClicked && month && (
            <h2>These ingredients will be in season in {month.charAt(0).toUpperCase() + month.slice(1)}. Select ingredients to include in your recipe search</h2>
          )}
          <InSeasonIngredients
            ingredients={inSeasonIngredients}
            selectedIngredients={selectedIngredients}
            toggleIngredient={toggleIngredient}
          />
          <button
            className="ingredient-button"
            type="button"
            onClick={fetchRecipes}
            disabled={selectedIngredients.length === 0}
          >
            Generate Recipes
          </button>
          <RecipeList
            loading={loading}
            recipes={recipes}
            showNoRecipesMessage={showNoRecipesMessage}
          />
        </div>
      )}
    </div>
  );
};

export default Recipes;
