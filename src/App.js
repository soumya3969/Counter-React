import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count:{count}</p>
      <div className="btns">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}
export default App;
