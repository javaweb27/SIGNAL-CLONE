import { langLinkedDevices as texts } from "./langs/langLinkedDevices"
import LangText from "../../fragments/LangText"
import BasicHeader from "../../core-sections/basic-header"

const LinkedDevices = () => {
  return (
    <>
      <BasicHeader
        linkPath="/settings"
        titleTag="h3"
        titleText={<LangText {...texts.haederTitle} />}
      />

      <section>
        <p>
          <LangText {...texts.noLinkedDevices} />
        </p>
        <button>+</button>
      </section>
    </>
  )
}

export default LinkedDevices
