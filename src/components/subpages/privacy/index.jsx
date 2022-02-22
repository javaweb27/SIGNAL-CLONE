import { Link } from "react-router-dom"
import SubpageLink from "../../fragments/SubpageLink"
import SubpageButton from "../../fragments/SubpageButton"
import BasicHeader from "../../sections/BasicHeader"

const Privacy = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Privacidad"/>

      <section>
        <SubpageLink to="blocked-people" title="Personas bloqueadas">
          0 contactos
        </SubpageLink>

        <hr />

        <h4 className="subpage-section-title">Mensajeria</h4>
        <SubpageButton toggle title="Notificaciones de lectura">
          Consectetur adipisicing elit. Nemo, neque dignissimos perspiciatis eveniet sed odio impedit doloribus, voluptatibus nulla.
        </SubpageButton>

        <SubpageButton toggle title="Indicadores de tecleo">
          Consectetur adipisicing elit. Nemo, neque dignissimos perspiciatis eveniet sed odio impedit doloribus, voluptatibus nulla.
        </SubpageButton>

        <hr />

        <h4 className="subpage-section-title">Desaparicion de mensajes</h4>

        <SubpageLink to="" title="Tiempo de desaparicion de mensajes por defecto en nuevos chats">
          Inactivo
        </SubpageLink>

        <h4 className="subpage-section-title">Seguridad de la aplicacion</h4>

        <SubpageButton toggle title="Bloqueo de pantalla">
          Bloquea el acceso a Signal con el codigo de bloqueo del dispositivo o la huella dactilar.
        </SubpageButton>

        <SubpageLink to="" title="Tiempo de inactividad para el bloqueo de pantalla">
          Ninguno
        </SubpageLink>

        <SubpageButton toggle title="Seguridad de pantalla">
          Bloquea capturas de pantalla en la lista de aplicaciones recientes y dentro de la aplicacion..
        </SubpageButton>

        <SubpageButton toggle title="Teclado en modo incognito">
          Solicitar al teclado deshabilitar el aprendizaje personalizado.
        </SubpageButton>

        <p className="description">Activar esta opcion no garantiza que tu teclado no analice tu mensajes.<Link to="" rel="noreferrer noopener nofollow" target="_blank">Saber mas.</Link></p>

        <hr />

        <SubpageLink to="" title="Avanzado">
          Los mensajes y llamadas de Signal siempre usan remitente confidencial y las llamadas se desvian.
        </SubpageLink>
      </section>
    </>
  )
}
export default Privacy