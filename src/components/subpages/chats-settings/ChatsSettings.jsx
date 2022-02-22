import SubpageLink from "../../fragments/SubpageLink"
import SubpageButton from "../../fragments/SubpageButton"
import BasicHeader from "../../sections/BasicHeader"

const ChatsSettings = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Chats"/>

      <section>
        <SubpageLink to="sms" title="SMS Y MMS"/>

        <SubpageButton toggle title="Generar vista previa de enlaces">
          Consectetur adipisicing elit. Nemo, neque dignissimos perspiciatis eveniet sed odio impedit doloribus, voluptatibus nulla.
          Consectetur adipisicing elit. Nemo, neque dignissimos perspiciatis eveniet sed odio impedit doloribus, voluptatibus nulla.
        </SubpageButton>

        <SubpageButton toggle title="Usar fotos de la libreria de contactos del dispositivo">
          Consectetur adipisicing elit. Nemo, neque dignissimos perspiciatis eveniet sed odio impedit doloribus, voluptatibus nulla.
        </SubpageButton>

        <hr />

        <h4 className="section-subtitle">Teclado</h4>
        <SubpageButton toggle title="Usar emoji del sistema"/>
        <SubpageButton toggle title="Enviar al tocar <<Intro<<"/>


        <h4 className="section-subtitle">Copias de seguridad</h4>

        <SubpageLink to="chats-backup" title="Copias de seguridad de los chats">
          Desactivado
        </SubpageLink>
      </section>
    </>
  )
}
export default ChatsSettings