function Total({ parts }) {
  const totalExercises = parts.reduce((total, part) => {
    console.log("total ", total);
    console.log("part.exercises ", part.exercises);
    return total + part.exercises;
  }, 0);

  return (
    <strong>
      <p>total of {totalExercises} exercises</p>
    </strong>
  );
}

export default Total;
