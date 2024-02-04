const Display = ({ people }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {people.map((person, index) => (
          <div>
            <li key={index}>
              {person.name} - {person.number}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Display;
