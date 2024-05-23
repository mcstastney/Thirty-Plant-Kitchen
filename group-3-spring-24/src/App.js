import React from 'react';
import Navbar from "./components/Navbar/index2";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from './components/Header.jsx'
import Home from './pages/Home';
import SignUpForm from './pages/SignUp'
import PlantSearch from './pages/Ingredients';
import Recipes from './pages/Recipes';
import About from './pages/aboutPage';
import './App.css';



function App() {
  return (
    <>
    <Header/>
    <Router>
        <Navbar />
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/SignUp" element={<SignUpForm />} />
            <Route path="/Ingredients" element={<PlantSearch />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/aboutPage" element={<About />} />
        </Routes>
    </Router>
    </>
);
}

export default App;
