import { langChatsSettings as texts } from "./langs/langChatsSettings"
import SubpageLink from "../../fragments/subpage-link"
import SubpageButton from "../../fragments/subpage-button"
import BasicHeader from "../../core-sections/basic-header"
import LangText from "../../fragments/LangText"

const ChatsSettings = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleTag="h3" titleText={<LangText {...texts.headerTitle} />} />

      <section>
        <SubpageLink to="sms" title={<LangText {...texts.MESSAGE} />} />

        <SubpageButton toggle title={<LangText {...texts.generateLinkPreviews} />}>
          <LangText {...texts.generateLinkPreviewsPar} />
        </SubpageButton>

        <SubpageButton toggle title={<LangText {...texts.usePhotosFromDevice} />}>
          <LangText {...texts.usePhotosFromDevicePar} />
        </SubpageButton>

        <hr />

        <h4 className="subpage-section-title"><LangText {...texts.subtitleKeyboard} /></h4>
        <SubpageButton toggle title={<LangText {...texts.useSystemEmoji} />} />
        <SubpageButton toggle title={<LangText {...texts.enterKeySends} />} />

        <h4 className="subpage-section-title"><LangText {...texts.subtitleBackups} /></h4>

        <SubpageLink to="chats-backup" title={<LangText {...texts.chatBackups} />}>
          <LangText {...texts.chatBackupsPar} />
        </SubpageLink>
      </section>
    </>
  )
}
export default ChatsSettings