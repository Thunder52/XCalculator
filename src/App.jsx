import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('');
  const [result,setResult]=useState('');

  const handleCalculate=()=>{
    if(value===''){
      setResult('Error');
    }else{
      setResult(eval(value));
    }
  }

  return (
    <div className='container'>
      <h1>React Calculator</h1>
      <input type="text" value={value}/>
      <p className='ans'>{result}</p>
      <div>
          <div>
            <input className='btn' type="button" value='7'onClick={(e)=>setValue(value+e.target.value)}/>
            <input className='btn'  type="button" value='8' onClick={(e)=>setValue(value+e.target.value)}/>
            <input className='btn' type="button" value='9' onClick={(e)=>setValue(value+e.target.value)}/>
            <input className='btn' type="button" value='+' onClick={(e)=>setValue(value+e.target.value)}/>
          </div>
          <div>
            <input className='btn' type="button" value='4'onClick={(e)=>setValue(value+e.target.value)}/>
            <input className='btn' type="button" value='5' onClick={(e)=>setValue(value+e.target.value)}/>
            <input className='btn' type="button" value='6' onClick={(e)=>setValue(value+e.target.value)}/>
            <input className='btn' type="button" value='-' onClick={(e)=>setValue(value+e.target.value)}/>
          </div>
          <div>
            <input className='btn' type="button" value='1'onClick={(e)=>setValue(value+e.target.value)}/>
            <input className='btn' type="button" value='2' onClick={(e)=>setValue(value+e.target.value)}/>
            <input className='btn' type="button" value='3' onClick={(e)=>setValue(value+e.target.value)}/>
            <input className='btn' type="button" value='*' onClick={(e)=>setValue(value+e.target.value)}/>
          </div>
          <div>
            <input className='btn' type="button" value='c' onClick={()=>setValue('')}/>
            <input className='btn' type="button" value='0' onClick={(e)=>setValue(value+e.target.value)}/>
            <input className='btn' type="button" value='=' onClick={handleCalculate}/>
            <input className='btn' type="button" value='/' onClick={(e)=>setValue(value+e.target.value)}/>
          </div>
      </div>
    </div>
  )
}

export default App
