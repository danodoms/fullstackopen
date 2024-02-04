import { useState, useEffect } from "react";
import Display from "./Display";
import Form from "./Form";
import Search from "./Search";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "098765" },
  ]);

  const [personsToShow, setPersonsToShow] = useState(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>

      <Search
        setPersonsToShow={setPersonsToShow}
        persons={persons}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Form
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />

      <Display people={personsToShow} />
    </div>
  );
};

export default App;
