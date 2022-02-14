import SettingsLink from "../fragments/SettingsLink"
import UserProfile from "../fragments/UserProfile"

const SettingsLinks = () => {
  return (
    <section className="settings">
      <UserProfile forSettingsLink/>
      <SettingsLink to="account" text="Cuenta"/>
      <SettingsLink to="linked_devices" text="Dispositivos enlazados"/>
      <hr />
      <SettingsLink to="appearance" text="Apariencia"/>
      <SettingsLink to="chats" text="Chats"/>
      <SettingsLink to="notifications" text="Notificaciones"/>
      <SettingsLink to="privacy" text="Privacidad"/>
      <SettingsLink to="data_storage" text="Datos y almacenamiento"/>
      <hr />
      <SettingsLink to="help" text="Ayuda"/>
      <SettingsLink to="invite" text="¡Invita a tus amistades!"/>
      <SettingsLink to="support_signal" text="Donar a Signal"/>
    </section>
  )
}

export default SettingsLinks