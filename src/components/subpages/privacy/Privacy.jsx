import { Link } from "react-router-dom"
import Sublink from "../../fragments/Sublink"
import TextButton from "../../fragments/TextButton"
import BasicHeader from "../../sections/BasicHeader"

const Privacy = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Privacidad"/>

      <section>
        <Sublink to="blocked-people" title="Personas bloqueadas">
          0 contactos
        </Sublink>

        <hr />

        <h4>Mensajeria</h4>
        <TextButton toggle title="Notificaciones de lectura">
          Consectetur adipisicing elit. Nemo, neque dignissimos perspiciatis eveniet sed odio impedit doloribus, voluptatibus nulla.
        </TextButton>

        <TextButton toggle title="Incidacores de tecleo">
          Consectetur adipisicing elit. Nemo, neque dignissimos perspiciatis eveniet sed odio impedit doloribus, voluptatibus nulla.
        </TextButton>

        <hr />

        <h4>Desaparicion de mensajes</h4>

        <Sublink to="" title="Tiempo de desaparicion de mensajes por defecto en nuevos chats">
          Inactivo
        </Sublink>

        <TextButton toggle title="Bloqueo de pantalla">
          Bloquea el acceso a Signal con el codigo de bloqueo del dispositivo o la huella dactilar.
        </TextButton>

        <Sublink to="" title="Tiempo de inactividad para el bloqueo de pantalla">
          Ninguno
        </Sublink>

        <TextButton toggle title="Seguridad de pantalla">
          Bloquea capturas de pantalla en la lista de aplicaciones recientes y dentro de la aplicacion..
        </TextButton>

        <TextButton toggle title="Teclado en modo incognito">
          Solicitar al teclado deshabilitar el aprendizaje personalizado.
        </TextButton>

        <p className="description">Activar esta opcion no garantiza que tu teclado no analice tu mensajes.<Link to="" rel="noreferrer noopener nofollow" target="_blank">Saber mas.</Link></p>

        <hr />

        <Sublink to="" title="Avanzado">
          Los mensajes y llamadas de Signal siempre usan remitente confidencial y las llamadas se desvian.
        </Sublink>
      </section>
    </>
  )
}
export default Privacy