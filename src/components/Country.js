import React from 'react';
import Weather from './Weather'
const Country = ({country}) => (
    <div key={country.name}>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population count:{country.population}</p>
        <h3>Languages</h3>
        <ul>
            {country.languages.map(language => (<li key={country.name + language.iso639_1}> {language.name}</li>))}
        </ul>
        <img src={country.flag} alt={country.name} width="300" height = "250"/>
        <Weather capital={country.capital}/>
    </div>
)
export default Country