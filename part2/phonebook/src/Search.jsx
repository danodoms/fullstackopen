import { useState, useEffect } from "react";
const Search = ({ persons, setPersonsToShow, searchTerm, setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filterPersons = () => {
    if (searchTerm == "") {
      console.log("no search term");
      setPersonsToShow(persons);
      return;
    }

    setPersonsToShow(
      persons.filter((person) => person.name.toLowerCase().includes(searchTerm))
    );
  };

  useEffect(() => {
    filterPersons();
  }, [persons, searchTerm]);
  return (
    <div>
      Search <input value={searchTerm} onChange={handleSearch} />
    </div>
  );
};

export default Search;
