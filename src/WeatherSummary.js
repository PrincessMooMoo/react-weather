import PropTypes from "prop-types";
import Temperature from "./Temperature";

const WeatherSummary = ({ location, dayOfWeek, weatherCondition, icon, units, currentTemp, highTemp,
     lowTemp, percipitation, humidity, windSpeed }) => (
    <div className="WeatherSummary">
    <h1>{location}</h1>
      <p>{dayOfWeek}</p>
      <p>{weatherCondition}</p>
      <img src={`${icon}`} />
     <h1 className="currentTemp">
         <Temperature temp={currentTemp}/>
         </h1>
     <p>&deg;F | &deg;C</p>
      <div className="WeatherSummary-temps">
        <div>
            High: <Temperature temp={highTemp} /> 
            <br></br> 
            Low: <Temperature temp={lowTemp} />
            <br></br>
            Percipitation: {percipitation}%
            <br></br>
            Humidity: {humidity}%
            <br></br>
            Wind: {windSpeed} mph
            </div> 

 
      </div>
    </div>
  );

WeatherSummary.propTypes = {
    location: PropTypes.string.isRequired,
    dayOfWeek: PropTypes.string.isRequired,
    weatherCondition: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    units: PropTypes.oneOf(['imperial', 'metric']),
    currentTemp: PropTypes.number,
    highTemp: PropTypes.number.isRequired,
    lowTemp: PropTypes.number.isRequired,
    percipitation: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired
};

WeatherSummary.defaultProps = {
    location: 'Fresno',
    dayOfWeek: 'Sun',
    month: 'Jan'
  };


export default WeatherSummary;