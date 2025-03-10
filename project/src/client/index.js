import "./styles/style.scss";
import { fetchLocationData, fetchWeatherData, fetchImage, displayTripInfo, getCountdown } from "./js/app";

// Select elements
const form = document.getElementById('location-form');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('trip-date');
const tripInfoDiv = document.getElementById('trip-info');

// Handle form submission
form.addEventListener('submit', async (event) => {
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

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(error => console.error('Service Worker Registration Failed:', error));
}
