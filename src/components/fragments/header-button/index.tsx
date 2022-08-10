import classes from "./index.module.scss"
import { Link } from "react-router-dom"
import Svg, { T_SvgPaths } from "../../svg"

interface I_Props {
  to?: string
  iconName: T_SvgPaths
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const HeaderButton = ({ to, iconName, onClick }: I_Props) => {
  const Component = to ? (
    <Link to={to} className={classes.button}>
      <Svg name={iconName} />
    </Link>
  ) : (
    <button onClick={onClick} className={classes.button}>
      <Svg name={iconName} />
    </button>
  )

  return Component
}

export default HeaderButton
