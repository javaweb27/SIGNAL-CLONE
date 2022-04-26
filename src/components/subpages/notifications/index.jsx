import SubpageLink from "../../fragments/SubpageLink"
import SubpageButton from "../../fragments/SubpageButton"
import BasicHeader from "../../sections/BasicHeader"
import LangText from "../../fragments/LangText"

const Notifications = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText={<LangText spanish="Notificaciones" english="Notifications" />} />

      <section>
        <h4 className="subpage-section-title"><LangText spanish="Mensajes" english="Messages" /></h4>
        <SubpageButton toggle title={<LangText spanish="Notificaciones" english="Notifications" />} />

        <SubpageButton title={<LangText spanish="Sonido" english="Sound" />}>
          <LangText spanish="Predeterminado" english="Default" /> (sound.ogg)
        </SubpageButton>

        <SubpageButton toggle title={<LangText spanish="Vibracion" english="Vibrate" />} />
        <SubpageButton toggle title={<LangText spanish="Color del LED" english="LED color" />} />
        <SubpageButton toggle title={<LangText spanish="Sonidos en el chats" english="In-chat sounds" />} />

        <SubpageButton title={<LangText spanish="Repetir alertas" english="Repeat alerts" />}>
          <LangText spanish="Nunca" english="Never" />
        </SubpageButton>

        <SubpageButton title={<LangText spanish="Mostrar" english="Show" />}>
          <LangText spanish="Nombre y mensaje" english="Name and message" />
        </SubpageButton>

        <SubpageLink to="" title={<LangText spanish="Prioridad" english="Priority" />} />

        <hr />

        <h4 className="subpage-section-title"><LangText spanish="LLamadas" english="Calls" /></h4>
        <SubpageButton toggle title={<LangText spanish="Notificaciones" english="Notifications" />} />

        <SubpageButton title={<LangText spanish="Tono de llamada}" english="Ringtone" />}>
        <LangText spanish="Predeterminado" english="Default" />
        </SubpageButton>

        <SubpageButton toggle title={<LangText spanish="Vibracion" english="Vibrate" />} />

        <hr />

        <h4 className="subpage-section-title"><LangText spanish="Notificarme cuando ..." english="Notify when" /></h4>
        <SubpageButton toggle title={<LangText spanish="Alguien comienza a usar Signal" english="Contact joins Signal" />} />
      </section>
    </>
  )
}
export default Notifications