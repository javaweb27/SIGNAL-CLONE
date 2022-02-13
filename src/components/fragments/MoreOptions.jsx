import { useRef } from "react"
import { Link } from "react-router-dom"
import Svg from "../svg"

const MoreOptions = () => {
  const list = useRef()
  const root = document.getElementById("root")

  const closeOptions = (target, button) => {
    if (list.current && target !== button ) list.current.classList.remove("open")
  }
  const openOptions = e => {
    list.current.classList.add("open")
    root.onclick = e_root => closeOptions(e_root.target, e.target)
  }

  return (
    <div className="options-container">
      <button onClick={openOptions} className="more-options"><Svg name="more_options"/></button>
      <ul ref={list} className="list">
        <li><Link className="option" to="new-group">Nuevo grupo</Link></li>
        <li><button className="option">Marcar todos como leidos</button></li>
        <li><Link className="option" to="invite-persons">Invitar personas</Link></li>
        <li><Link className="option" to="settings">Ajustes</Link></li>
      </ul>
    </div>
  )
}

export default MoreOptions