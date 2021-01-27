export const getCoordinates = async (location) => {
    const apiKey = process.env.REACT_APP_MAP_QUEST_API_KEY;
    const apiURL = 'http://www.mapquestapi.com/geocoding/v1/address';
    const response = await fetch(`${apiURL}?key=${apiKey}&location=${location}`)
    const data = await response.json();
    return data.results[0].locations[0].latLng;
};

export const getWeatherData = async (latitude, longitude, units='imperial') => {
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    const apiURL = 'https://api.openweathermap.org/data/2.5/onecall';
    const response = await fetch(`${apiURL}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`)
    const { current, daily } = await response.json();
    return { current, daily };
};

export const millisecondsToDayOfWeek = (milliseconds,) => {
    const dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(milliseconds);
    return dow[date.getDay()];
}