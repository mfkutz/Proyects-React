import Alert from "./Alert/Alert"
import styles from "./App.module.css"
import Form from "./Form/Form"
import useWeather from "./hooks/useWeather"
import Spinner from "./Spinner/Spinner"
import WeatherDetail from "./WeatherDetail/WeatherDetail"

function App() {
  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather()

  // console.log(import.meta.env)

  return (
    <>
      <h1 className={styles.title}>Weather</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  )
}

export default App
