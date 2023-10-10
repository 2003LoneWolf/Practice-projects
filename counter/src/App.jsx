import { useState } from 'react';
import './App.css'

function App() {
  let  [value, setValue] = useState(0);

  const Increament = () => {
    value = value + 1;
    setValue(value);
  }
  const Decreament = () => {
    value = value - 1;
    setValue(value);
  }

  return (
    <div>
      <h1>Learning Hooks</h1>
      <h2>Counter value: {value}</h2> 
      <button onClick={Increament}>Increament</button>
      <button onClick={Decreament}>Decreament</button>
    </div>
  )
}

export default App
