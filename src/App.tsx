import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount(count => count + 1);
  }
  return (
    <div className="App">
      <h1>Hello Word</h1>
      <p>{count}</p>
      <button onClick={incrementHandler}>Click me</button>
      <span>hi</span>
    </div>
  );
}

export default App;
