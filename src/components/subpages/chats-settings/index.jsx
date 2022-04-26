import SubpageLink from "../../fragments/SubpageLink"
import SubpageButton from "../../fragments/SubpageButton"
import BasicHeader from "../../sections/BasicHeader"
import LangText from "../../fragments/LangText"

const ChatsSettings = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText={<LangText spanish="Chats" english="Chats" />} />

      <section>
        <SubpageLink to="sms" title={<LangText spanish="SMS Y MMS" english="SMS and MMS" />} />

        <SubpageButton toggle title={<LangText spanish="Generar vista previa de enlaces" english="Generate link previews" />}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempora accusantium corrupti assumenda necessitatibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempora accusantium corrupti assumenda necessitatibus.
        </SubpageButton>

        <SubpageButton toggle title={<LangText spanish="Usar fotos de la libreria de contactos del dispositivo" english="Use address book photos" />}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempora accusantium corrupti assumenda necessitatibus.
        </SubpageButton>

        <hr />

        <h4 className="subpage-section-title">{<LangText spanish="Teclado" english="Keyboard" />}</h4>
        <SubpageButton toggle title={<LangText spanish="Usar emoji del sistema" english="Use system emoji" />} />
        <SubpageButton toggle title={<LangText spanish="Enviar al tocar <<Intro<<" english="Enter key sends" />} />


        <h4 className="subpage-section-title">{<LangText spanish="Copias de seguridad" english="Backups" />}</h4>

        <SubpageLink to="chats-backup" title={<LangText spanish="Copias de seguridad de los chats" english="Chat backups" />}>
        <LangText spanish="Desactivado" english="Disabled" />
        </SubpageLink>
      </section>
    </>
  )
}
export default ChatsSettings