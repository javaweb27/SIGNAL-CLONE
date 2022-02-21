import SubpageLink from "../../fragments/SubpageLink"
import TextButton from "../../fragments/TextButton"
import BasicHeader from "../../sections/BasicHeader"

const Notifications = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Notificaciones"/>

      <section>
        <h4 className="section-subtitle">Mensajes</h4>
        <TextButton toggle title="Notificaciones"/>

        <TextButton title="Sonido">
          Predeterminado (sound.ogg)
        </TextButton>

        <TextButton toggle title="Vibracion"/>
        <TextButton toggle title="Color del LED"/>
        <TextButton toggle title="Sonidos enel chats"/>

        <TextButton title="Repetir alertas">
          Nunca
        </TextButton>

        <TextButton title="Mostrar">
          Nombre y mensaje
        </TextButton>

        <SubpageLink to="" title="Prioridad"/>

        <hr />

        <h4 className="section-subtitle">LLamadas</h4>
        <TextButton toggle title="Notificaciones"/>

        <TextButton title="Tono de llamada">
          Predeterminado
        </TextButton>

        <TextButton toggle title="Vibracion"/>

        <hr />

        <h4 className="section-subtitle">Notificarme cuando ...</h4>
        <TextButton toggle title="Alguien comienza a usar Signal"/>
      </section>
    </>
  )
}
export default Notifications