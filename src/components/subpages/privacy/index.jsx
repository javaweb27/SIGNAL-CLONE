import { langPrivacy as texts } from "./langs/langPrivacy"
import { Link } from "react-router-dom"
import SubpageLink from "../../fragments/subpage-link"
import SubpageButton from "../../fragments/subpage-button"
import BasicHeader from "../../core-sections/basic-header"
import LangText from "../../fragments/LangText"

const Privacy = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText={<LangText {...texts.headerTitle} />} />

      <section>
        <SubpageLink to="blocked-people" title={<LangText {...texts.blocked} />}>
          0 <LangText {...texts.blockedPar} />
        </SubpageLink>

        <hr />

        <h4 className="subpage-section-title"><LangText {...texts.subtitleMessaging} /></h4>
        <SubpageButton toggle title={<LangText {...texts.readReceipts} />}>
          <LangText {...texts.readReceiptsPar} />
        </SubpageButton>

        <SubpageButton toggle title={<LangText {...texts.typingIndicators} />}>
          <LangText {...texts.typingIndicatorsPar} />
        </SubpageButton>

        <hr />

        <h4 className="subpage-section-title"><LangText {...texts.subtitleDisappearing} /></h4>

        <SubpageLink to="" title={<LangText {...texts.disappearingTimer} />}>
          <LangText {...texts.disappearingTimerPar} />
        </SubpageLink>

        <h4 className="subpage-section-title"><LangText {...texts.subtitleAppSecurity} /></h4>

        <SubpageButton toggle title={<LangText {...texts.screenLock} />}>
          <LangText {...texts.screenLockPar} />
        </SubpageButton>

        <SubpageLink to="" title={<LangText {...texts.inactivityTimeout} />}>
          <LangText {...texts.inactivityTimeoutPar} />
        </SubpageLink>

        <SubpageButton toggle title={<LangText {...texts.screenSecurity} />}>
          <LangText {...texts.screenSecurityPar} />
        </SubpageButton>

        <SubpageButton toggle title={<LangText {...texts.incognitoKeyboard} />}>
          <LangText {...texts.incognitoKeyboardPar} />
        </SubpageButton>

        <p className="description">
          <LangText {...texts.descriptionIncognito} />
          <Link to="" rel="noreferrer noopener nofollow" target="_blank">
            <LangText {...texts.learnMore} />
          </Link>
        </p>
        <hr />

        <SubpageLink to="" title={<LangText {...texts.advanced}/>}>
          <LangText {...texts.advancedPar} />
        </SubpageLink>
      </section>
    </>
  )
}
export default Privacy