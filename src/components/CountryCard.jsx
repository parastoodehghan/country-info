import React from "react";

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <h3>{country.name.common}</h3>
    </div>
  );
}

export default CountryCard;
