import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";

function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="country-list">
      {countries.map((country) => (
        <Link key={country.cca3} to={`/country/${country.cca3}`}>
          <CountryCard country={country} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
