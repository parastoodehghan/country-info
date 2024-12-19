import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function CountryDetails() {
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching country details:", error)
      );
  }, [cca3]);

  if (loading) return <div>Loading country details...</div>;

  return (<div>
    <div className="country-details">
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} className="country-details-image" />
      <div className="card-info"> 
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p></div>
      
    
    </div>
    <button className="back-button"  onClick={() => navigate("/")}>Back to Home</button>


  </div>
    
    
  );
}

export default CountryDetails;
