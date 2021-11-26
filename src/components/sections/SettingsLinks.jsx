import { Link } from "react-router-dom"
import UserProfile from "../fragments/UserProfile"
import UserIcon from "../../svg/UserIcon"
import LinkedDevicesIcon from "../../svg/LinkedDevicesIcon"
import ChatsIcon from "../../svg/ChatsIcon"
import AppearanceIcon from "../../svg/AppearanceIcon"
import NotificationsIcon from "../../svg/NotificationsIcon"
import PrivacyIcon from "../../svg/PrivacyIcon"
import DataStorageIcon from "../../svg/DataStorageIcon"

const SettingsLinks = () => {
  return (
    <section className="settings">
      <UserProfile forSettingsLink/>

      <Link to="account" className="link"><UserIcon/>Cuenta</Link>
      <Link to="linked-devices" className="link"><LinkedDevicesIcon/>Dispositivos enlazados</Link>
      <hr />
      <Link to="appearance" className="link"><AppearanceIcon/>Apariencia</Link>
      <Link to="chats" className="link"><ChatsIcon/>Chats</Link>
      <Link to="notifications" className="link"><NotificationsIcon/>Notificaciones</Link>
      <Link to="privacy" className="link"><PrivacyIcon/>Privacidad</Link>
      <Link to="data" className="link"><DataStorageIcon/>Datos y almacenamiento</Link>
      <hr />
      <Link to="help" className="link"><UserIcon/>Ayuda</Link>
      <Link to="invite" className="link"><UserIcon/>¡Invita a tus amistades!</Link>
      <Link to="support-signal" className="link"><UserIcon/>Donar a Signal</Link>
    </section>
  )
}

export default SettingsLinks