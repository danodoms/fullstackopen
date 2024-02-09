import Persons from "./Persons";

const Display = ({ people, setPersons }) => {
  const handleDelete = (id) => {
    const actionConfirmed = window.confirm(
      "Are you sure you want to delete this person?"
    );

    if (actionConfirmed) {
      Persons.remove(id)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    setPersons(people.filter((person) => person.id != id));
  };

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name} - {person.number}
            <button onClick={() => handleDelete(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
