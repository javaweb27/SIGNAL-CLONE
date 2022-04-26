import classes from "../../styles/fragments/more-options.module.scss"
import { useRef } from "react"
import { Link } from "react-router-dom"
import HeaderButton from "./HeaderButton"
import LangText from "./LangText"

const MoreOptions = () => {
  const list = useRef()
  const root = document.getElementById("root")

  const closeMenu = (target, button) => {
    if (list.current && target !== button) list.current.classList.remove(classes.open)
  }

  const openMenu = e => {
    list.current.classList.add(classes.open)
    root.onclick = e_root => closeMenu(e_root.target, e.target)
  }

  return (
    <div className={classes.container}>
      <HeaderButton onClick={openMenu} iconName="more_options" />
      <ul ref={list} className={classes.menu}>
        <li><Link className={classes.option} to="new-group">
          <LangText spanish="Nuevo grupo" english="New group" />
        </Link></li>

        <li><button className={classes.option}>
          <LangText spanish="Marcar todos como leidos" english="Mark all read" />
        </button></li>

        <li><Link className={classes.option} to="invite-persons">
          <LangText spanish="Invitar personas" english="Invite friends" />
        </Link></li>

        <li><Link className={classes.option} to="settings">
          <LangText spanish="Ajustes" english="Settings" />
        </Link></li>

        <li><button className={classes.option}>
          <LangText spanish="Perfil de notificaciones" english="Notification profile" />
        </button></li>
      </ul>
    </div>
  )
}

export default MoreOptions
