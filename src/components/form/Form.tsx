import { countries } from '../../data'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from './form.module.css'
import { Inputs } from '../../types'
import Alert from '../alerta/Alert'
import { useWeatherContext } from '../../hooks/useWeatherContext'
import { object, string, number, Output, parse } from 'valibot'
import axios from 'axios'

const WeatherSchema = object({
  name: string(),
  main: object({
    temp: number(),
    temp_max: number(),
    temp_min: number()
  })
})

export type Weather = Output<typeof WeatherSchema>

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const { dispatch } = useWeatherContext()

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const apiKey = '898b5bae231e6087df1ca8e7bb9e2436'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${apiKey}`
    const { data: weatherResult } = await axios(url)
    const result = parse(WeatherSchema, weatherResult)
    dispatch({ type: 'fetch-weather', payload: { result } })
  } 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.field}>
        <label htmlFor="city">Ciudad:</label>
        <input 
          type="text"
          id='city'
          placeholder='Ejm: Madrid'
          {...register('city', {
            required: 'La ciudad es obligatoria'
          })}
        />
        {errors.city && <Alert>{errors.city.message}</Alert>}
      </div>
      <div className={style.field}>
        <label htmlFor="country">País:</label>
        <select id='country' {...register('country', {
          required: 'El país es obligatorio'
        })} defaultValue=''>
          <option value="" disabled>--Seleccione un país--</option>
          {countries.map(country => (
            <option
              key={country.code}
              value={country.name}
            >{country.name}
            </option>
          ))}
        </select>
        {errors.country && <Alert>{errors.country.message}</Alert>}
      </div>

      <input className={style.submit} type="submit" value="Consultar clima" />
    </form>
  )
}

export default Form