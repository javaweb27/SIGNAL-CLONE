import { langLinkedDevices as texts } from "./langs/langLinkedDevices"
import LangText from "../../fragments/LangText"
import BasicHeader from "../../sections/BasicHeader"

const LinkedDevices = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText={<LangText {...texts.haederTitle} />} />

      <section>
        <p><LangText {...texts.noLinkedDevices} /></p>
        <button>+</button>
      </section>
    </>
  )
}

export default LinkedDevices