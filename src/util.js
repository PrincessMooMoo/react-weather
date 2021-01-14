export const getCoordinates = async (location) => {
    const apiKey = '';
    const apiURL = 'http://www.mapquestapi.com/geocoding/v1/address';
    const response = await fetch(`${apiURL}?key=${apiKey}&location=${location}`)
    const data = await response.json();
    return data.results[0].locations[0].latLng;
}

export const getWeatherData = async (latitude, longitude, units='imperial') => {
    const apiKey = '';
    const apiURL = 'https://api.openweathermap.org/data/2.5/onecall';
    const response = await fetch(`${apiURL}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`)
    const { current, daily } = await response.json();
    return { current, daily };
}