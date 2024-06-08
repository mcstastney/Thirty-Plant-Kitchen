import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

// Wrap the app in the Router and Provider to make navigation and store available
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>  
  </React.StrictMode>
  </Router>
);

