
export default class WeatherService {
  key = "1a043998f6944164857151526220503"


  getForecast(city, days) {
    const url = new URL("http://api.weatherapi.com/v1/forecast.json")
    url.search = new URLSearchParams({ key: this.key, q: city, days, aqi: "no" })
    return fetch(url.toString())
  }

}