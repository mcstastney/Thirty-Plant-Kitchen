import React from 'react';
import { AppBar, Box, Toolbar, Button, TextField } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import { styled } from '@mui/system';


// custom style for elements
const CustomAppBar = styled(AppBar)({ //AppBar is MUI's version of navbar seemingly- mobile first approach?
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
    margin: '0 10px', // adjust horizontal spacing between links
});

const Navbar = () => {
    return (
        <CustomAppBar position="static">
            <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="./30plant-kitchen-logo-trans-bg.png" alt="30 Plant Kitchen logo" style={{ height: '9rem', marginRight: '20px' }}/>

                    
                 
                    <CustomButton component={CustomNavLink} to="/">
                        Homepage
                    </CustomButton>
                    <CustomButton component={CustomNavLink} to="/MyAccount">
                        My account
                    </CustomButton>
                    <CustomButton component={CustomNavLink} to="/Recipes">
                        Search recipes
                    </CustomButton>
                    <CustomButton component={CustomNavLink} to="/aboutPage">
                        About
                    </CustomButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Username"
                        sx={{ marginRight: '10px', backgroundColor: 'white', borderRadius: '4px' }}
                    />
                    <TextField
                        variant="outlined"
                        size="small"
                        type="password"
                        placeholder="Password"
                        sx={{ marginRight: '10px', backgroundColor: 'white', borderRadius: '4px' }}
                    />
                    <Button variant="contained" color="secondary">
                        Login
                    </Button>
                    <Button variant="outlined" color="inherit" sx={{ marginLeft: '10px' }}>
                    <Link to="/SignUp">Sign up</Link>
                    </Button>
                </Box>
            </Toolbar>
        </CustomAppBar>
    );
};

export default Navbar;
