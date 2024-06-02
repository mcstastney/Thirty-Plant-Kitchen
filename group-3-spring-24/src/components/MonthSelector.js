import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../styles/Recipe.css';

// Function to create drop down menu with months to allow user to search by month
const MonthSelector = ({ month, setMonth, handleSubmit }) => {
  // Define an array of months which will be used for a drop down menu
  const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="month-label">Select Month</InputLabel>
        <Select
          labelId="month-label"
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          label="Select Month"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {months.map((month, index) => (
            <MenuItem key={index} value={month}>
              {month.charAt(0).toUpperCase() + month.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <button 
      className='search-button'
      type="submit" 
      variant="contained"  
      disabled={!month}>
        Search
      </button>
    </Box>
  );
};

export default MonthSelector;
