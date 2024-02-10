import { useEffect } from "react";
import { useState } from "react";

const Results = ({ searchTerm, allCountries }) => {
  console.log("allCountries: ", allCountries);

  useEffect(() => {
    generateResults();
  }, [searchTerm]);

  const filteredCountries = allCountries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const [results, setResults] = useState(null);

  const generateResults = () => {
    if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      return setResults(generateCountryPage(country));
    } else if (filteredCountries.length > 10) {
      return setResults(<p>Too many matches, specify another filter</p>);
    } else if (filteredCountries.length <= 10) {
      return setResults(
        filteredCountries.map((country) => (
          <div>
            {country.name.common}
            <button
              onClick={() => {
                setResults(generateCountryPage(country));
              }}
            >
              Show
            </button>
          </div>
        ))
      );
    }
  };

  const generateCountryPage = (country) => {
    return (
      <>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <p>Languages</p>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt="" />
      </>
    );
  };

  console.log("filteredCountries: ", filteredCountries);

  return <>{results}</>;
};

export default Results;
