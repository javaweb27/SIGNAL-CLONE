import { langSettingsLinks as texts } from "./langSettingsLinks"
import LangText from "../../fragments/LangText"
import SettingsLink from "./SettingsLink"
import UserProfile from "./UserProfile"

const SettingsLinks = () => {
  return (
    <section>
      <UserProfile/>
      <SettingsLink to="account" text={<LangText {...texts.account}  />}/>
      <SettingsLink to="linked_devices" text={<LangText  {...texts.linkedDevices}/>}/>
      <SettingsLink to="payments" text={<LangText {...texts.payments} />}/>
      <hr />
      <SettingsLink to="appearance" text={<LangText {...texts.appearance} />}/>
      <SettingsLink to="chats" text={<LangText {...texts.chats} />}/>
      <SettingsLink to="notifications" text={<LangText {...texts.notifications} />}/>
      <SettingsLink to="privacy" text={<LangText {...texts.privacy} />}/>
      <SettingsLink to="data_storage" text={<LangText {...texts.dataStorage} />}/>
      <hr />
      <SettingsLink to="help" text={<LangText {...texts.help} />}/>
      <SettingsLink to="invite" text={<LangText {...texts.invite} />}/>
      <SettingsLink to="support_signal" text={<LangText {...texts.supportSignal} />}/>
    </section>
  )
}

export default SettingsLinks