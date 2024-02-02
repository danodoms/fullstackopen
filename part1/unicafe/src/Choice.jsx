const Choice = ({ name, onClick, value }) => {
  return <button onClick={onClick}>{name}</button>;
};

export default Choice;
