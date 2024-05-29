import React, { createContext, useState } from 'react';

// Create 'UserContext' object with 'createContext' function to share data across other components
export const UserContext = createContext();

// Create a functional component as a provider for 'UserContext'
// Pass 'children' as a prop to represent child components wrapped by provider
export const UserProvider = ({ children }) => {

  // Create a state called 'user' with 'useState' hook
  // 'setUser' function used to update 'user' state
  const [user, setUser] = useState({
    // initalise 'user' object with customerId property set to null
    customerId: null, 
  });

  // Return a UserContext.Provider component
  return (
    <UserContext.Provider value={{ user, setUser }}>
      // 'children' ensures any child components passed to UserProvider are rendered inside UserContext.Provider
      {children}
    </UserContext.Provider>
  );
};
