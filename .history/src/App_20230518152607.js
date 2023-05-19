import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  let [num, setNum] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{num}</div>
        <button onClick={() => { setNum(num = num + 1) }}>버튼</button>
      </header>
    </div >
  );
}

export default App;
