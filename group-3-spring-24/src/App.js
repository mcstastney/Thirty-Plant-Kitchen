import React from 'react';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './redux/store';
import CssBaseline from '@mui/material/CssBaseline';
import themeOptions from './theme';
import Home from './pages/Home';
import SignUpForm from './pages/SignUp';
import MyAccount from './pages/MyAccount';
import Recipes from './pages/Recipes';
import About from './pages/aboutPage';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <Provider store={store}>
        <div className='body'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUpForm />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/aboutPage" element={<About />} />
          </Routes>
        </div>
        <Footer/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;