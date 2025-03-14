import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content exercises={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
