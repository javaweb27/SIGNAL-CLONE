import LangText from "../../fragments/LangText"
import SubpageButton from "../../fragments/SubpageButton"
import SubpageLink from "../../fragments/SubpageLink"
import BasicHeader from "../../sections/BasicHeader"

const DataStorage = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText={<LangText spanish="Datos y almacenamiento" english="Data nad storage" />} />

      <section>
        <SubpageLink to="" title={<LangText spanish="Gestionar almacenamiento" english="Manage storage" />}>0 B</SubpageLink>
        <hr />
        <h4 className="subpage-section-title"><LangText spanish="Descarga automática de adjuntos" english="Media auto-download" /></h4>
        <SubpageButton title={<LangText spanish="Al usar datos móviles" english="When using mobile data" />}>
          <LangText spanish="Imágenes, audio" english="Images, Audio" />
        </SubpageButton>
        <SubpageButton title={<LangText spanish="Al usar Wi-Fi" english="When using Wi-Fi" />}>
          <LangText spanish="Imágenes, audio, video, documentos" english="Images, Audio, Video, Documents" />
        </SubpageButton>
        <SubpageButton title={<LangText spanish="En itinerancia (roaming)" english="When roaming" />}>
          <LangText spanish="Ninguno" english="None" />
        </SubpageButton>
        <hr />

        <h4 className="subpage-section-title"><LangText spanish="Calidad de fotos y vídeos" english="Media quality" /></h4>
        <SubpageButton title={<LangText spanish="Calidad de envío de fotos y vídeos" english="Sent media qualiy" />}>
          <LangText spanish="Normal" english="Standard" />
        </SubpageButton>
        <p><LangText spanish="Se usarán más datos al seleccionar la opcion de alta calidad." english="Sending high quality media will use more data." /></p>
        <hr />

        <h4 className="subpage-section-title"><LangText spanish="Llamadas" english="Calls" /></h4>
        <SubpageButton title={<LangText spanish="Ahorrar datos en llamadas" english="Use less data for calls" />}>
          <LangText spanish="Solo red móvil" english="Mobile data only" />
        </SubpageButton>
        <p><LangText spanish="Al ahorrar datos, mejora la calidad de las llamadas en redes móviles mala cobertura" english="Using less data may improve calls on bad networks" /></p>
        <hr />

        <h4 className="subpage-section-title"><LangText spanish="Proxy" english="Proxy" /></h4>
        <SubpageLink to="" title={<LangText spanish="Usar proxy" english="Use proxy" />}>
          <LangText spanish="Inactivo" english="Off" />
        </SubpageLink>

      </section>
    </>
  )
}

export default DataStorage