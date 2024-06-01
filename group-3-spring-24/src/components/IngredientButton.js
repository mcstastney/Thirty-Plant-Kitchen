import React from 'react';

// Function dynamically creates a button element with the ingredient's name.
const IngredientButton = ({ ingredient, isSelected, onClick }) => {
    return (
      <button
        type="button"
        // Set the button's class name to ingredient-button, and conditionally add the selected class if isSelected is true.
        className={`ingredient-button ${isSelected ? 'selected' : ''}`}
        onClick={onClick}>
        {ingredient}
      </button>
      
    );
  };

export default IngredientButton;