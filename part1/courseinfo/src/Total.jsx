function Total(props) {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises[0].count +
        props.exercises[1].count +
        props.exercises[2].count}
    </p>
  );
}

export default Total;
