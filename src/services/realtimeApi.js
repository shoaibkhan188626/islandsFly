// Fetch real-time weather and travel data from open APIs
// Using Open-Meteo API (no API key required) for weather data

export const fetchWeatherData = async (latitude = 4.1694, longitude = 73.5093) => {
  try {
    // Fetch weather for Maldives (default) or any location
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`
    );
    const data = await response.json();
    return data.current;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
};

export const fetchCurrencyRates = async () => {
  try {
    // Fetch USD to other currencies using exchangerate-api.com free tier
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    return {
      usd: data.rates.USD,
      eur: data.rates.EUR,
      gbp: data.rates.GBP,
      jpy: data.rates.JPY,
      cny: data.rates.CNY,
      rub: data.rates.RUB,
    };
  } catch (error) {
    console.error('Error fetching currency rates:', error);
    return null;
  }
};

export const fetchTravelNews = async () => {
  try {
    // Fetch travel-related data using NewsAPI (requires free API key or fallback)
    // For now, return mock data as fallback
    return [
      { title: 'Best time to visit Maldives', date: new Date() },
      { title: 'New resort opens in Ari Atoll', date: new Date() },
      { title: 'Sustainable tourism initiatives', date: new Date() },
    ];
  } catch (error) {
    console.error('Error fetching travel news:', error);
    return [];
  }
};

// Format temperature with weather description
export const getWeatherDescription = (code) => {
  const descriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Foggy',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    71: 'Slight snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail',
  };
  return descriptions[code] || 'Unknown';
};
