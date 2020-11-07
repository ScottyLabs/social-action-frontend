import React from 'react';
import logo from './logo.svg';
import Spotlight from './Spotlight';
import Overview from './Overview';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <Overview />
      <Spotlight />
      </div>
    </div>
  );
}

export default App;
