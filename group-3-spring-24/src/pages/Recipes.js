
import React, { useState, useEffect} from 'react';
import '../styles/Recipe.css';
// Import components used within the recipe page
import MonthSelector from '../components/MonthSelector';
import InSeasonItems from '../components/InSeasonItems'; // Updated import
import RecipeList from '../components/RecipeList';
import RecipeInfoCard from '../components/RecipeInfoCard';
import CircularProgressWithLabel from '../components/ProgressTracker';
// Import images
import FarmersMarket from '../assets/stock-imgs/farmers-market.jpg';
import Seasonal from '../assets/stock-imgs/seasonal.jpg';
import Ingredients from '../assets/stock-imgs/ingredients.jpg';
import Cooking from '../assets/stock-imgs/cooking.jpg';
// Import MUI elements
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
// Import icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import RestaurantIcon from '@mui/icons-material/Restaurant';


const Recipes = () => {
  // Create state variable constants for in-season veg (ingredients)/fruit/selected veg/selected fruit
  const [inSeasonIngredients, setInSeasonIngredients] = useState([]);
  const [inSeasonFruits, setInSeasonFruits] = useState([]);
  const [inSeasonLegumes, setInSeasonLegumes] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [selectedLegumes, setSelectedLegumes] = useState([])
  const [loading, setLoading] = useState(false); // State for loading status
  const [recipes, setRecipes] = useState([]);
  const [month, setMonth] = useState(''); // State for selected month
  const [searchClicked, setSearchClicked] = useState(false);
  const [firstTimeSelect, setFirstTimeSelect] = useState(false);
  const [showNoRecipesMessage, setShowNoRecipesMessage] = useState(false);



// Function to fetch in-season ingredients (veg/fuit) from DB by selected month
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
      setLoading(false); // Set loading state to false when fetch complete
    })

    // Log to console if errors occur during data fetch
    .catch(error => {
      console.error('Error fetching in-season items:', error);
      setLoading(false);
    });
};

// Function to track the selection of veg/fruit/legumes
// Allows user to select/deselect veg/fruit/legumes
const toggleSelection = (setSelectedItems) => (item) => {
  setSelectedItems(prevSelected =>

    // Check if ingredient already selected
    prevSelected.includes(item) 

      // If ingredient selected, remove from list
      ? prevSelected.filter(selectedItem => selectedItem !== item) 

      // If ingredient not selected, add to list
      : [...prevSelected, item] 
  );
};

const toggleIngredient = toggleSelection(setSelectedIngredients);
const toggleFruit = toggleSelection(setSelectedFruits);
const toggleLegumes = toggleSelection(setSelectedLegumes);
  
  // Function to fetch recipes based on selected ingredients
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

            // Compile multiple lists (i.e. veg list/fruit list) into a singular list
            // Create new array to store all recipes
            const combinedRecipes = [];

            // Create new set to keep track of unique recipes to avoid duplicated
            const recipeIds = new Set();

            let index = 0;
            // Create flag to tracks if all recipes have been considered
            let allEmpty = false;

            // Create loop which will continue while allEmpty is false (i.e. there are still recipes to consider)
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

                            // Finally add recipe to list of combined recipes
                            combinedRecipes.push(hit); 
                        }
                        // Set flag to false since at least one result array is not empty
                        allEmpty = false; 
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

  // Function to reload the page when the "Reset Form" button is clicked
  const handleResetForm = () => {
    window.location.reload();
  };

  // Changes in selected month (afer initial selection) will trigger reload of page 
  useEffect(() => {
    if (firstTimeSelect) {
      setFirstTimeSelect(false);
    } else if (searchClicked && month !== '') {
      handleResetForm();

      // Reset searchClicked to false after reload
      setSearchClicked(false); 
    }
  }, [month]);


  // jsx return
  return (
    <>
    <div className='recipe-intro-container'>
      <div className='recipe-intro-txt'>
      <Typography variant='h2' color={'secondary'}>What's in season?</Typography>
      <Typography variant='body1'>Whether it's vibrant salads bursting with summer produce, cosy soups perfect for chilly autumn evenings, hearty stews to warm up winter nights, or light and refreshing dishes to welcome spring, we have something for every palate and occasion.</Typography>
      <RestaurantIcon sx={{ fontSize: 50 }}/>
      </div>
      <img 
        src={FarmersMarket} 
        alt='Farmers market full of fresh produce'
        className='recipe-intro-img'
        />
    </div>

    <div className='info-card-container'>
    <RecipeInfoCard
    className="info-card"
    image= {Seasonal}
    alt="Produce in focus"
    title="Choose Your Season"
    text="Select the month of your choosing to see a pick of delicious, fresh ingredients that will be at their best during that time."
    />
    
    {/* arrow icons to create a visual flow */}
    <ArrowRightAltIcon color="secondary" sx={{ fontSize: 80 }}/>

    <RecipeInfoCard 
    className="info-card"
    image= {Ingredients}
    alt="A selection of fresh produce on a surface"
    title="Pick your favourite ingredients"
    text="You'll get the chance to select some of your favourite ingredients that you'd love to cook with."
    />

    <ArrowRightAltIcon color="secondary" sx={{ fontSize: 80 }}/>

    <RecipeInfoCard
    className="info-card" 
    image= {Cooking}
    alt="A couple cooking together"
    title="Scroll through delicious recipes!"
    text="With the click of a button you'll be presented with a curated selection of recipes containing your chosen seasonal ingredients."
    />

    </div>
     
     
     {/* recipe section */}
     
    <div className="recipe-body">
      <Typography variant='h2' color='secondary'>Seasonal Recipe Finder</Typography>
      <MonthSelector
        month={month}
        setMonth={setMonth}
        handleSubmit={handleSubmit}
      />

      {/* Check if search button is clicked and month is selected */}
      {searchClicked && month && (
        <Button
          onClick={handleResetForm}
          style={{
            margin: '1rem',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          Reset
        </Button>
      )}


      {/* If data is loading, display progress % with label*/}
      {loading ? (
        <CircularProgressWithLabel />
      ) : (
        <div>
          
          {/* Check if search button is clicked and month is selected */}
          {searchClicked && month && (
            <>
            <Typography variant='subtitle1' color='secondary' style={{fontSize: '1.6rem'}}>{`These ingredients will be in season in ${month.charAt(0).toUpperCase() + month.slice(1)}.`}</Typography>
            <Typography variant='subtitle2' style={{fontSize: '1.2rem'}}>Select ingredients to include in your recipe search:</Typography>
            
            {/* Render InSeasonItems component for veg */}
            <div className='ingredient-category'>
              <InSeasonItems
                title={'Vegetables'}
                items={inSeasonIngredients}
                selectedItems={selectedIngredients}
                toggleItem={toggleIngredient}
              />
            </div>
              
            {/* Render InSeasonItems component for fruit */}
            <div className='ingredient-category'>
              <InSeasonItems
                title={'Fruits'}
                items={inSeasonFruits}
                selectedItems={selectedFruits}
                toggleItem={toggleFruit}
              />
            </div>
            <div className='ingredient-category'>
              <InSeasonItems
                title={'Legumes'}
                items={inSeasonLegumes}
                selectedItems={selectedLegumes}
                toggleItem={toggleLegumes}
              />
            </div>
              
              {/* Button for generating recipes */}
              <Button
                onClick={fetchRecipes}
                disabled={[...selectedIngredients, ...selectedFruits, ...selectedLegumes].length === 0} // Button is disabled when there are no ingredients from any category selected
              >
                Generate Recipes
              </Button>
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
    </>
  );
};

export default Recipes;
