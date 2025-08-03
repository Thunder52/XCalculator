import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const handleClick = (buttonValue) => {
    setValue((prev) => prev + buttonValue);
  };
  const handleCalculate = () => {
    try {
      if (value === '') {
        setResult('Error');
      } else {
        const evalResult = eval(value); // Use math.js in real apps
        setResult(evalResult);
      }
    } catch (err) {
      setResult('Error');
      console.log(err);
    }
  };
  const handleClear = () => {
    setValue('');
    setResult('');
  };

  return (
    <div className='container'>
      <h1>React Calculator</h1>

      <input type="text" value={value} readOnly />
      <p className='ans'>{result}</p>

      <div>
        <div>
          <input className='btn' type='button' value='7' onClick={() => handleClick('7')} />
          <input className='btn' type='button' value='8' onClick={() => handleClick('8')} />
          <input className='btn' type='button' value='9' onClick={() => handleClick('9')} />
          <input className='btn' type='button' value='+' onClick={() => handleClick('+')} />
        </div>
        <div>
          <input className='btn' type='button' value='4' onClick={() => handleClick('4')} />
          <input className='btn' type='button' value='5' onClick={() => handleClick('5')} />
          <input className='btn' type='button' value='6' onClick={() => handleClick('6')} />
          <input className='btn' type='button' value='-' onClick={() => handleClick('-')} />
        </div>
        <div>
          <input className='btn' type='button' value='1' onClick={() => handleClick('1')} />
          <input className='btn' type='button' value='2' onClick={() => handleClick('2')} />
          <input className='btn' type='button' value='3' onClick={() => handleClick('3')} />
          <input className='btn' type='button' value='*' onClick={() => handleClick('*')} />
        </div>
        <div>
          <input className='btn' type='button' value='c' onClick={handleClear} />
          <input className='btn' type='button' value='0' onClick={() => handleClick('0')} />
          <input className='btn' type='button' value='=' onClick={handleCalculate} />
          <input className='btn' type='button' value='/' onClick={() => handleClick('/')} />
        </div>
      </div>
    </div>
  );
}

export default App;