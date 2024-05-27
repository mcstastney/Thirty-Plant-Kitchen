
import React, { useState } from 'react';
import '../styles/Recipe.css';
// Import components used within the recipe page
import MonthSelector from '../components/MonthSelector';
import InSeasonItems from '../components/InSeasonItems'; // Updated import
import RecipeList from '../components/RecipeList';

const Recipes = () => {
  // Create state variable constants for in-seacon veg (ingredients)/fruit/selected veg/selected fruit
  const [inSeasonIngredients, setInSeasonIngredients] = useState([]);
  const [inSeasonFruits, setInSeasonFruits] = useState([]);
  const [inSeasonLegumes, setInSeasonLegumes] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [selectedLegumes, setSelectedLegumes] = useState([])
  const [loading, setLoading] = useState(false); // State for loading status
  const [recipes, setRecipes] = useState([]);
  const [month, setMonth] = useState(''); // State for selected month
  const [showNoRecipesMessage, setShowNoRecipesMessage] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);

// Function for fetching in-season ingredients (veg/fuit) from DB based on selected month
const fetchInSeasonItems = () => {
  setLoading(true);

  // Fetch recipes for veg/fruits/legumes simultaneously
  Promise.all([
    fetch(`http://localhost:5000/api/seasonal-produce?month=${month}`),
    fetch(`http://localhost:5000/api/seasonal-fruits?month=${month}`),
    fetch(`http://localhost:5000/api/seasonal-legumes?month=${month}`)
  ])
    .then(responses => Promise.all(responses.map(response => response.json()))) // Parse response as json
    .then(data => {
      const [ingredientsData, fruitsData, legumesData] = data;
      // Update states with in-season veg/fruit/legumes
      setInSeasonIngredients(ingredientsData.produce);
      setInSeasonFruits(fruitsData.fruits);
      setInSeasonLegumes(legumesData.legumes);
      setLoading(false); // Set loading state to false since data fetching is complete
    })
    // Print to console if any errors occur during data fetching
    .catch(error => {
      console.error('Error fetching in-season items:', error);
      setLoading(false);
    });
};


// Function to track the selection of veg/fruit/legumes
// Allows user to select/deselct veg/fruit/legumes as desired
const toggleSelection = (setSelectedItems) => (item) => {
  setSelectedItems(prevSelected =>
    prevSelected.includes(item) // Check if ingredient is already selected
      ? prevSelected.filter(selectedItem => selectedItem !== item) // If ingredient is selected, remove it from list
      : [...prevSelected, item] // If ingredient is not selected, add it to list
  );
};

const toggleIngredient = toggleSelection(setSelectedIngredients);
const toggleFruit = toggleSelection(setSelectedFruits);
const toggleLegumes = toggleSelection(setSelectedLegumes);
  
  // Function to fetch recipes based on the selected ingredients
  const fetchRecipes = () => {
    setLoading(true);

    // Fetch recipes for each selected veg/fruit/legume
    const queries = [...selectedIngredients, ...selectedFruits,...selectedLegumes].map(item => {
        return fetch(`http://127.0.0.1:5000/recipes?q=${item}`)
            // Handle response
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse response as JSON
            });
    });

    // Wait until all promises in queries array have resolved (all recipes for each ingredient returned)
    Promise.all(queries)
        // Handle results 
        .then(results => { 
            // So far, there are multiple lists (i.e. veg list/fruit list) - the below code will combine this into a singular list
            // Create new array to store all recipes
            const combinedRecipes = [];
            // Create new set to keep track of unique recipes to avoid duplicated
            const recipeIds = new Set();

            let index = 0;
            // Creata a flag which tracks if all of the recipes have been considered
            let allEmpty = false;
            // Create loop which will continue as long as allEmpty is false (i.e. there are still recipes to consider)
            while (!allEmpty) {
                // Start by assuming all lists of recipes are empty
                allEmpty = true;
                // Loop through each list of recipes that were fetched
                for (const result of results) {
                    // If index is less than length of list of recipes, there are still recipes in the list to consider
                    if (index < result.hits.length) {
                        // Take recipe at index position and store it in 'hit' variable
                        const hit = result.hits[index];
                        // Check if recipe is already in combinedRecipes - if it is new, add URI to recipeIDs set (to help track which have been added)
                        if (!recipeIds.has(hit.recipe.uri)) {
                            recipeIds.add(hit.recipe.uri);
                            combinedRecipes.push(hit); // Finally add recipe to list of combined recipes
                        }
                        allEmpty = false; // Set flag to false since at least one result array is not empty
                    }
                }
                index++;
            }
            
            // Update state with combined recipes
            setRecipes(combinedRecipes);
            // If no recipes were found, set state to show message indicating this
            if (combinedRecipes.length === 0) {
                setShowNoRecipesMessage(true);}
            setLoading(false);
        })
        // Display message to console if error occurs 
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
};
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchClicked(true);
    fetchInSeasonItems();
  };

  return (
    <div className="recipe-body">
      <h1>Seasonal Produce Selector</h1>
      <MonthSelector
        month={month}
        setMonth={setMonth}
        handleSubmit={handleSubmit}
      />
      {/* If data is loading, display loading message */}
      {loading ? (
        <p>Loading in-season items...</p>
      ) : (
        <div>
          {/* Check if search button is clicked and month is selected */}
          {searchClicked && month && (
            <>
            {/* Render InSeasonItems component for veg */}
              <InSeasonItems
                title={`These ingredients will be in season in ${month.charAt(0).toUpperCase() + month.slice(1)}. Select ingredients to include in your recipe search`}
                items={inSeasonIngredients}
                selectedItems={selectedIngredients}
                toggleItem={toggleIngredient}
              />
              {/* Render InSeasonItems component for fruit */}
              <InSeasonItems
                title={`These fruits will be in season in ${month.charAt(0).toUpperCase() + month.slice(1)}. Select fruits to include in your recipe search`}
                items={inSeasonFruits}
                selectedItems={selectedFruits}
                toggleItem={toggleFruit}
              />
              <InSeasonItems
                title={`These legumes will be in season in ${month.charAt(0).toUpperCase() + month.slice(1)}. Select legumes to include in your recipe search`}
                items={inSeasonLegumes}
                selectedItems={selectedLegumes}
                toggleItem={toggleLegumes}
              />
              {/* Button for generating recipes */}
              <button
                className="generate-button"
                type="button"
                onClick={fetchRecipes}
                disabled={[...selectedIngredients, ...selectedFruits, ...selectedLegumes].length === 0} // Button is disabled when there are no ingredients from any category selected
              >
                Generate Recipes
              </button>
              <RecipeList
                loading={loading}
                recipes={recipes}
                showNoRecipesMessage={showNoRecipesMessage}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Recipes;

