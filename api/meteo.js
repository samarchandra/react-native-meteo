import axios from "axios";
export class MeteoAPI {
  static async fetchWeatherByCoords(coords) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }

  static async fetchCityByCoords(coords) {
    try {
      const {
        address: { city, village, town },
      } = (
        await axios.get(
          `https://geocode.maps.co/reverse?lat=${coords.lat}&lon=${coords.lng}&api_key=67398b74b3695469601048ucac39e1f`
        )
      ).data;
      return city || village || town;
    } catch (e) {
      return e.message;
    }
  }

  static async fetchCoordsByCityName(cityName) {
    try {
      const { latitude: lat, longitude: lng } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
        )
      ).data.results[0];
      return { lat, lng };
    } catch (err) {
      throw "Invalid city name";
    }
  }
}
