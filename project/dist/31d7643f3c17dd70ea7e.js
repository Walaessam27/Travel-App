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
    tripInfoDiv.innerHTML = `<p>Error fetching data. Please try again.</p>`;
    console.error('Error:', error);
  }
});
async function fetchLocationData(location) {
  const res = await axios.get(`/api/geonames?location=${location}`);
  return res.data;
}
async function fetchWeatherData(lat, lng) {
  const res = await axios.get(`/api/weather?lat=${lat}&lon=${lng}`);
  return res.data;
}
async function fetchImage(location) {
  const res = await axios.get(`/api/pixabay?location=${location}`);
  return res.data.imageUrl;
}
function displayTripInfo(locationData, weatherData, imageData, tripDate) {
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