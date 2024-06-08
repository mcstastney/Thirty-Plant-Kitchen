import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Button, TextField } from '@mui/material';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { storeCustomerId, storeFirstName, setSignInStatus, logout } from '../redux/customerSlice';


// custom style for elements
const CustomAppBar = styled(AppBar)({ //AppBar is MUI's version of navbar- mobile first approach?
    height: '7rem',
    backgroundColor: '#283618', 
});

const CustomNavLink = styled(NavLink)(({ theme }) => ({
    color: 'white',
    textDecoration: 'none',
    marginLeft: theme.spacing(2),
    '&.active': {
        fontWeight: 'bold',
        borderBottom: '2px solid white',
    },
}));

const CustomButton = styled(Button)({
    color: 'inherit', // inherit colour from AppBar (white)
    margin: '0 20px', // adjust horizontal spacing between links
});


const Navbar = () => {
    // Set the state of the user details
    const isSignedIn = useSelector((state) => state.user.isSignedIn);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        // Check if both email and password are provided
        if (!emailAddress || !password) {
            alert('Please enter your email and password');
            return;
        }

        const loginData = {
        email_address: emailAddress,
        password: password
        };

        try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (!response.ok) {
            if (response.status === 401) {
                // If the credentials are invalid, display the error message
                alert('Please enter the email address and password you used to register, or create a new account.');
                return;
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }       
        }

        const result = await response.json();
        console.log('User logged in:', result);

        // Clear any previous error messages
        setError(null);

        // On user login, dispatch actions to update Redux store with user details and sign-in status
        dispatch(storeCustomerId(result.customer_id));
        dispatch(storeFirstName(result.first_name));
        dispatch(setSignInStatus(true));

        // Navigate to MyAccount page after login
        navigate('/MyAccount');
        } catch (error) {
        console.error('Error logging in:', error);
        setError('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <CustomAppBar position="static" role='navigation'> 
            <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="./30plant-kitchen-logo-trans-bg.png" alt="30 Plant Kitchen logo" style={{ height: '9rem', marginRight: '20px' }}/>

                    
                 
                    <CustomButton component={CustomNavLink} to="/">
                        Homepage
                    </CustomButton>
                    <CustomButton component={CustomNavLink} to="/Recipes">
                        Find Seasonal Recipes
                    </CustomButton>
                    <CustomButton component={CustomNavLink} to="/About">
                        About
                    </CustomButton>
                    {isSignedIn && (
                    <CustomButton component={CustomNavLink} to="/MyAccount">
                        My Account
                    </CustomButton>
                    )}
                </Box>

                {/* Fields for login with events to set state of username and password */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        sx={{ marginRight: '10px', backgroundColor: 'white', borderRadius: '4px' }}
                    />
                    <TextField
                        variant="outlined"
                        size="small"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ marginRight: '10px', backgroundColor: 'white', borderRadius: '4px' }}
                    />

                    {/* Conditions to change login/logout wording on button */}
                    {!isSignedIn && (
                    <Button variant="contained" color="secondary" onClick={handleLogin}>
                        Login
                    </Button>)} 
                    {isSignedIn && (
                    <Button variant="contained" color="secondary" onClick={() => {dispatch(logout()); navigate('/');}}>
                        Logout
                    </Button>)}    
                    
                    <Button variant="outlined" color="inherit" sx={{ marginLeft: '10px' }}>
                    <Link to="/SignUp">Sign up</Link>
                    </Button>
                </Box>
            </Toolbar>
        </CustomAppBar>
    );
};

export default Navbar;
