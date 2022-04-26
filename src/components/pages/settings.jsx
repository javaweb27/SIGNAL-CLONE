import LangText from "../fragments/LangText"
import BasicHeader from "../sections/BasicHeader"
import SettingsLinks from "../sections/SettingsLinks"


const Settings = () => (
  <>
    <BasicHeader linkPath="/" titleType="h2" titleText={<LangText spanish="Ajustes" english="Settings" />}/>
    <SettingsLinks/>
  </>
)

export default Settings