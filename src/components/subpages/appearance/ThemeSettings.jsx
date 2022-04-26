import { active } from "../../../styles/fragments/fixed-container.module.scss"
import { useRef } from "react"
import FixedContainer from "../../fragments/FixedContainer"
import Option from "../../fragments/FixedContainerOption"
import SubpageButton from "../../fragments/SubpageButton"
import { changeTheme } from "../../context/action-creators"

const ThemeSettings = ({ context: [theme, dispatch] }) => {
  const containerRef = useRef()

  const openMenu = () => containerRef.current.classList.add(active)

  const change = e => {
    dispatch(changeTheme(e.target.id.toUpperCase()))
    containerRef.current.classList.remove(active)
  }

  return (
    <>
      <SubpageButton event={{ onClick: openMenu }} title="Tema">
        {theme.text}
      </SubpageButton>

      <FixedContainer containerRef={containerRef} title="Tema">
        <Option radio name="theme" id="default" onClick={change}>
          Predeterminado del sistema
        </Option>
        <Option radio name="theme" id="light" onClick={change}>
          Claro
        </Option>
        <Option radio name="theme" id="dark" onClick={change}>
          Oscuro
        </Option>
      </FixedContainer>
    </>
  )
}

export default ThemeSettings