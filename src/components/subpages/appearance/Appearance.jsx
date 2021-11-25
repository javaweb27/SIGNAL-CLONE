import Sublink from "../../fragments/Sublink"
import TextButton from "../../fragments/TextButton"
import BasicHeader from "../../sections/BasicHeader"
import { useContext } from "react"
import AppearanceContext from "../../context/appearance/AppearanceContext"
import ThemeSettings from "./ThemeSettings"

const Appearance = () => {

  const [state, dispatch] = useContext(AppearanceContext)

  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Apariencia"/>

      <section>
        <ThemeSettings context={{theme: state.theme, dispatch}}/>

        <Sublink to="chat-color" title="Color y fondo del chat"/>

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