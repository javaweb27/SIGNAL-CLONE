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
          theme === "DEFAULT" ? <LangText spanish="Predeterminado del sistema" english="System default"/> :
          theme === "DARK" ? <LangText spanish="Oscuro" english="Dark"/> :
          theme === "LIGHT" ? <LangText spanish="Claro" english="Light"/> : null
        }
      </SubpageButton>

      <FixedContainer containerRef={containerRef} title={<LangText spanish="Tema" english="Theme" />}>
        <Option radio name="theme" id="default" onClick={change}>
          <LangText spanish="Predeterminado del sistema" english="System default" />
        </Option>
        <Option radio name="theme" id="light" onClick={change}>
          <LangText spanish="Claro" english="Light" />
        </Option>
        <Option radio name="theme" id="dark" onClick={change}>
          <LangText spanish="Oscuro" english="Dark" />
        </Option>
      </FixedContainer>
    </>
  )
}

export default ThemeSettings