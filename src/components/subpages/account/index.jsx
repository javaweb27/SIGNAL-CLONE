import SubpageLink from "../../fragments/SubpageLink"
import SubpageButton from "../../fragments/SubpageButton"
import BasicHeader from "../../sections/BasicHeader"
import LangText from "../../fragments/LangText"

const Account = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText={<LangText spanish="Cuenta" english="Account" />} />

      <section className="cuenta">
        <h4 className="subpage-section-title">{<LangText spanish="PIN de Signal" english="Signal PIN" />}</h4>
        <SubpageLink to="" title={<LangText spanish="Modificar PIN" english="Change your PIN" />} />

        <SubpageButton toggle title={<LangText spanish="Recordatorios de PIN" english="PIN reminders" />}>
          <LangText spanish="Te lo soliitaremos menos a menudo con el pasar del tiempo" english="You'll be asked less frequently over time" />
        </SubpageButton>

        <SubpageButton toggle title={<LangText spanish="Bloqueo de registro" english="Registration Lock" />}>
          <LangText spanish="Requerir tu PIN de signal al volver a registrar tu numero con signal" english="Require your Signal PIN to register your phone number with Signal again" />
        </SubpageButton>
        <SubpageLink to="" title={<LangText spanish="Ajustes avanzados del PIN" english="Advanced PIN settings" />} />

        <hr />

        <h4 className="subpage-section-title">
          <LangText spanish="Cuenta" english="Account" />
        </h4>
        <SubpageLink to="" title={<LangText spanish="Transferir cuenta" english="Transfer account" />}>
          <LangText spanish="Transferir cuenta a otro dispositivo nuevo" english="Transfer account to a new device" />
        </SubpageLink>

        <SubpageLink to="" title={<LangText spanish="Eliminar cuenta" english="Delete account"/>} />
      </section>
    </>
  )
}

export default Account