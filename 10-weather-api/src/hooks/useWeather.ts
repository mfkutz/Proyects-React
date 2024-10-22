import axios from "axios";
import { SearchType, Weather } from "../types";

//TYPE GUARD OR ASSERTION - NOT MAINTAINABLE
// function isWeatherResponse(weather: unknown): weather is Weather {
//   return (
//     Boolean(weather) &&
//     typeof weather === "object" &&
//     typeof (weather as Weather).name === "string" &&
//     typeof (weather as Weather).main.temp === "number" &&
//     typeof (weather as Weather).main.temp_max === "number" &&
//     typeof (weather as Weather).main.temp_min === "number"
//   );
// }

export default function useWeather() {
  const fetchWeather = async (search: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY;

    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
      //   console.log(geoUrl);
      const { data } = await axios(geoUrl);

      console.log(data);

      const lat = data[0].lat;
      const lon = data[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

      //"Cast type" not recomended////////////////////////////////////////////////////////////
      //   const { data: weatherResult } = await axios<Weather>(weatherUrl);
      //   console.log(weatherResult.name);
      //   console.log(weatherResult.main.temp);

      //Type Guards - not recommened too - not maintainable - USE ONLY IN BASIC APLICATIONS///
      /* const { data: weatherResult } = await axios<Weather>(weatherUrl);
      const result = isWeatherResponse(weatherResult); //returns boolean
      if (result) {
        console.log(weatherResult.main.temp);
      } */

      // ZOD ////////////////////////////////////////////////////////////////////////////////
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchWeather };
}
