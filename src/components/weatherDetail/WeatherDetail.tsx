import { formatTemperature } from "../../helpers"
import { useWeatherContext } from "../../hooks/useWeatherContext"
import style from './weatherdetail.module.css'

const WeatherDetail = () => {
  const { state } = useWeatherContext()
  return (
    <div className={style.container}>
      <h2>Clima de: {state.result.name}</h2>
      <p className={style.current}>{ formatTemperature(state.result.main.temp) }&deg;C</p>
      <div className={style.temperatures}>
        <p>Min: <span>{ formatTemperature(state.result.main.temp_min) }&deg;C</span></p>
        <p>Max: <span>{ formatTemperature(state.result.main.temp_max) }&deg;C</span></p>
      </div>
    </div>
  )
}

export default WeatherDetail