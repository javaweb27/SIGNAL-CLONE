import SubpageLink from "../../fragments/SubpageLink"
import SubpageButton from "../../fragments/SubpageButton"
import BasicHeader from "../../sections/BasicHeader"

const Notifications = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Notificaciones"/>

      <section>
        <h4 className="section-subtitle">Mensajes</h4>
        <SubpageButton toggle title="Notificaciones"/>

        <SubpageButton title="Sonido">
          Predeterminado (sound.ogg)
        </SubpageButton>

        <SubpageButton toggle title="Vibracion"/>
        <SubpageButton toggle title="Color del LED"/>
        <SubpageButton toggle title="Sonidos enel chats"/>

        <SubpageButton title="Repetir alertas">
          Nunca
        </SubpageButton>

        <SubpageButton title="Mostrar">
          Nombre y mensaje
        </SubpageButton>

        <SubpageLink to="" title="Prioridad"/>

        <hr />

        <h4 className="section-subtitle">LLamadas</h4>
        <SubpageButton toggle title="Notificaciones"/>

        <SubpageButton title="Tono de llamada">
          Predeterminado
        </SubpageButton>

        <SubpageButton toggle title="Vibracion"/>

        <hr />

        <h4 className="section-subtitle">Notificarme cuando ...</h4>
        <SubpageButton toggle title="Alguien comienza a usar Signal"/>
      </section>
    </>
  )
}
export default Notifications