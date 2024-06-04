import React from 'react';
import Button from '@mui/material/Button';

const ScrollButton = () => {
    const handleClick = () => {
        
        const element = document.getElementById('signup-form'); 
        const offset = 0; // Set the distance from the top of the page in pixels
        window.scrollTo({
            top: element.offsetTop + offset,
            behavior: 'smooth' 
        });
    };

    return (
        <Button variant="contained" color="primary" size='large' onClick={handleClick}>
            Sign Up
        </Button>
    );
};

export default ScrollButton;
