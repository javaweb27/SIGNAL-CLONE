import { langDataStorage as texts } from "./langs/langDataStorage"
import LangText from "../../fragments/LangText"
import SubpageButton from "../../fragments/subpage-button"
import SubpageLink from "../../fragments/subpage-link"
import BasicHeader from "../../core-sections/basic-header"

const DataStorage = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleTag="h3" titleText={<LangText {...texts.headerTitle} />} />

      <section>
        <SubpageLink to="" title={<LangText {...texts.manageStorage} />}>0 B</SubpageLink>
        <hr />
        <h4 className="subpage-section-title"><LangText {...texts.subtitleMediaAutoDL} /></h4>
        <SubpageButton title={<LangText {...texts.whenUsingData} />}>
          <LangText {...texts.whenUsingDataPar} />
        </SubpageButton>
        <SubpageButton title={<LangText {...texts.whenUsingWifi} />}>
          <LangText {...texts.whenUsingWifiPar} />
        </SubpageButton>
        <SubpageButton title={<LangText {...texts.whenRoaming} />}>
          <LangText {...texts.whenRoamingPar} />
        </SubpageButton>
        <hr />

        <h4 className="subpage-section-title"><LangText {...texts.subtitleMediaQuality} /></h4>
        <SubpageButton title={<LangText {...texts.sentMedia} />}>
          <LangText {...texts.sentMediaPar} />
        </SubpageButton>
        <p><LangText {...texts.descriptionMedia} /></p>
        <hr />

        <h4 className="subpage-section-title"><LangText {...texts.subtitleCalls} /></h4>
        <SubpageButton title={<LangText {...texts.useLessData} />}>
          <LangText {...texts.useLessDataPar} />
        </SubpageButton>
        <p><LangText {...texts.descriptionUseLessData} /></p>
        <hr />

        <h4 className="subpage-section-title"><LangText {...texts.subtitleProxy} /></h4>
        <SubpageLink to="" title={<LangText {...{ spanish: null, english: null }} />}>
          <LangText {...texts.useProxyPar} />
        </SubpageLink>

      </section>
    </>
  )
}

export default DataStorage