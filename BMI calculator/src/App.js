import React, { useMemo, useState } from "react";
import "./App.css";

function App() {

  const [weight,setWeight] = useState(40);
  const [height,setHeight] = useState(140);

  const onWeightChange = (event) =>{
    setWeight(event.target.value);
  }

  const onHeightChange = (event) =>{
    setHeight(event.target.value);
  }

  const ouput = useMemo(() => {
    const calcHeight = height/100;

    return (weight/(calcHeight*calcHeight)).toFixed(1);

  },[height,weight])

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-ouput">Weight:{weight} Kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />

        <p className="slider-output">Height:{height} cm</p>
        <input className="input-slider" 
          type="range" 
          step="1"
          min="140"
          max="220"
          onChange={onHeightChange}
        />
      </div>

      <div>
        <div className="output-section">
          <p>Your BMI is :-</p>
          <p className="output">{ouput}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
