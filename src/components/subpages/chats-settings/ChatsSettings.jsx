import Sublink from "../../fragments/Sublink"
import TextButton from "../../fragments/TextButton"
import BasicHeader from "../../sections/BasicHeader"

const ChatsSettings = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Chats"/>

      <section>
        <Sublink to="sms" title="SMS Y MMS"/>

        <TextButton toggle title="Generar vista previa de enlaces">
          Consectetur adipisicing elit. Nemo, neque dignissimos perspiciatis eveniet sed odio impedit doloribus, voluptatibus nulla.
          Consectetur adipisicing elit. Nemo, neque dignissimos perspiciatis eveniet sed odio impedit doloribus, voluptatibus nulla.
        </TextButton>

        <TextButton toggle title="Usar fotos de la libreria de contactos del dispositivo">
          Consectetur adipisicing elit. Nemo, neque dignissimos perspiciatis eveniet sed odio impedit doloribus, voluptatibus nulla.
        </TextButton>

        <hr />

        <h4 className="section-subtitle">Teclado</h4>
        <TextButton toggle title="Usar emoji del sistema"/>
        <TextButton toggle title="Enviar al tocar <<Intro<<"/>


        <h4 className="section-subtitle">Copias de seguridad</h4>

        <Sublink to="chats-backup" title="Copias de seguridad de los chats">
          Desactivado
        </Sublink>
      </section>
    </>
  )
}
export default ChatsSettings