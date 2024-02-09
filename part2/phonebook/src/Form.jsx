import Persons from "./Persons";

const Form = ({
  persons,
  setPersons,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
}) => {
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    const duplicatePerson = persons.find((person) => person.name === newName);
    console.log("duplicatePerson: ", duplicatePerson);

    if (duplicatePerson) {
      const actionConfirmed = window.confirm(
        `${duplicatePerson.name} is already added to phonebook, replace the old number with a new one?`
      );

      if (actionConfirmed) {
        Persons.update(duplicatePerson.id, personObject)
          .then((response) => {
            console.log(response);
            setPersons(
              persons.map((person) =>
                person.id === duplicatePerson.id
                  ? { ...person, number: newNumber }
                  : person
              )
            );
          })
          .catch((error) => console.log(error));
      }
      return;
    }

    console.log(newName);

    Persons.create(personObject)
      .then((response) => {
        console.log(response);
        setPersons(persons.concat(response));
      })
      .catch((error) => {
        console.log("fail ", error);
      });
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:{" "}
          <input
            type="number"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
