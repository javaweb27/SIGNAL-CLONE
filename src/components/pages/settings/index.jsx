import LangText from "../../fragments/LangText"
import BasicHeader from "../../core-sections/basic-header"
import SettingsLinks from "./SettingsLinks"

const Settings = () => (
  <>
    <BasicHeader linkPath="/home" titleType="h2" titleText={<LangText spanish="Ajustes" english="Settings" />}/>
    <SettingsLinks/>
  </>
)

export default Settings