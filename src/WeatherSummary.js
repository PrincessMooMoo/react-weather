import PropTypes from "prop-types";
import Temperature from "./Temperature";

const WeatherSummary = ({ location, dayOfWeek, weatherCondition, icon, units, currentTemp, highTemp,
     lowTemp, percipitation, humidity, windSpeed }) => (
    <div className="WeatherSummary">
    <h1>{location}</h1>
      <p>{dayOfWeek}</p>
      <p>{percipitation}</p>
      <img src={`${icon}`} />
      <div className="WeatherSummary-temps">
        <Temperature temp={highTemp} /> 
      <Temperature temp={lowTemp} />
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