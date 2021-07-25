import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Weather = ({capital}) => {
    const [weather, setWeather] = useState({temperature: '', windSpeed: ''})
    const api_key = process.env.REACT_APP_WEATHER_STACK_API_KEY
    useEffect(() => axios.get(
     `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
    ).then(response => setWeather(
        {temperature: response.data.current.temperature,
        windSpeed: response.data.current.wind_speed})
    ), [])

    return (
        <div>
            <h3>Weather in {capital}</h3>
            <h5>Temperature:</h5>
            <p>{weather.temperature}</p>
            <h5>Wind Speed:</h5>
            <p>{weather.windSpeed}</p>
        </div>
    )
}
export default Weather