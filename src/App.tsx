import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([10, 20, 30, 40, 60]);
  const incrementHandler = () => {
    setCount(count => count + 1);
  }
  const onClickItem = (event: any) => {
    console.log(event.target.id);
  }
  return (
    <div className="App">
      <h1>Hello Word</h1>
      <p>{count}</p>
      <ul onClick={(event) => onClickItem(event)}>
        {
          data.map(item => {
            return (
              <li style={{listStyle: 'none'}}>{item}</li>
            )
          })
        }
      </ul>
      <button onClick={incrementHandler}>Click me</button>
      <span>hi</span>
    </div>
  );
}

export default App;
