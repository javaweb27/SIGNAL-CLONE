import { Link } from "react-router-dom"
import UserProfile from "../fragments/UserProfile"
import Svg from "../svg"

const SettingsLinks = () => {
  return (
    <section className="settings">
      <UserProfile forSettingsLink/>

      <Link to="account" className="link"><Svg name="account"/>Cuenta</Link>
      <Link to="linked-devices" className="link"><Svg name="linked_devices"/>Dispositivos enlazados</Link>
      <hr />
      <Link to="appearance" className="link"><Svg name="appearance"/>Apariencia</Link>
      <Link to="chats" className="link"><Svg name="chats"/>Chats</Link>
      <Link to="notifications" className="link"><Svg name="notifications"/>Notificaciones</Link>
      <Link to="privacy" className="link"><Svg name="privacy"/>Privacidad</Link>
      <Link to="data" className="link"><Svg name="data_storage"/>Datos y almacenamiento</Link>
      <hr />
      <Link to="help" className="link"><Svg name="help"/>Ayuda</Link>
      <Link to="invite" className="link"><Svg name="invite"/>¡Invita a tus amistades!</Link>
      <Link to="support-signal" className="link"><Svg name="support"/>Donar a Signal</Link>
    </section>
  )
}

export default SettingsLinks