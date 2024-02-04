import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "098765" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      return alert(`${newName} is already aded to phonebook`);
    }

    console.log(newName);

    setPersons(persons.concat({ name: newName, number: newNumber }));
    console.log(persons);
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <div>
        <h2>Numbers</h2>
        <ul>
          {persons.map((person, index) => (
            <div>
              <li key={index}>
                {person.name} - {person.number}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
