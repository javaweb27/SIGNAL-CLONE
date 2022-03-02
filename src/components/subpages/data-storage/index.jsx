import SubpageButton from "../../fragments/SubpageButton"
import SubpageLink from "../../fragments/SubpageLink"
import BasicHeader from "../../sections/BasicHeader"

const DataStorage = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Datos y almacenamiento"/>

      <section>
        <SubpageLink to="" title="Gestionar almacenamiento">0 B</SubpageLink>
        <hr />
        <h4 className="subpage-section-title">Descarga automática de adjuntos</h4>
        <SubpageButton title="Al usar datos móviles">
          Imágenes, audio
        </SubpageButton>
        <SubpageButton title="Al usar Wi-Fi">
          Imágenes, audio, video, documentos
        </SubpageButton>
        <SubpageButton title="En itinerancia (roaming)">
          Ninguno
        </SubpageButton>
        <hr />

        <h4 className="subpage-section-title">Calidad de fotos y vídeos</h4>
        <SubpageButton title="Calidad de envío de fotos y vídeos">Normal</SubpageButton>
        <p>Se usarán más datos al seleccionar la opcion de alta calidad</p>
        <hr />

        <h4 className="subpage-section-title">Llamadas</h4>
        <SubpageButton title="Ahorrar datos en llamadas">Solo red móvil</SubpageButton>
        <p>Al ahorrar datos, mejora la calidad de las llamadas en redes móviles mala cobertura</p>
        <hr />

        <h4 className="subpage-section-title">Proxy</h4>
        <SubpageLink to="" title="Usar proxy">Inactivo</SubpageLink>
        
      </section>
    </>
  )
}

export default DataStorage