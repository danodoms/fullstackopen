import Persons from "./Persons";

const Display = ({ people, setPersons, setNotification }) => {
  const handleDelete = (id) => {
    const actionConfirmed = window.confirm(
      "Are you sure you want to delete this person?"
    );

    if (actionConfirmed) {
      Persons.remove(id)
        .then((response) => {
          console.log(response);
          console.log("status: ", response.status);

          setNotification({ text: "Deleted", type: "error" });
          setPersons(people.filter((person) => person.id != id));
        })
        .catch((error) => {
          (error) => console.log(error);

          setNotification({
            text: "Already removed from server",
            type: "error",
          });

          setPersons(people.filter((person) => person.id != id));
        });
    }
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
