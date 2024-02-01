import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const App = () => {
  const course = "Half Stack application development";

  const exercises = [
    { name: "Fundamentals of React", count: 10 },
    { name: "Using props to pass data", count: 7 },
    { name: "State of a component", count: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
};

export default App;
