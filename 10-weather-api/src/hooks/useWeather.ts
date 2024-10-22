import axios from "axios";
import { z } from "zod";
// import { object, string, number, parse, InferOutput } from "valibot";
import { SearchType } from "../types";
import { useMemo, useState } from "react";

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

//ZOD Schema (for validate fetch consulting)
const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
});

export type Weather = z.infer<typeof Weather>;

//VALIBOT (for validate fetch consulting)
// const WeatherSchema = object({
//   name: string(),
//   main: object({
//     temp: number(),
//     temp_max: number(),
//     temp_min: number(),
//   }),
// });

// type Weather = InferOutput<typeof WeatherSchema>;

const initialState = {
  name: "",
  main: {
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
};

export default function useWeather() {
  const [weather, setWeather] = useState<Weather>(initialState);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchWeather = async (search: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY;

    setLoading(true);
    setWeather(initialState);

    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
      //   console.log(geoUrl);
      const { data } = await axios(geoUrl);

      //country exist?
      if (!data[0]) {
        setNotFound(true);
        return;
      }

      //   console.log(data);

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
      const { data: weatherResult } = await axios<Weather>(weatherUrl);
      const result = Weather.safeParse(weatherResult);
      //   console.log(result);

      if (result.success) {
        setWeather(result.data);
      } else {
        console.log("respuesta mal formada...");
      }

      //VALIBOT
      //   const { data: weatherResult } = await axios<Weather>(weatherUrl);
      //   const result = parse(WeatherSchema, weatherResult);
      //   //   console.log(result);
      //   if (result) {
      //     console.log(result.name);
      //   } else {
      //     console.log("respuesta mal formada...");
      //   }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const hasWeatherData = useMemo(() => weather.name, [weather]);

  return {
    weather,
    loading,
    notFound,
    fetchWeather,
    hasWeatherData,
  };
}
