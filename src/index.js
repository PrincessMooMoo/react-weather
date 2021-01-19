import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {getCoordinates, getWeatherData} from './util'; this will be used later

//creating a component with a function
const MyDate = ({ day, month = 'june' }) => <p>{`${day}, ${month}`}</p>;
// //creatubg a cinoibebt with a class
// class MyTime extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { time } = this.props;
//     return <p>{ time }</p>
//   }
// };

const WeatherSummary = ({ dayOfWeek, icon, highTemp, lowTemp }) => (
  <div className="WeatherSummary">
    <p>{dayOfWeek}</p>
    <img src={`${icon}`} />
    <p><Temperature temp={highTemp} /> <Temperature temp={lowTemp} /></p>
  </div>
);

const Temperature = ({ temp }) => <span>{temp}&deg;</span>

//install prop-types and then type this
// WeatherSummary.propTypes = {
//   dayOfWeek: PropTypes.string,
//   icon: PropTypes.string.isRequired,
//   highTemp: PropTypes.number,
//   lowTemp: PropTypes.number
// }

// class WeatherSummary extends React.Componenet {
//   static defaultProps = {
//     dayOfWeek: 'Sun',
//     month: 'Jan'
//   };
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { dayOfWeek, icon, highTemp, lowTemp } = this.props;

//     return (
//       <div className="WeatherSummary">
//       <p>{dayOfWeek}</p>
//       <img src={`${icon}`} />
//       <p>{highTemp}&deg; {lowTemp}&deg;</p>
//     </div>
//     )
//   }
// }

WeatherSummary.defaultProps = {
  dayOfWeek: 'Sun',
  month: 'Jan'
};

ReactDOM.render(
  <>
    <WeatherSummary
      dayOfWeek="Monday"
      icon="https://picsum.photos/id/1/200/200"
      highTemp={99}
      lowTemp={50} />

    <WeatherSummary
      dayOfWeek="Tuesday"
      icon="https://picsum.photos/id/1/200/200"
      highTemp={99}
      lowTemp={50} />

<WeatherSummary
      dayOfWeek="Wednesday"
      icon="https://picsum.photos/id/1/200/200"
      highTemp={99}
      lowTemp={50} />
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
