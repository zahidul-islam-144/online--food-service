import React from 'react';
import './App.css';
import JSONDATA from './services.json'

function App() {
  return (
    <div className="App">
      <input type='text' placeholder='Search...' />
      {JSONDATA.map((val, key) => {
        return <div> {val.name} </div>
      })}
    </div>
  );
}

export default App;
