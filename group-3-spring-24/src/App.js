import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { UserProvider } from './components/UserContext';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import themeOptions from './theme';
import Home from './pages/Home';
import SignUpForm from './pages/SignUp';
import LoginForm from './components/LoginForm';
import MyAccount from './pages/MyAccount';
import RecipesElisa from './pages/RecipesElisa';
import Recipes from './pages/Recipes';
import About from './pages/aboutPage';



function App() {
  return (
    
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
    <UserProvider>

    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUpForm />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/RecipesElisa" element={<RecipesElisa />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/aboutPage" element={<About />} />
        </Routes>
    </Router>
    </UserProvider>
    </ThemeProvider>
  
);
}

export default App;
