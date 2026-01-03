import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import sunny from "./assets/w5.jpg";
import rainy from "./assets/w4.jpg";
import cold from "./assets/w3.jpg";
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './InfoBox.css';

export default function InfoBox({ info }) {
    return (
        <div className='InfoBox'>
            <h3>Weather Information - {info.weather}</h3>

            <CardMedia
                sx={{ height: 140 }}
                image={
                    info.humidity > 70
                        ? rainy
                        : info.humidity < 25
                        ? cold
                        : sunny
                }
                title="green iguana"
            />
            <Card >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                             info.humidity > 70
                             ? <ThunderstormIcon/>
                             : info.humidity < 25
                             ? <AcUnitIcon/>
                             : <SunnyIcon/>
                        }

                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} >
                        <p>Temprature = {info.temp}°C</p>
                        <p>Humidity = {info.humidity}%</p>
                        <p>Min Temp = {info.tempMin}°C</p>
                        <p>Max Temp = {info.tempMax}°C</p>
                        <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}°C</p>
                    </Typography>
                </CardContent>
            </Card>

        </div>
    );
}