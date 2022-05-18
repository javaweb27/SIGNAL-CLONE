import { langAccount as texts } from "./langs/langAccount"
import SubpageLink from "../../fragments/SubpageLink"
import SubpageButton from "../../fragments/SubpageButton"
import BasicHeader from "../../sections/BasicHeader"
import LangText from "../../fragments/LangText"

const Account = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText={<LangText {...texts.headerTitle} />} />

      <section className="cuenta">
        <h4 className="subpage-section-title"><LangText {...texts.subtitlePIN} /></h4>
        <SubpageLink to="" title={<LangText {...texts.changePIN} />} />

        <SubpageButton toggle title={<LangText {...texts.PINreminder} />}>
          <LangText {...texts.PINreminderPar} />
        </SubpageButton>

        <SubpageButton toggle title={<LangText {...texts.registrationLock} />}>
          <LangText {...texts.registrationLockPar} />
        </SubpageButton>
        <SubpageLink to="" title={<LangText {...texts.PINsettings}/>} />

        <hr />

        <h4 className="subpage-section-title">
          <LangText {...texts.subtitleAccount} />
        </h4>
        <SubpageLink to="" title={<LangText {...texts.transferAccount}  />}>
          <LangText {...texts.transferAccountPar}  />
        </SubpageLink>

        <SubpageLink to="" title={<LangText {...texts.deleteAccount} />} />
      </section>
    </>
  )
}

export default Account