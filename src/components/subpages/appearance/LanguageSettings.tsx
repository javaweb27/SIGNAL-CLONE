import { langLanguageSettings as texts } from "./langs/langLanguageSettings"
import { useRef } from "react"
import classes from "../../fragments/fixed-container/index.module.scss"
import FixedContainer from "../../fragments/fixed-container"
import Option from "../../fragments/fixed-container-option"
import SubpageButton from "../../fragments/subpage-button"
import { changeLanguage } from "../../context/action-creators"
import LangText from "../../fragments/LangText"

const LanguageSettings = ({ context: [_language, dispatch] }: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const openMenu = () => containerRef.current!.classList.add(classes.active)

  const change = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLElement
    dispatch(changeLanguage(target.id as any))
    containerRef.current!.classList.remove(classes.active)
  }

  return <>
    <SubpageButton event={{ onClick: openMenu }} title={<LangText spanish="Idioma" english="Language" />}>
      <LangText {...texts.currentLanguage} />
    </SubpageButton>

    <FixedContainer containerRef={containerRef} title={<LangText spanish="Idioma" english="Language" />}>
      <Option t="radio" name="language" id="spanish" onClick={change}>
        <LangText {...texts.lSpanish} />
      </Option>
      <Option t="radio" name="language" id="english" onClick={change}>
        <LangText {...texts.lEnglish} />
      </Option>
    </FixedContainer>
  </>
}

export default LanguageSettings