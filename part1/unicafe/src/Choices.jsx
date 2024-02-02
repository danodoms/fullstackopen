const Choices = (props) => {
  return (
    <div>
      <button onClick={() => props.setGood(good)}>good</button>
      <button>neutral</button>
      <button>bad</button>
    </div>
  );
};

export default Choices;
