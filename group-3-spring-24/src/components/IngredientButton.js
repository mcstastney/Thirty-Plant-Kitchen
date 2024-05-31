import React from 'react';
import Button from '@mui/material/Button';

// Function dynamically creates a button element with the ingredient's name.
const IngredientButton = ({ ingredient, isSelected, onClick }) => {
    return (
      <Button
        variant={isSelected ? 'contained' : 'outlined'}
        color={isSelected ? 'primary' : 'default'}
        // Set the button's class name to ingredient-button, and conditionally add the selected class if isSelected is true.
        // className={`ingredient-button ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
        style={{
          margin: '1rem',
          padding: '10px',
          borderRadius: '5px',
        }}
        >
        {ingredient}
      </Button>
    );
  };

export default IngredientButton;