import { langNotifications as texts } from "./langs/langNotifications"
import SubpageLink from "../../fragments/subpage-link"
import SubpageButton from "../../fragments/subpage-button"
import BasicHeader from "../../core-sections/basic-header"
import LangText from "../../fragments/LangText"

const Notifications = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleTag="h3" titleText={<LangText {...texts.headerTitle} />} />

      <section>
        <h4 className="subpage-section-title"><LangText {...texts.subtitleMessages} /></h4>
        <SubpageButton toggle title={<LangText {...texts.messageNotifications} />} />

        <SubpageButton title={<LangText {...texts.sound} />}>
          <LangText {...texts.soundPar} /> (sound.ogg)
        </SubpageButton>

        <SubpageButton toggle title={<LangText {...texts.messageVibrate} />} />
        <SubpageButton toggle title={<LangText {...texts.ledColor} />} />
        <SubpageButton toggle title={<LangText {...texts.inChatSounds} />} />

        <SubpageButton title={<LangText {...texts.repeatAlerts} />}>
          <LangText {...texts.repeatAlertsPar} />
        </SubpageButton>

        <SubpageButton title={<LangText {...texts.show} />}>
          <LangText {...texts.showPar} />
        </SubpageButton>

        <SubpageLink to="" title={<LangText {...texts.priority} />} />

        <hr />

        <h4 className="subpage-section-title"><LangText {...texts.subtitleCalls} /></h4>
        <SubpageButton toggle title={<LangText {...texts.callNotifications} />} />

        <SubpageButton title={<LangText {...texts.ringtone} />}>
          <LangText {...texts.ringtonePar} />
        </SubpageButton>

        <SubpageButton toggle title={<LangText {...texts.callVibrate} />} />

        <hr />

        <h4 className="subpage-section-title"><LangText {...texts.subtitleNotifyWhen} /></h4>
        <SubpageButton toggle title={<LangText {...texts.contactJoinsSignal} />} />
      </section>
    </>
  )
}
export default Notifications