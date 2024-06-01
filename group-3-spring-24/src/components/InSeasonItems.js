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
