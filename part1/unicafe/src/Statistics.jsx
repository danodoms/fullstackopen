const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = (good - bad) / all;
  let positivePercentage = (good / all) * 100;

  if (all != 0) {
    return (
      <>
        <h1>statistics</h1>

        <table>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>

          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positivePercentage}%</td>
          </tr>
        </table>
      </>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  );
};

export default Statistics;
