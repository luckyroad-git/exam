import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'hello world';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{name}</div>
      </header>
    </div>
  );
}

export default App;
