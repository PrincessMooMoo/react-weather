import React from 'react';
import { getWeatherData } from './util';
import WeatherSummary from './WeatherSummary';
import WeatherDetails from './WeatherDetails';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      weather: null,
      error: null
    };
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

  render() {
    const { isLoading, weather, error } = this.state;
    const content = (
      <>
        {error
          ? <p>{error}</p>
          : weather &&
          <>
            <WeatherDetails
              location="Fresno"
              dayOfWeek="Monday"
              weatherCondition="Partially cloudy"
              icon=""
              units="imperial"
              currentTemp={56}
              lowTemp={32}
              highTemp={60}
              precipitation={10}
              humidity={30}
              windSpeed={5}
            />
            {weather.daily.map((data, index) => (
              <WeatherSummary
                key={data.dt}
                dayOfWeek='monday'
                icon={`https://picsum.photos/id/${index}/200/200`}
                highTemp={data.temp.max}
                lowTemp={data.temp.min} />
            ))}
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
