import Sublink from "../../fragments/Sublink"
import TextButton from "../../fragments/TextButton"
import BasicHeader from "../../sections/BasicHeader"
import { useState } from "react"
import MenuTheme from "./MenuTheme"

const Appearance = () => {

  const [menuTheme, setMenuTheme] = useState(false)
  const [actualTheme, setActualTheme] = useState("Predeterminado del dispositivo")

  const openMenuTheme = () => setMenuTheme(true)

  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Apariencia"/>

      <section>
        <TextButton title="Tema" event={{onClick: openMenuTheme}}>
          {actualTheme}
        </TextButton>
        <MenuTheme updateActualTheme={setActualTheme} setMenuState={setMenuTheme} menuState={menuTheme}/>

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