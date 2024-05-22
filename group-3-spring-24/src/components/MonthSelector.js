import React from 'react';

// Function to create drop down menu with months to allow user to search by month
const MonthSelector = ({ month, setMonth, handleSubmit }) => {
  // Define an array of months which will be used for a drop down menu
  const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="month">Select Month: </label>
      {/*Select element for choosing month. Update month state when selection changes */}
      <select
        id="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}>
        {/*Blank option at top of drop down menu */}
        <option value=""></option>
        {/*Iterate over the months array, providing option for each month. Format month to have uppercase first letter */}
        {months.map((month, index) => (
          <option value={month}>
            {month.charAt(0).toUpperCase() + month.slice(1)}
          </option>
        ))}
      </select>
      <button type="submit" className="ingredient-button" disabled={!month}>
        Search
      </button>
    </form>
  );
};

export default MonthSelector;
