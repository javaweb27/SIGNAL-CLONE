import { langThemeSettings as texts } from "./langs/langThemeSettings"
import { active } from "../../../styles/fragments/fixed-container.module.scss"
import { useRef } from "react"
import FixedContainer from "../../fragments/FixedContainer"
import Option from "../../fragments/FixedContainerOption"
import SubpageButton from "../../fragments/SubpageButton"
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