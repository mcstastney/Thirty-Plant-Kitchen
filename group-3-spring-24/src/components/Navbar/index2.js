// import React from "react";
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
// const Navbar = () => {
//     return (
//         <>
//             <Nav>
//                 <NavMenu>
//                     <NavLink to="/Home" activeStyle>
//                         Homepage
//                     </NavLink>
//                     <NavLink to="/SignUp" activeStyle>
//                         Sign up
//                     </NavLink>
//                     <NavLink to="/Ingredients" activeStyle>
//                         Search plants
//                     </NavLink>
//                     <NavLink to="/Recipes" activeStyle>
//                         Search recipes
//                     </NavLink>
//                     <NavLink to="/aboutPage" activeStyle>
//                         About
//                     </NavLink>

//                 </NavMenu>
//             </Nav>
//         </>
//     );
// };
 
// export default Navbar;

// src/components/Navbar/index2.js
import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    LOGO
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <Button color="inherit" component={NavLink} to="/Home" activeClassName="active">
                        Homepage
                    </Button>
                    <Button color="inherit" component={NavLink} to="/SignUp" activeClassName="active">
                        Sign up
                    </Button>
                    <Button color="inherit" component={NavLink} to="/Ingredients" activeClassName="active">
                        Search plants
                    </Button>
                    <Button color="inherit" component={NavLink} to="/Recipes" activeClassName="active">
                        Search recipes
                    </Button>
                    <Button color="inherit" component={NavLink} to="/aboutPage" activeClassName="active">
                        About
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
