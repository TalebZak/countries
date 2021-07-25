import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Search from './components/Search'
import Display from './components/Display'

const App = () => {
  const [countries, setCountries] = useState([])
  const [results, setResults] = useState(countries.map(country => [country,false]))

  useEffect(() => {
    axios.get(
        'https://restcountries.eu/rest/v2/all'
    ).then(response => setCountries(response.data))
  }, [])
  return (
      <div>
        <Search  setResults={setResults} countries = {countries} results={results}/>
        <Display countries = {results} setResults={setResults}/>
      </div>
  )
}

export default App;
