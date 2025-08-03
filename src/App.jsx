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
        const evalResult = eval(value);
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
          <input type='button' className='btn' value='7' onClick={() => handleClick('7')} />
          <input type='button' className='btn' value='8' onClick={() => handleClick('8')} />
          <input type='button' className='btn' value='9' onClick={() => handleClick('9')} />
          <input type='button' className='btn' value='+' onClick={() => handleClick('+')} />
        </div>
        <div>
          <input type='button' className='btn' value='4' onClick={() => handleClick('4')} />
          <input type='button' className='btn' value='5' onClick={() => handleClick('5')} />
          <input type='button' className='btn' value='6' onClick={() => handleClick('6')} />
          <input type='button' className='btn' value='-' onClick={() => handleClick('-')} />
        </div>
        <div>
          <input type='button' className='btn' value='1' onClick={() => handleClick('1')} />
          <input type='button' className='btn' value='2' onClick={() => handleClick('2')} />
          <input type='button' className='btn' value='3' onClick={() => handleClick('3')} />
          <input type='button' className='btn' value='*' onClick={() => handleClick('*')} />
        </div>
        <div>
          <input type='button' className='btn' value='c' onClick={handleClear} />
          <input type='button' className='btn' value='0' onClick={() => handleClick('0')} />
          <input type='button' className='btn' value='=' onClick={handleCalculate} />
          <input type='button' className='btn' value='/' onClick={() => handleClick('/')} />
        </div>
      </div>
    </div>
  );
}

export default App;