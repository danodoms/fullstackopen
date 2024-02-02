import { useState } from "react";
import Choices from "./Choices";
import Choice from "./Choice";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div className="div">
        <h1>give feedback</h1>
      </div>

      <div className="div">
        <Choice name={"good"} onClick={() => setGood(good + 1)} />
        <Choice name={"neutral"} onClick={() => setNeutral(neutral + 1)} />
        <Choice name={"bad"} onClick={() => setBad(bad + 1)} />
      </div>

      <div className="div">
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  );
};

export default App;
