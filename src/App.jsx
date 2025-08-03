import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (buttonValue) => {
    setValue((prev) => prev + buttonValue);
  };
  const handleCalculate = () => {
    try {
      if (value === "") {
        setResult("Error");
      } else {
        const evalResult = eval(value);
        setResult(evalResult);
      }
    } catch (err) {
      setResult("Error");
      console.log(err);
    }
  };
  const handleClear = () => {
    setValue("");
    setResult("");
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>

      <input type="text" value={value} readOnly />
      <p className="ans">{result}</p>

      <div>
        <div>
          <button className="btn" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="btn" onClick={() => handleClick("+")}>
            +
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="btn" onClick={() => handleClick("-")}>
            -
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="btn" onClick={() => handleClick("*")}>
            *
          </button>
        </div>
        <button className="btn" onClick={handleClear}>
          C
        </button>
        <button className="btn" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="btn" onClick={handleCalculate}>
          =
        </button>
        <button className="btn" onClick={() => handleClick("/")}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;
