// import React from 'react';
// import IngredientButton from './IngredientButton';


// // Function creates button for each ingredient and handles their selection
// const inSeasonIngredients = ({ ingredients, selectedIngredients, toggleIngredient }) => {
//     return (
//       <div className="ingredients-box">
//         {/* Iterate through the ingredients array and return each ingredient as a button*/}
//         {ingredients.map((ingredient) => (
//           <IngredientButton
//             ingredient={ingredient}
//             // Check if current ingredient is selected by checking if it is in the array
//             isSelected={selectedIngredients.includes(ingredient)}
//             // When button is clicked, call toggleIngredient function with the current ingredients
//             onClick={() => toggleIngredient(ingredient)}
//           />
//         ))}
//       </div>
//     );
//   };

// export default inSeasonIngredients;

import React from 'react';
import IngredientButton from './IngredientButton';
import '../styles/Recipe.css';

const InSeasonItems = ({ title, items, selectedItems, toggleItem }) => {
  return (
    <div className="items-box">
      <h4>{title}</h4>
      {items.map((item) => (
        <IngredientButton
          key={item}
          ingredient={item}
          isSelected={selectedItems.includes(item)}
          onClick={() => toggleItem(item)}
        />
      ))}
    </div>
  );
};

export default InSeasonItems;
