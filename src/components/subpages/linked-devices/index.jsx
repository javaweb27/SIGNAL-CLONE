import LangText from "../../fragments/LangText"
import BasicHeader from "../../sections/BasicHeader"

const LinkedDevices = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText={<LangText spanish="Dispositivos enlazados" english="Linked devices" />} />

      <section>
        <p><LangText spanish="no hay dispositivos enlazados" english="No devices linked" /></p>
        <button>+</button>
      </section>
    </>
  )
}

export default LinkedDevices