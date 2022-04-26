import LangText from "../fragments/LangText"
import SettingsLink from "../fragments/SettingsLink"
import UserProfile from "../fragments/UserProfile"

const SettingsLinks = () => {
  return (
    <section className="settings">
      <UserProfile/>
      <SettingsLink to="account" text={<LangText spanish="Cuenta" english="Account" />}/>
      <SettingsLink to="linked_devices" text={<LangText spanish="Dispositivos enlazados" english="Linked devices" />}/>
      <SettingsLink to="payments" text={<LangText spanish="Pagos" english="Payments" />}/>
      <hr />
      <SettingsLink to="appearance" text={<LangText spanish="Apariencia" english="Appearance" />}/>
      <SettingsLink to="chats" text={<LangText spanish="Chats" english="Chats" />}/>
      <SettingsLink to="notifications" text={<LangText spanish="Notificaciones" english="Notifications" />}/>
      <SettingsLink to="privacy" text={<LangText spanish="Privacidad" english="Privacy" />}/>
      <SettingsLink to="data_storage" text={<LangText spanish="Datos y almacenamiento" english="Data and storage" />}/>
      <hr />
      <SettingsLink to="help" text={<LangText spanish="Ayuda" english="Help" />}/>
      <SettingsLink to="invite" text={<LangText spanish="¡Invita a tus amistades!" english="Invite your friends" />}/>
      <SettingsLink to="support_signal" text={<LangText spanish="Sostén Signal" english="Become a Signal Sustainer" />}/>
    </section>
  )
}

export default SettingsLinks