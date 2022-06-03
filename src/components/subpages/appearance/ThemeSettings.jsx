import { langThemeSettings as texts } from "./langs/langThemeSettings"
import { useRef } from "react"
import { active } from "../../fragments/fixed-container/index.module.scss"
import FixedContainer from "../../fragments/fixed-container"
import Option from "../../fragments/fixed-container-option"
import SubpageButton from "../../fragments/subpage-button"
import { changeTheme } from "../../context/action-creators"
import LangText from "../../fragments/LangText"

const ThemeSettings = ({ context: [theme, dispatch] }) => {
  const containerRef = useRef()

  const openMenu = () => containerRef.current.classList.add(active)

  const change = e => {
    dispatch(changeTheme(e.target.id.toUpperCase()))
    containerRef.current.classList.remove(active)
  }

  return (
    <>
      <SubpageButton event={{ onClick: openMenu }} title={<LangText spanish="Tema" english="Theme" />}>
        {
          theme === "DEFAULT" ? <LangText {...texts.default} /> :
          theme === "DARK" ? <LangText {...texts.dark} /> :
          theme === "LIGHT" ? <LangText {...texts.light} /> : null
        }
      </SubpageButton>

      <FixedContainer containerRef={containerRef} title={<LangText spanish="Tema" english="Theme" />}>
        <Option radio name="theme" id="default" onClick={change}>
          <LangText {...texts.inputDefault} />
        </Option>
        <Option radio name="theme" id="light" onClick={change}>
          <LangText {...texts.inputLight} />
        </Option>
        <Option radio name="theme" id="dark" onClick={change}>
          <LangText {...texts.inputDark} />
        </Option>
      </FixedContainer>
    </>
  )
}

export default ThemeSettings