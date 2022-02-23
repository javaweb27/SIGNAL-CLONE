import { button } from "../../styles/fragments/header-button.module.scss"
import { Link } from "react-router-dom"
import Svg from "../svg"

const HeaderButton = ({ to, iconName, onClick }) => {
  const Component = (to ? 
    <Link to={to} className={button}><Svg name={iconName}/></Link>
    :
    <button onClick={onClick} className={button}><Svg name={iconName}/></button>
  )

  return Component
}

export default HeaderButton