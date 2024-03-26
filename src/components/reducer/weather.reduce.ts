import { Inputs } from "../../types"
import axios from 'axios'

export type WeatherState = {
  result: Object
}

export type WeatherAction = 
  { type: 'fetch-weather', payload: { search: Inputs } }

export const initialState: WeatherState = {
  result: []
}

const fetchWeater = async (url: string) => {
  try {
    const { data } = await axios.get(url)
  } catch (error) {
    console.log(error)
  }
}

export const weatherReducer = (state: WeatherState = initialState, action: WeatherAction) => {
  if (action.type === 'fetch-weather') {
    const { city, country } = action.payload.search
    const apiKey = '898b5bae231e6087df1ca8e7bb9e2436'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
    fetchWeater(url)
  }
  return state
}