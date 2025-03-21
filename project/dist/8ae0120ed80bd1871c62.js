import axios from 'axios';
const form = document.getElementById('location-form');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('trip-date');
const tripInfoDiv = document.getElementById('trip-info');
form.addEventListener('submit', async event => {
  event.preventDefault();
  const location = locationInput.value;
  const tripDate = dateInput.value;
  try {
    const locationData = await fetchLocationData(location);
    const weatherData = await fetchWeatherData(locationData.lat, locationData.lng);
    const imageData = await fetchImage(location);
    displayTripInfo(locationData, weatherData, imageData, tripDate);
  } catch (error) {
    tripInfoDiv.innerHTML = `<p>Error fetching trip details. Please try again.</p>`;
    console.error("Error:", error);
  }
});

// ✅ Export these functions so they can be used in index.js
export async function fetchLocationData(location) {
  const res = await axios.get(`https://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=YOUR_GEONAMES_API_KEY`);
  const data = res.data.geonames[0];
  return {
    lat: data.lat,
    lng: data.lng,
    country: data.countryName,
    name: data.name
  };
}
export async function fetchWeatherData(lat, lng) {
  const res = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=YOUR_WEATHERBIT_API_KEY`);
  return res.data.data[0];
}
export async function fetchImage(location) {
  const res = await axios.get(`https://pixabay.com/api/?key=YOUR_PIXABAY_API_KEY&q=${location}&image_type=photo`);
  return res.data.hits.length > 0 ? res.data.hits[0].webformatURL : '';
}
export function displayTripInfo(locationData, weatherData, imageData, tripDate) {
  tripInfoDiv.innerHTML = `
    <h2>Trip to ${locationData.name}, ${locationData.country}</h2>
    <img src="${imageData}" alt="${locationData.name}" width="300">
    <p>Weather: ${weatherData.weather.description}</p>
    <p>Temperature: ${weatherData.temp}°C</p>
    <p>Countdown: ${getCountdown(tripDate)}</p>
  `;
}
function getCountdown(tripDate) {
  const today = new Date();
  const tripDateObj = new Date(tripDate);
  const timeDiff = tripDateObj - today;
  const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysRemaining > 0 ? `${daysRemaining} days left` : 'The trip is today!';
}