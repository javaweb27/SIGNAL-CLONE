import classes from "./more-options.module.scss"
import { langMoreOptions as texts } from "./langMoreOptions"
import { useRef } from "react"
import { Link } from "react-router-dom"
import HeaderButton from "../../fragments/header-button"
import LangText from "../../fragments/LangText"

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
          <LangText {...texts.newGroup} />
        </Link></li>

        <li><button className={classes.option}>
          <LangText {...texts.markAllRead} />
        </button></li>

        <li><Link className={classes.option} to="invite-persons">
          <LangText {...texts.inviteFriends} />
        </Link></li>

        <li><Link className={classes.option} to="settings">
          <LangText {...texts.settings} />
        </Link></li>

        <li><button className={classes.option}>
          <LangText {...texts.notification} />
        </button></li>
      </ul>
    </div>
  )
}

export default MoreOptions
