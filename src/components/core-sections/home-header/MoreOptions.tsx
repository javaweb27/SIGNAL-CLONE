import classes from "./more-options.module.scss"
import { langMoreOptions as texts } from "./langMoreOptions"
import { useRef } from "react"
import { Link } from "react-router-dom"
import HeaderButton from "../../fragments/header-button"
import LangText from "../../fragments/LangText"
import { refreshLoginStatus, useLoginStatusContext } from "../../context/login-status"
import { lsDeleteAuthToken } from "../../../lib/localStorageHandlers"

const MoreOptions = () => {
  const [, setLoginStatus] = useLoginStatusContext()
  const list = useRef<HTMLUListElement | null>(null)
  const root = document.getElementById("root") as HTMLDivElement

  const closeMenu = (target: EventTarget, button: EventTarget) => {
    if (list.current && target !== button) list.current.classList.remove(classes.open)
  }

  const openMenu = ({ target }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    list.current!.classList.add(classes.open)
    root.onclick = eventCloseMenu => closeMenu(eventCloseMenu.target!, target)
  }

  const logout = () => {
    lsDeleteAuthToken()
    setLoginStatus(refreshLoginStatus())
  }

  return (
    <div className={classes.container}>
      <HeaderButton onClick={openMenu} iconName="more_options" />
      <ul ref={list} className={classes.menu}>
        <li>
          <Link className={classes.option} to="new-group">
            <LangText {...texts.newGroup} />
          </Link>
        </li>

        <li>
          <button className={classes.option}>
            <LangText {...texts.markAllRead} />
          </button>
        </li>

        <li>
          <Link className={classes.option} to="invite-persons">
            <LangText {...texts.inviteFriends} />
          </Link>
        </li>

        <li>
          <Link className={classes.option} to="/settings">
            <LangText {...texts.settings} />
          </Link>
        </li>

        <li>
          <button className={classes.option}>
            <LangText {...texts.notification} />
          </button>
        </li>

        <li>
          <button className={classes.option} onClick={logout}>
            <LangText {...texts.btnLogout} />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default MoreOptions
