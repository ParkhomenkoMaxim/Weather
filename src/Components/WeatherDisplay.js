import React, { Component } from "react";
import UpperCase from '../FComponents/UpperCase';

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null

    };
  }

  componentDidMount() {   // получаем код города,на его основе формируем ссылку АПИ с которой получаем данные
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      ",ua&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric&lang=ru&mode=json";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }

  render() {
    const name = this.props.name;
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Загрузка</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";

    return (
      // Вытягиваем нужную информацию о погоде из полученного массива данных пример которого по ссылке ниже
      // http://api.openweathermap.org/data/2.5/weather?q=03057,ua&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric&lang=ru&mode=json
       
      <div>
        <h1>
          {UpperCase(weather.description)} в {name+"е"}      
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Температура: {weatherData.main.temp}°</p>
        <p>Диапазон: {weatherData.main.temp_min}°-{weatherData.main.temp_max}° </p>
        <p>Влажность: {weatherData.main.humidity}%</p>
        <p>Скорость ветра: {weatherData.wind.speed} км/час</p>
      </div>
    );
  }
}

export default WeatherDisplay;