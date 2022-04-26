import { Link } from "react-router-dom"
import SubpageLink from "../../fragments/SubpageLink"
import SubpageButton from "../../fragments/SubpageButton"
import BasicHeader from "../../sections/BasicHeader"
import LangText from "../../fragments/LangText"

const Privacy = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText={<LangText spanish="Privacidad" english="Privacy" />} />

      <section>
        <SubpageLink to="blocked-people" title={<LangText spanish="Personas bloqueadas" english="Blocked" />}>
          0 <LangText spanish="contactos" english="contacts" />
        </SubpageLink>

        <hr />

        <h4 className="subpage-section-title"><LangText spanish="Mensajeria" english="Messaging" /></h4>
        <SubpageButton toggle title={<LangText spanish="Notificaciones de lectura" english="Read receipts" />}>
          Consectetur adipisicing elit. Nemo, neque dignissimos perspiciatis eveniet sed odio impedit doloribus, voluptatibus nulla.
        </SubpageButton>

        <SubpageButton toggle title={<LangText spanish="Indicadores de tecleo" english="Typing indicators" />}>
          Consectetur adipisicing elit. Nemo, neque dignissimos perspiciatis eveniet sed odio impedit doloribus, voluptatibus nulla.
        </SubpageButton>

        <hr />

        <h4 className="subpage-section-title"><LangText spanish="Desaparicion de mensajes" english="Disappearing messages" /></h4>

        <SubpageLink to="" title={<LangText spanish="Tiempo de desaparicion de mensajes por defecto en nuevos chats" english="Default disappearing messages timer" />}>
          <LangText spanish="Inactivo" english="Off" />
        </SubpageLink>

        <h4 className="subpage-section-title"><LangText spanish="Seguridad de la aplicacion" english="App security" /></h4>

        <SubpageButton toggle title={<LangText spanish="Bloqueo de pantalla" english="Screen lock" />}>
          <LangText spanish="Bloquea el acceso a Signal con el codigo de bloqueo del dispositivo o la huella dactilar." english="Lock signal access with devices screen lock or fingerprint" />
        </SubpageButton>

        <SubpageLink to="" title={<LangText spanish="Tiempo de inactividad para el bloqueo de pantalla" english="Screen lock inactivity timeout" />}>
          <LangText spanish="Ninguno" english="None" />
        </SubpageLink>

        <SubpageButton toggle title={<LangText spanish="Seguridad de pantalla" english="Screen security" />}>
          <LangText spanish="Bloquea capturas de pantalla en la lista de aplicaciones recientes y dentro de la aplicacion" english="Block screenshots in the recents list and inside the app" />
        </SubpageButton>

        <SubpageButton toggle title={<LangText spanish="Teclado en modo incognito" english="Incognito keyboard" />}>
          <LangText spanish="Solicitar al teclado deshabilitar el aprendizaje personalizado." english="Request keyboard to disable personalized learning" />
        </SubpageButton>

        <p className="description">
          <LangText spanish="Activar esta opcion no garantiza que tu teclado no analice tu mensajes." english="This setting is not a guarantee, and your keyboard may ignore it." />
          <Link to="" rel="noreferrer noopener nofollow" target="_blank">
            <LangText spanish="Saber mas" english="Learn more" />
          </Link>
        </p>
        <hr />

        <SubpageLink to="" title={<LangText spanish="Avanzado" english="Advanced" />}>
        <LangText spanish="Los mensajes y llamadas de Signal siempre usan remitente confidencial y las llamadas se desvian." english="Signal messages and calls, always relay calls, and sealed sender." />
        </SubpageLink>
      </section>
    </>
  )
}
export default Privacy