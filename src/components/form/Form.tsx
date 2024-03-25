import { countries } from '../../data'
import style from './form.module.css'

const Form = () => {
  return (
    <form className={style.form}>
      <div className={style.field}>
        <label htmlFor="city">Ciudad:</label>
        <input type="text" id='city' name='city' placeholder='Ejm: Madrid' />
      </div>
      <div className={style.field}>
        <label htmlFor="country">País:</label>
        <select name="country" id="country" defaultValue="">
          <option value="" disabled>--Seleccione un país--</option>
          {countries.map(country => (
            <option
              key={country.code}
              value={country.name}
            >{country.name}
            </option>
          ))}
        </select>
      </div>

      <input className={style.submit} type="submit" value="Consultar clima" />
    </form>
  )
}

export default Form