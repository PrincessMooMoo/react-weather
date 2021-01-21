import WeatherSummary from "./WeatherSummary";

import PropTypes from 'prop-types';
const WeatherDetails = (props) => {

    return (
        <div>
            <p>
                {props.location}
            </p>
            <p>{props.dayOfWeek}</p>
            <p>{props.weatherCondition}</p>
            <div>
                <div>
                    <img src="https://picsum.photos/id/1/200/200"></img>
                    <span>{props.currentTemp}</span>
                    <span>F&deg;</span>
                    <span>|</span>
                    <span>C&deg;</span>
                </div>
                <div>
    <p>High: {props.highTemp}&deg;</p>
    <p>Low: {props.lowTemp}&deg;</p>
    <p>Percipitation: {props.precipitation}%</p>
    <p>Humidity: {props.humidity}%</p>
    <p>Wind: {props.windSpeed} mph</p>
                </div>
            </div>
        </div>
    )
};

WeatherDetails.propTypes = {
    location: PropTypes.string.isRequired,
    dayOfWeek: PropTypes.string.isRequired,
    weatherCondition: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    unit: PropTypes.oneOf(['imperial', 'metric']),
    currentTemp: PropTypes.number,
    lowTemp: PropTypes.number.isRequired,
    highTemp: PropTypes.number.isRequired,
    percipitation: PropTypes.number.isRequired,
    humiditiy: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
}

export default WeatherDetails;