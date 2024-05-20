import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Home" activeStyle>
                        Homepage
                    </NavLink>
                    <NavLink to="/Recipes" activeStyle>
                        Search recipes
                    </NavLink>
                    <NavLink to="/aboutPage" activeStyle>
                        About
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;