import PropTypes from "prop-types";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

const WeatherSummary = ({ dayOfWeek, icon, highTemp, lowTemp, isActive, index, onSelected }) => (
    <div 
    className={`WeatherSummary ${isActive ? "WeatherSummary-active" : ""}`}
    onClick={() => onSelected(index)}
    >
      <p>{dayOfWeek}</p>
      <WeatherIcon iconID={icon} />
      <div className="WeatherSummary-temps">
            <Temperature temp={highTemp} /> 
            <Temperature temp={lowTemp} />
        </div> 
    </div>
  );

WeatherSummary.propTypes = {
    dayOfWeek: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    highTemp: PropTypes.number.isRequired,
    lowTemp: PropTypes.number.isRequired,
};

// WeatherSummary.defaultProps = {
//     location: 'Fresno',
//     dayOfWeek: 'Sun',
//     month: 'Jan'
//   };


export default WeatherSummary;