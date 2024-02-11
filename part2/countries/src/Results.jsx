import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import dotenv from "dotenv";

const Results = ({ searchTerm, allCountries }) => {
  console.log("allCountries: ", allCountries);

  const [results, setResults] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    generateResults();
  }, [searchTerm]);

  useEffect(() => {}, [weather]);

  const filteredCountries = allCountries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
  });

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

        <div>{generateWeatherContent(country)}</div>
      </>
    );
  };

  const generateWeatherContent = (country) => {
    console.log("country weather: ", country);
    const lat = country.latlng[0];
    const lon = country.latlng[1];
    const apiKey = import.meta.env.VITE_API_KEY;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      )
      .then((response) => {
        console.log("weather:", response.data);
        setWeather(response.data);
      })
      .catch((error) => console.log(error));

    console.log("weather: ", weather);
    // console.log("weather.weather[0].icon: ", weather.weather[0].icon);

    if (weather === null) {
      return <p>Fetching weather...</p>;
    } else {
      return (
        <>
          <h2>Weather in {country.capital}</h2>
          <p>temperature {Number(weather.main.temp - 273.15).toFixed(2)} °C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>wind {weather.wind.speed} m/s</p>
        </>
      );
    }
  };

  console.log("filteredCountries: ", filteredCountries);

  return <>{results}</>;
};

export default Results;
