import { Link } from "react-router-dom"
import Sublink from "../../fragments/Sublink"
import TextButton from "../../fragments/TextButton"
import BasicHeader from "../../sections/BasicHeader"

const Account = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Cuenta"/>

      <section className="cuenta">
        <h4 className="section-subtitle">PIN de Signal</h4>
        <Sublink to="" title="Modificar PIN"/>

        <TextButton toggle title="Recordatorios de PIN">
          Te lo soliitaremos menos a menudo con el pasar del tiempo
        </TextButton>

        <TextButton toggle title="Bloqueo de registro">
          Requerir tu PIN de signal al volver a registrar tu numero con signal
        </TextButton>
        <Sublink to="" title="Ajustes avanzados del PIN"/>

        <hr />

        <h4 className="section-subtitle">Cuenta</h4>
        <Sublink to="" title="Transferir cuenta">
          Transferir cuenta a otro dispositivo nuevo
        </Sublink>
        
        <Sublink to="" title="Eliminar cuenta"/>
        <Link to="">Eliminar cuenta</Link>
      </section>
    </>
  )
}

export default Account