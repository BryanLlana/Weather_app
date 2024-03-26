import { useMemo } from 'react'
import style from './app.module.css'
import Form from './components/form/Form'
import WeatherDetail from './components/weatherDetail/WeatherDetail'
import { useWeatherContext } from './hooks/useWeatherContext'

const App = () => {
  const { state } = useWeatherContext()
  const hasWeatherData = useMemo(() => state.result.name, [state.result])
  return (
    <>
      <h1 className={style.title}>Buscador de Clima</h1>
      <div className={style.container}>
        <Form />
        {hasWeatherData && (
          <WeatherDetail />
        )}
      </div>
    </>
  )
}

export default App