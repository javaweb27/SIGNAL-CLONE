import Sublink from "../../fragments/Sublink"
import TextButton from "../../fragments/TextButton"
import BasicHeader from "../../sections/BasicHeader"

const Appearance = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Apariencia"/>

      <section>
        <TextButton title="Tema">
          Oscuro
        </TextButton>

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