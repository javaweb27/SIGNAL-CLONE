import { useContext } from "react"
import TextButton from "../../fragments/TextButton"
import BasicHeader from "../../sections/BasicHeader"
import AppearanceContext from "../../context/appearance/AppearanceContext"
import ThemeSettings from "./ThemeSettings"
import SubpageLink from "../../fragments/SubpageLink"

const Appearance = () => {

  const [state, dispatch] = useContext(AppearanceContext)

  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Apariencia"/>

      <section>
        <ThemeSettings context={{theme: state.theme, dispatch}}/>

        <SubpageLink to="chat-color" title="Color y fondo del chat"/>

        <TextButton title="Tamaño de fuente del mensaje">
          Normal
        </TextButton>

        <TextButton title ="Idioma">
          Predeterminado del sitema
        </TextButton>
      </section>
    </>
  )
}

export default Appearance