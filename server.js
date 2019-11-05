'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Application Setup
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get('/', (request,response) => {
  response.send('Home Page!');
});

app.get('/bad', (request,response) => {
  throw new Error('poo');
});

// The callback can be a separate function. Really makes things readable
app.get('/about', aboutUsHandler);

function aboutUsHandler(request,response) {
  response.status(200).send('About Us Page');
}

// API Routes
app.get('/location', (request,response) => {
  try {
    const geoData = require('./data/geo.json');
    const city = request.query.data;
    const locationData = new Location(city,geoData);
    response.send(locationData);
  }
  catch(error) {
    errorHandler('No location data for you!', request, response);
  }
});

app.get('/weather', (request,response) => {
  try {
    const weatherData = require('./data/darksky.json');
    // Credit for next 2 lines: Travis Skyles and David Vloedman
    const days = parseWeather(weatherData);
    response.send(days);
  }
  catch(error) {
    errorHandler('No weather data for you!', request, response);
  }
});

app.use('*', notFoundHandler);
app.use(errorHandler);

// HELPER FUNCTIONS

// Credit: Travis Skyles and David Vloedman
const parseWeather = weatherJSON => {
  const data = Object.values(weatherJSON.daily.data);
  const weatherDays = [];
  data.forEach(day => {
    weatherDays.push(new Weather(new Date(day.time*1000).toDateString(), day.summary));
  })
  return weatherDays;
}

function Location(city, geoData) {
  this.search_query = city;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude = geoData.results[0].geometry.location.lng;
}

function Weather(day, forecast) {
  this.time = day;
  this.forecast = forecast;
}

function notFoundHandler(request,response) {
  response.status(404).send('huh?');
}

function errorHandler(error,request,response) {
  response.status(500).send(error);
}

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on ${PORT}`) );
