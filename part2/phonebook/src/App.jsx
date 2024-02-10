import { useState, useEffect } from "react";
import Display from "./Display";
import Form from "./Form";
import Search from "./Search";
import axios from "axios";
import Persons from "./Persons";
import "./style.css";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState({ text: "", type: "" });

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const [personsToShow, setPersonsToShow] = useState(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        text={notification.text}
        type={notification.type}
        setNotification={setNotification}
      />

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
        notification={notification}
        setNotification={setNotification}
      />

      <Display
        people={personsToShow}
        setPersons={setPersons}
        setNotification={setNotification}
      />
    </div>
  );
};

export default App;
