export const API_CONFIG = {
  BASE_URL: "http://api.openweathermap.org/data/2.5",
  GEO: "http://api.openweathermap.org/geo/1.0",
  API_KEY: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
  DEFAULT_PARAMS: {
    units: "metric",
    appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
  },
};
