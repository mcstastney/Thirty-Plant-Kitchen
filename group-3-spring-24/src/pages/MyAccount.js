import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/MyAccount.css';
import '../styles/Recipe.css';
import VegCounter from '../components/VegCounter';
import { logout } from '../redux/customerSlice';
import FarmersMarket from '../assets/stock-imgs/cooking.jpg';


// Functional component uses 'useSelector' hook to get user info from redux store
export default function MyAccount() {
  const customerId = useSelector((state) => state.user.customerId);
  const firstName = useSelector((state) => state.user.firstName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 'useState' hook to create state variable savedRecipes, initialized as empty array, 
  // and function 'setSavedRecipes' to update it
  const [savedRecipes, setSavedRecipes] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(false);
  // State to toggle saved recipes visibility
  const [showRecipes, setShowRecipes] = useState(false);

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
      const data = await response.json();
      setSavedRecipes(data);
      console.log('Recipes returned:', data, 'for customerId:', customerId);
    } catch (error) {
      console.error('Error fetching saved recipes:', error);
    } finally {
      setLoading(false);
    }
  };

   // Function to log user out and redirect to homepage
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  // Function to toggle the visibility of saved recipes
  const handleToggleRecipes = () => {
    if (!showRecipes) {
      fetchSavedRecipes();
    }
    setShowRecipes(!showRecipes);
  };


  return (
    <div id="MyAccount">
      
      <div className='account-intro-container'>

      {/* Display the user's firstname from state */}
      <h2>Welcome to the club, {firstName}!</h2>
      <img src={FarmersMarket} alt='Couple cooking' className='intro-img'/>
      </div>
              
      <div className="cards-container">
      <div className="faves-card">
        <h3>Save your faves!</h3>
        <p>As a member of the Thirty Plant Kitchen club, you can save up to 100 recipes to your account.</p>
        
        {/* Conditional function to toggle save/hide recipes button */}
        <button onClick={handleToggleRecipes}>
          {showRecipes ? 'Hide your recipes' : 'View your recipes'}
        </button>

        <Link to="/Recipes">
          <button className="inspo-btn" type="button">Search recipes</button>
        </Link>

        {/* Conditional function to show recipes if there are any saved */}
        {showRecipes && savedRecipes.length > 0 && savedRecipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <h3>{recipe.label}</h3>
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <h4>Servings: {recipe.servings}</h4>
            <button>
              <a href={recipe.url} target="_blank" rel="noopener noreferrer">Full Recipe</a>
            </button>
          </div>
        ))}
      </div>

      <div className="counter-card">
          <VegCounter />
      </div>
    </div>
  </div>
  );
}
  