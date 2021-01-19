import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WeatherSummary from './WeatherSummary';
// import {getCoordinates, getWeatherData} from './util'; this will be used later

//creating a component with a function
// const MyDate = ({ day, month = 'june' }) => <p>{`${day}, ${month}`}</p>;
// //creating a component with a class
// class MyTime extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { time } = this.props;
//     return <p>{ time }</p>
//   }
// };



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



ReactDOM.render(
  <>
    <WeatherSummary
      dayOfWeek="Monday"
      percipitation="Light Rain"
      icon="https://picsum.photos/id/1/200/200"
      highTemp={99}
      lowTemp={50} 
      />

    <WeatherSummary
      dayOfWeek="Tuesday"
      icon="https://picsum.photos/id/2/200/200"
      highTemp={99}
      lowTemp={50} 
      />

<WeatherSummary
      dayOfWeek="Wednesday"
      icon="https://picsum.photos/id/3/200/200"
      highTemp={99}
      lowTemp={50} 
      />

<WeatherSummary
      dayOfWeek="Thursday"
      icon="https://picsum.photos/id/4/200/200"
      highTemp={99}
      lowTemp={50} 
      />

<WeatherSummary
      dayOfWeek="Friday"
      icon="https://picsum.photos/id/5/200/200"
      highTemp={99}
      lowTemp={50} 
      />
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
