
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
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [loading, setLoading] = useState(false); // State for loading status
  const [recipes, setRecipes] = useState([]);
  const [month, setMonth] = useState(''); // State for selected month
  const [showNoRecipesMessage, setShowNoRecipesMessage] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);

// Function for fetching in-season ingredients (veg/fuit) from DB based on selected month
const fetchInSeasonItems = () => {
  setLoading(true);

  // Fetch the in-season vegetables based on the chosen month
  fetch(`http://localhost:5000/api/seasonal-produce?month=${month}`)
      // Handle response
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');}
          //  If there is no error (response is okay), parse response as JSON
          return response.json();
      })
      .then(ingredientsData => {
          setInSeasonIngredients(ingredientsData.produce); // Update state with the in-season veg data
          // Fetch the in-season fruits based on the chosen month
          return fetch(`http://localhost:5000/api/seasonal-fruits?month=${month}`);
      })
      // Handle response
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');}
          //  If there is no error (response is okay), parse response as JSON
          return response.json();
      })
      .then(fruitsData => {
          setInSeasonFruits(fruitsData.fruits); // Update state with the in-season fruit data
          setLoading(false); // Update loading state to false - data fetching is complete
      })
      .catch(error => {
          console.error('Error fetching in-season items:', error);
          setLoading(false);
      });
};
// Function to track the selection of veg
// Allows user to select/deselct veg as desired
  const toggleIngredient = (ingredient) => {
    setSelectedIngredients(prevSelected =>
      prevSelected.includes(ingredient) // Check if veg is already selected
        ? prevSelected.filter(item => item !== ingredient) // If veg is selected, remove it from list
        : [...prevSelected, ingredient] // If veg is not selected, add it to list
    );
  };
  // Function to track selection of fruit (Same functionality as above)
  const toggleFruit = (fruit) => {
    setSelectedFruits(prevSelected =>
      prevSelected.includes(fruit)
        ? prevSelected.filter(item => item !== fruit)
        : [...prevSelected, fruit]
    );
  };


  //   // Function to return recipes based on the selected ingredients, commented out as this function was returning recipes including ALL selected ingredients
//   // const fetchRecipes = () => {
//   //   setLoading(true);
//   //   const query = selectedIngredients.join(',');
//   //   fetch(`http://127.0.0.1:5000/recipes?q=${query}`)
//   //     .then(response => {
//   //       if (!response.ok) {
//   //         throw new Error('Network response was not ok');
//   //       }
//   //       return response.json();
//   //     })
//   //     .then(data => {
//   //       setRecipes(data.hits);
//   //       // Set state to show message if no recipes found
//   //       if (data.hits.length === 0) {
//   //         setShowNoRecipesMessage(true);
//   //       }
//   //       setLoading(false);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error fetching data:', error);
//   //       setLoading(false);
//   //     });
//   // };

  
  // Function to fetch recipes based on the selected ingredients
  const fetchRecipes = () => {
    setLoading(true);

    // Fetch recipes for each selected veg/fruit
    const queries = [...selectedIngredients, ...selectedFruits].map(item => {
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
              {/* Button for generating recipes */}
              <button
                className="generate-button"
                type="button"
                onClick={fetchRecipes}
                disabled={[...selectedIngredients, ...selectedFruits].length === 0} // Button is disabled when there are no ingredients from any category selected
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

