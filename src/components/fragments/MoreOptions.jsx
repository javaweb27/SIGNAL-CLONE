import { useRef, useState } from "react"
import { Link } from "react-router-dom"

const MoreOptions = () => {
  const list = useRef()

  const openOptions = () => list.current.classList.add("open")

  return (
    <div className="options-container">
      <button onClick={openOptions} className="more-options">opciones</button>
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