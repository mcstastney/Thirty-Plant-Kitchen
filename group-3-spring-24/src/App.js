import Header from './components/Header.jsx'
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


function App() {
  root.render (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);