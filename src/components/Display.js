import React from 'react'
import Country from './Country'
const Display = ({countries,setResults}) => {
    const n = countries.length
    console.log(countries)
    if (n > 10)
        return <p>Too many matches, specify more details</p>
    if(n !== 1)
        return countries.map((countryDisplay, index) => (
            <div key={countryDisplay[0].name}>
                <p >{countryDisplay[0].name}</p>
                <button onClick={() => {
                    const showDetail = countryDisplay[1]
                    const newCountries = countries.slice(0)
                    newCountries[index][1] = !showDetail
                    setResults(newCountries)
                }}>{countries[index][1] ? 'hide':'show'}</button>
                {countries[index][1] ? <Country country = {countryDisplay[0]}/>:''}
            </div>
        ))
    const country = countries[0][0]
    return <Country country={country}/>
}
export default Display