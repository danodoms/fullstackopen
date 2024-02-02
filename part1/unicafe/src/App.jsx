import { useState } from "react";
import Choice from "./Choice";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let all = good + neutral + bad;
  let average = (good - bad) / all;
  let positivePercentage = (good / all) * 100;

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

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
