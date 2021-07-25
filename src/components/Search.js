import React, {useState, useEffect} from "react";

const Search = ({setResults,countries,results}) => {
    const [input, setInput] = useState('')
    const handleChange = event => {
        setInput(event.target.value);
    }
    useEffect(() => {
        const query = countries.filter(country => country.name.toLowerCase().includes(input))
        setResults(query.map(country => [country,false]));

    },[input])
    console.log(results)
    return(< div >Find countries
        <input onChange = {handleChange}/>< /div>)
}
export default Search