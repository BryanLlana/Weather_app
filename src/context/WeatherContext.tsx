import { Dispatch, ReactNode, createContext, useReducer } from "react"
import { WeatherAction, WeatherState, initialState, weatherReducer } from "../components/reducer/weather.reduce"

type WeatherContextProps = {
  state: WeatherState,
  dispatch: Dispatch<WeatherAction>
}

type Props = {
  children: ReactNode
}

export const WeatherContext = createContext<WeatherContextProps>(null!)

export const WeatherProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState)
  return (
    <WeatherContext.Provider
      value={{
        state, 
        dispatch
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}