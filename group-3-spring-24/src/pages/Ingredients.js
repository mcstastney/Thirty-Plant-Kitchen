import React, { useState } from 'react';

const PlantSearch = () => {
    const [monthName, setMonthName] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log('Searching for season:', monthName);
        try {
            const response = await fetch(`http://127.0.0.1:5000/search?month=${monthName}`);
            if (response.ok) {
                const data = await response.json();
                console.log('Response data:', data); // Debug log
                setResults(data);
            } else {
                console.error('Error fetching data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Seasonal plants selector</h1>
            <form onSubmit={handleSearch}>
                <label>Which season would you like to search?</label>
                <br></br>
                <input 
                    type="text" 
                    value={monthName} 
                    onChange={(e) => setMonthName(e.target.value)} 
                    placeholder="Enter a month" 
                />
                <br></br>
                <button type="submit">Search</button>
            </form>
            <div>
                
                {results.length > 0 ? (
                    <>
                    <h3>Plants in season in {monthName}:</h3>
                    <ul>
                        {results.map((month, index) => (
                            <li key={index}>
                                {month.plant_name}
                            </li>
                        ))}
                    </ul>
                    </>
                ) : (
                    <p>Search above</p>
                )}
            </div>
        </div>
    );
};

export default PlantSearch;
