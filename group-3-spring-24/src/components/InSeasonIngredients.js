import React from 'react';
import IngredientButton from './IngredientButton';

// Function creates button for each ingredient and handles their selection
const InSeasonIngredients = ({ ingredients, selectedIngredients, toggleIngredient }) => {
    return (
      <div className="ingredients-box">
        {/* Iterate through the ingredients array and return each ingredient as a button*/}
        {ingredients.map((ingredient) => (
          <IngredientButton
            ingredient={ingredient}
            // Check if current ingredient is selected by checking if it is in the array
            isSelected={selectedIngredients.includes(ingredient)}
            // When button is clicked, call toggleIngredient function with the current ingredients
            onClick={() => toggleIngredient(ingredient)}
          />
        ))}
      </div>
    );
  };

export default InSeasonIngredients;