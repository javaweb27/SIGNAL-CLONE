import { langAppearance as texts } from "./langs/langAppearance"
import { useContext } from "react"
import AppearanceContext from "../../context/appearance"
import ThemeSettings from "./ThemeSettings"
import BasicHeader from "../../sections/BasicHeader"
import SubpageButton from "../../fragments/SubpageButton"
import SubpageLink from "../../fragments/SubpageLink"
import LangText from "../../fragments/LangText"
import LanguageSettings from "./LanguageSettings"

const Appearance = () => {

  const [{ theme, language }, dispatch] = useContext(AppearanceContext)

  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText={<LangText {...texts.headerTitle} />}/>

      <section>
        <ThemeSettings context={[theme, dispatch]} />

        <SubpageLink to="chat-color" title={<LangText {...texts.chatColor} />}/>

        <SubpageButton title={<LangText {...texts.messageFontSize} />}>
          <LangText {...texts.messageFontSizePar} />
        </SubpageButton>

        <LanguageSettings context={[language, dispatch]}/>
      </section>
    </>
  )
}

export default Appearance