import { langLanguageSettings as texts } from "./langs/langLanguageSettings"
import { active } from "../../../styles/fragments/fixed-container.module.scss"
import { useRef } from "react"
import FixedContainer from "../../fragments/FixedContainer"
import Option from "../../fragments/FixedContainerOption"
import SubpageButton from "../../fragments/SubpageButton"
import { changeLanguage } from "../../context/action-creators"
import LangText from "../../fragments/LangText"

const LanguageSettings = ({ context: [_language, dispatch] }) => {
  const containerRef = useRef()

  const openMenu = () => containerRef.current.classList.add(active)

  const change = e => {
    dispatch(changeLanguage(e.target.id))
    containerRef.current.classList.remove(active)
  }

  return <>
    <SubpageButton event={{ onClick: openMenu }} title={<LangText spanish="Idioma" english="Language" />}>
      <LangText {...texts.currentLanguage} />
    </SubpageButton>

    <FixedContainer containerRef={containerRef} title={<LangText spanish="Idioma" english="Language" />}>
      <Option radio name="language" id="spanish" onClick={change}>
        <LangText {...texts.lSpanish} />
      </Option>
      <Option radio name="language" id="english" onClick={change}>
        <LangText {...texts.lEnglish} />
      </Option>
    </FixedContainer>
  </>
}

export default LanguageSettings