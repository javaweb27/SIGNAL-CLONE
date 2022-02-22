import BasicHeader from "../../sections/BasicHeader"

const LinkedDevices = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Dispositivos enlazados"/>

      <section>
        <p>no hay dispositivos enlazados</p>
        <button>agregar</button>
      </section>
    </>
  )
}

export default LinkedDevices