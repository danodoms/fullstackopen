import { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setAllCountries(response.data);
        // console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div>
        <p>Find countries</p>
        <input value={searchTerm} onChange={handleSearch} />
      </div>

      <Results searchTerm={searchTerm} allCountries={allCountries} />
    </>
  );
}

export default App;
