// app.test.js
import { screen, fireEvent, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { displayTripInfo, fetchLocationData, fetchWeatherData, fetchImage } from './app'; // Assuming these functions are exported from app.js

// Mock the API requests
jest.mock('./app', () => ({
  fetchLocationData: jest.fn(),
  fetchWeatherData: jest.fn(),
  fetchImage: jest.fn(),
  displayTripInfo: jest.fn(),
}));

describe('Client-side JavaScript', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="trip-form">
        <input id="destination" name="destination" />
        <input id="trip-date" name="trip-date" />
        <button type="submit">Submit</button>
      </form>
      <div id="trip-info"></div>
    `;
  });

  it('should call the displayTripInfo function when the form is submitted', async () => {
    const mockData = {
      location: 'London',
      weather: 'Sunny',
      image: 'image-url',
      countdown: '10 days',
    };

    fetchLocationData.mockResolvedValue(mockData);
    fetchWeatherData.mockResolvedValue(mockData);
    fetchImage.mockResolvedValue(mockData);
    
    fireEvent.change(screen.getByLabelText('destination'), {
      target: { value: 'London' },
    });
    fireEvent.change(screen.getByLabelText('trip-date'), {
      target: { value: '2025-12-25' },
    });

    fireEvent.submit(screen.getByTestId('trip-form'));

    await waitFor(() => {
      expect(displayTripInfo).toHaveBeenCalledWith(mockData);
      expect(screen.getByText('London')).toBeInTheDocument();
      expect(screen.getByText('Sunny')).toBeInTheDocument();
      expect(screen.getByText('10 days')).toBeInTheDocument();
    });
  });

  it('should handle errors gracefully if the API fails', async () => {
    fetchLocationData.mockRejectedValue(new Error('Failed to fetch location data'));

    fireEvent.submit(screen.getByTestId('trip-form'));

    await waitFor(() => {
      expect(screen.getByText('Error fetching trip data')).toBeInTheDocument();
    });
  });
});
