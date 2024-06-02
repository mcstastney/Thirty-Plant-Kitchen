import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './redux/store';
import CssBaseline from '@mui/material/CssBaseline';
import themeOptions from './theme';
import Home from './pages/Home';
import SignUpForm from './pages/SignUp'
import MyAccount from './pages/MyAccount';
import Recipes from './pages/Recipes';
import About from './pages/aboutPage';


function App() {
  return (
    
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <Provider store={store}>
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUpForm />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/aboutPage" element={<About />} />
        </Routes>
    </Router>
    </Provider>

    </ThemeProvider>
  
);
}

export default App;