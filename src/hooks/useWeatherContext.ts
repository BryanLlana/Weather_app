import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"

export const useWeatherContext = () => {
  return useContext(WeatherContext)
}