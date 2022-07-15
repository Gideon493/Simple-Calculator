
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  
  const deleteDigit = () => {
    try {
      setValue(value.slice(0, - 1))

    } catch (error) {
      setValue("")

    }

  }
  const calculateResults = () => {
    try {
      setValue(eval(value));

    } catch (error) {
      setValue("Error")

    }

  }

  return (
    <div className="App">
      <h3>Calculator</h3>
      <div className='calculator'>
        <div className="screen">
          <div className='current'>
            <input type="text" value={value}
              onChange={(e) => setValue(e.target.value)} />
          </div>
          

        </div>
        <button value="/" onClick={(e) => setValue(value + e.target.value)}>/</button>
        <button value="+" onClick={(e) => setValue(value + e.target.value)}>+</button>
        <button value="*" onClick={(e) => setValue(value + e.target.value)}>x</button>
        <button value="-" onClick={(e) => setValue(value + e.target.value)}>-</button>
        <button value="0" onClick={(e) => setValue(value + e.target.value)}>0</button>
        <button value="1" onClick={(e) => setValue(value + e.target.value)}>1</button>
        <button value="2" onClick={(e) => setValue(value + e.target.value)}>2</button>
        <button value="3" onClick={(e) => setValue(value + e.target.value)}>3</button>
        <button value="4" onClick={(e) => setValue(value + e.target.value)}>4</button>
        <button value="5" onClick={(e) => setValue(value + e.target.value)}>5</button>
        <button value="6" onClick={(e) => setValue(value + e.target.value)}>6</button>
        <button value="7" onClick={(e) => setValue(value + e.target.value)}>7</button>
        <button value="8" onClick={(e) => setValue(value + e.target.value)}>8</button>
        <button value="9" onClick={(e) => setValue(value + e.target.value)}>9</button>
        <button value="." onClick={(e) => setValue(value + e.target.value)}>.</button>
        <button value="DEL" onClick={() => deleteDigit()}>DEL</button>
        <button value="=" onClick={() => calculateResults()}>=</button>
      </div>
      

    </div>
  );
}

export default App;
