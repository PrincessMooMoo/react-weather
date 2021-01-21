import PropTypes from 'prop-types';
const WeatherDetails = (props) => {
    return (
        <div className="WeatherDetails">
            <p className="text_large">{props.location}</p>
            <p>{props.dayOfWeek}</p>
            <p>{props.weatherCondition}</p>
            <div className="details_wrapper">
                <div className="icon_and_current">
                    <img src='https://picsum.photos/id/5/200/200'></img>
                    <span className="text_large">{props.currentTemp}</span>
                    <span>&deg;F</span>
                    <span>|</span>
                    <span>&deg;C</span>
                </div>
                <div>
                    <p>High: {props.highTemp}&deg;</p>
                    <p>Low: {props.lowTemp}&deg;</p>
                    <p>Percipitation: {props.precipitation}%</p>
                    <p>Humidity: {props.humidity}%</p>
                    <p>Wind: {props.windSpeed} {props.units === 'imperial' ? 'mph': 'km/h'}</p>
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