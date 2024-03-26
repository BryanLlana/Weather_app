import { Weather } from '../components/form/Form'

export type WeatherState = {
  result: Weather,
  loading: boolean
}

export type WeatherAction = 
  { type: 'fetch-weather', payload: { result: Weather } } |
  { type: 'start-loading' } |
  { type: 'end-loading' }

export const initialState: WeatherState = {
  result: {
    name: '',
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0
    }
  },
  loading: false
}

export const weatherReducer = (state: WeatherState = initialState, action: WeatherAction) => {
  if (action.type === 'fetch-weather') {
    return {
      ...state,
      result: action.payload.result
    }
  }

  if (action.type === 'start-loading') {
    return {
      ...state,
      result: initialState.result,
      loading: true
    }
  }

  if (action.type === 'end-loading') {
    return {
      ...state,
      loading: false
    }
  }
  return state
}