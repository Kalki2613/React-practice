import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox"; 
import { useState } from "react";  
import './SearchBox.css'; 
export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
       city: "Dehli",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign:"center"}}>
            <h1>Welcome to Weather App</h1>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <InfoBox info={weatherInfo} /> 
        </div>
    );
}