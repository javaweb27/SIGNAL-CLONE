//Se usa para los links de la pagina Settings, exepto el primer link que lleva a la configuracion del perfil del usuario
import classes from "../../styles/fragments/settings-link.module.scss"
import { Link } from "react-router-dom"
import Svg from "../svg"

const SettingsLink = ({ to, text }) => {
  return (
    <Link to={to} className={classes.link}>
      <Svg name={to}/>{ text }
    </Link>
  )
}

export default SettingsLink
