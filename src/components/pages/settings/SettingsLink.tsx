import classes from "./settings-link.module.scss"
import { Link } from "react-router-dom"
import Svg from "../../svg"

interface I_Props {
  to: string
  text: React.ReactNode
}

/**
 * Is used for the links of the settings page, least the first link that redirect to user profile configuration.
 */

const SettingsLink = ({ to, text }: I_Props) => {
  return (
    <Link to={to} className={classes.link}>
      <Svg name={to as any} />
      {text}
    </Link>
  )
}

export default SettingsLink
