import { ReactNode } from "react"
import style from './alerta.module.css'

type Props = {
  children: ReactNode
}

const Alert = ({ children }: Props) => {
  return (
    <div className={style.alert}>{children}</div>
  )
}

export default Alert