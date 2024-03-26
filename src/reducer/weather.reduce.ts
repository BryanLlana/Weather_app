import { Weather } from '../components/form/Form'

export type WeatherState = {
  result: Weather
}

export type WeatherAction = 
  { type: 'fetch-weather', payload: { result: Weather } }

export const initialState: WeatherState = {
  result: {
    name: '',
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0
    }
  }
}

export const weatherReducer = (state: WeatherState = initialState, action: WeatherAction) => {
  if (action.type === 'fetch-weather') {
    return {
      ...state,
      result: action.payload.result
    }
  }
  return state
}