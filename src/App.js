import React from 'react';
import { getWeatherData } from './util';
import WeatherSummary from './WeatherSummary';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      weather: null,
      error: null
    };
    // this.handleClick = this.handleClick.bind(this);
    // console.log('Component was constructed')
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
     async (position) => {
        const {latitude, longitude} = position.coords;
        const weatherData = await getWeatherData(latitude, longitude);
        this.setState({
          weather: weatherData,
          isLoading: false
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  componentDidUpdate() {
    console.log('Component did update')
  }

  componentWillUnmount() {
    clearTimeout(this.state.timerId);
  }

  render() {
    const { isLoading, weather } = this.state;
    // console.log('Component was rendered')
   return (
   <div>
     {isLoading
     ? <div>loading</div> 
     : weather.daily.map(data => (
     <WeatherSummary
     key={data.dt} //the dt comes from the weather api
     DayOfWeek='Monday'
     icon={'http://picsum/photos/id/${index}/200/200'}
     highTemp={data.temp.max}
     lowTemp={data.temp.min}
     />))}
     </div>
     )
  }
};

export default App;
