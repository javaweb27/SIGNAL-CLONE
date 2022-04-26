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
      <BasicHeader linkPath="/settings" titleType="h3" titleText={<LangText spanish="Apariencia" english="Appearance" />}
      />

      <section>
        <ThemeSettings context={[theme, dispatch]} />

        <SubpageLink to="chat-color" title={<LangText spanish="Color y fondo del chat" english="Chat color & wallpaper" />}
        />

        <SubpageButton title={<LangText spanish="Tamaño de fuente del mensaje" english="Message font size" />}>
          <LangText spanish="Normal" english="Normal" />
        </SubpageButton>

        <LanguageSettings context={[language, dispatch]}/>
      </section>
    </>
  )
}

export default Appearance