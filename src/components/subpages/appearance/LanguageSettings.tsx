import { langLanguageSettings as texts } from "./langs/langLanguageSettings"
import { useRef } from "react"
import SubpageButton from "../../fragments/subpage-button"
import { changeLanguage, T_CtxLanguageValue } from "../../context/action-creators"
import LangText from "../../fragments/LangText"
import FixedMenu, { openFixedMenu } from "../../fragments/fixed-menu"

const LanguageSettings = ({ context: [language, dispatch] }: any) => {
  const fixedMenuRef = useRef<HTMLDivElement | null>(null)

  const callbackChange = (lang: T_CtxLanguageValue) => {
    dispatch(changeLanguage(lang))
  }

  return (
    <>
      <SubpageButton
        event={{ onClick: () => openFixedMenu(fixedMenuRef.current!) }}
        title={<LangText spanish="Idioma" english="Language" />}
      >
        <LangText {...texts.currentLanguage} />
      </SubpageButton>

      <FixedMenu
        title={<LangText spanish="Idioma" english="Language" />}
        containerRef={fixedMenuRef}
        isChecked={id => id === language}
      >
        {Item => (
          <>
            <Item
              t="radio"
              name="lang"
              id="spanish"
              callback={() => callbackChange("spanish")}
            >
              <LangText {...texts.lSpanish} />
            </Item>
            <Item
              t="radio"
              name="lang"
              id="english"
              callback={() => callbackChange("english")}
            >
              <LangText {...texts.lEnglish} />
            </Item>
          </>
        )}
      </FixedMenu>
    </>
  )
}

export default LanguageSettings
