import { langAppearance as texts } from "./langs/langAppearance"
import { useAppearanceContext } from "../../context/appearance"
import ThemeSettings from "./ThemeSettings"
import BasicHeader from "../../core-sections/basic-header"
import SubpageButton from "../../fragments/subpage-button"
import SubpageLink from "../../fragments/subpage-link"
import LangText from "../../fragments/LangText"
import LanguageSettings from "./LanguageSettings"

const Appearance = () => {
  const [{ theme, language }, dispatch] = useAppearanceContext()

  return (
    <>
      <BasicHeader linkPath="/settings" titleTag="h3" titleText={<LangText {...texts.headerTitle} />}/>

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