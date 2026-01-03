import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateWeatherInfo}) {
    let [city, setCity] = useState('');
    let [error, setError] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "24e51e9070409cf0172a718885bb3eae";

    let handleChange = (e) => {
        setCity(e.target.value);
    };

    let getWeatherInfo = async (city) => { 
      try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }catch(error){
        throw error; 
    }
    };

    let handleSubmit = async(e) => {
      try{
        e.preventDefault(); 
        console.log(city);
        setCity("");
        let newInfo= await getWeatherInfo(city);
        updateWeatherInfo(newInfo);
     }catch(error){
        setError(true);
     }
    };
    
    return (
      <div className="SearchBox">
        <h3>Search for Weather</h3>
        <form onSubmit={handleSubmit}>
          <TextField id="city" label="City name" variant="outlined" value={city} onChange={handleChange} required/>
          <br></br> <br></br> 
          <Button variant="contained" type="submit">Search</Button>   
        </form>
        {error && <p style={{color:"red"}}>No such place in our API. Please try other!</p>}
      </div>
    );
}