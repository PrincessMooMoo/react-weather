const WeatherIcon = ({ iconID }) => {
    const url = `http://openweathermap.org/img/wn/${iconID}@2x.png`
    return(
        <img src={url} alt="weather icon" />
    )
}
export default WeatherIcon;