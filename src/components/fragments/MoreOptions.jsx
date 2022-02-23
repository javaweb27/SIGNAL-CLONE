import classes from "../../styles/fragments/more-options.module.scss"
import { useRef } from "react"
import { Link } from "react-router-dom"
import HeaderButton from "./HeaderButton"

const MoreOptions = () => {
  const list = useRef()
  const root = document.getElementById("root")

  const closeMenu = (target, button) => {
    if (list.current && target !== button ) list.current.classList.remove(classes.open)
  }

  const openMenu = e => {
    list.current.classList.add(classes.open)
    root.onclick = e_root => closeMenu(e_root.target, e.target)
  }

  return (
    <div className={classes.container}>
      <HeaderButton onClick={openMenu} iconName="more_options"/>
      <ul ref={list} className={classes.menu}>
        <li><Link className={classes.option} to="new-group">Nuevo grupo</Link></li>
        <li><button className={classes.option}>Marcar todos como leidos</button></li>
        <li><Link className={classes.option} to="invite-persons">Invitar personas</Link></li>
        <li><Link className={classes.option} to="settings">Ajustes</Link></li>
      </ul>
    </div>
  )
}

export default MoreOptions
