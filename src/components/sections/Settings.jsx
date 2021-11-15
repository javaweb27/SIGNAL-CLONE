import { Link } from "react-router-dom"
import UserIcon from "../../../public/UserIcon"

const Settings = () => {
  return (
    <>
      <header>
        <Link to="/">
          flecha
        </Link>
        <h2>Ajustes</h2>
      </header>

      <section className="settings">
        <Link to="profile" className="link">Usuario</Link>

        <Link to="account" className="link"><UserIcon/>Cuenta</Link>
        <Link to="linked-devices" className="link"><UserIcon/>Dispositivos enlazados</Link>
        <hr />
        <Link to="appearance" className="link"><UserIcon/>Apariencia</Link>
        <Link to="chats" className="link"><UserIcon/>Chats</Link>
        <Link to="notifications" className="link"><UserIcon/>Notificaciones</Link>
        <Link to="privacy" className="link"><UserIcon/>Privacidad</Link>
        <Link to="data" className="link"><UserIcon/>Datos y almacenamiento</Link>
        <hr />
        <Link to="help" className="link"><UserIcon/>Ayuda</Link>
        <Link to="invite" className="link"><UserIcon/>¡Invita a tus amistades!</Link>
        <Link to="support-signal" className="link"><UserIcon/>Donar a Signal</Link>
      </section>
    </>
  )
}

export default Settings