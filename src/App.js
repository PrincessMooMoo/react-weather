import React from 'react';
import { getWeatherData, millisecondsToDayOfWeek } from './util';
import FiveDayForecast from './FiveDayForecast';
import WeatherDetails from './WeatherDetails';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      weather: null,
      error: null,
      activeDay: 0
    };
    this.handleActiveDayChange = this.handleActiveDayChange.bind(this);
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const weatherData = await getWeatherData(latitude, longitude);
          this.setState({
            weather: weatherData,
            isLoading: false
          });
        } catch (error) {
          this.setState({
            error: 'Oh no 😔 We were unable to get weather data at this time.',
            isLoading: false
          });
        }

      },
      (error) => {
        this.setState({
          error: 'Ooops 😓 We were unable to get your current location.',
          isLoading: false
        })
      }
    )
  }

  // componentDidUpdate() {
  //   console.log('Component did update')
  // }

  // componentWillUnmount() {
  //   clearTimeout(this.state.timerId);
  // }
handleActiveDayChange(newActiveDay) {
  this.setState({
    activeDay: newActiveDay
  })
}

  render() {
    const { isLoading, weather, error, activeDay } = this.state;
    const content = (
      <>
        {error
          ? <p>{error}</p>
          : weather &&
          <>
            <SearchBar onSubmit={this.newLocationSearch}  />
            <WeatherDetails
              location="Current Location"
              dayOfWeek={millisecondsToDayOfWeek(weather.daily[activeDay].dt * 1000)}
              weatherCondition={weather.daily[activeDay].weather[0].description}
              icon={weather.daily[activeDay].weather[0].icon}
              units="imperial"
              currentTemp={weather.current.temp}
              lowTemp={weather.daily[activeDay].temp.min}
              highTemp={weather.daily[activeDay].temp.max}
              precipitation={weather.daily[activeDay].pop * 100}
              humidity={weather.daily[activeDay].humidity}
              windSpeed={weather.daily[activeDay].wind_speed}
            />
            <FiveDayForecast forecast={
              weather.daily.map(data => {
                return {
                  dayOfWeek: millisecondsToDayOfWeek(data.dt * 1000),
                  icon: data.weather[0].icon,
                  highTemp: data.temp.max,
                  lowTemp: data.temp.min
                }
              })

            }
            activeDay={activeDay}
            onActiveDayChanged={this.handleAciveDayChange}
            />
            {/* {weather.daily.map((data, index) => (
              <WeatherSummary
                key={data.dt}
                dayOfWeek='monday'
                icon={`https://picsum.photos/id/${index}/200/200`}
                highTemp={data.temp.max}
                lowTemp={data.temp.min} />
            ))} */}
          </>
        }
      </>
    )
    return (
      <div>
        {isLoading
          ? <p>Loading...⏳</p>
          : <>{content}</>
        }
      </div>
    )
  }
};

export default App;
