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
      <SubpageButton title="Tema" event={{onClick: openMenu}}>
        {theme.text}
      </SubpageButton>
      <FixedContainer title="Tema" containerRef={containerRef}>
        <Option name="theme" id="default" type="radio" event={{onClick: change}}>
          Predeterminado del dispositivo
        </Option>
        <Option name="theme" id="light" type="radio" event={{onClick: change}}>
          Claro
        </Option>
        <Option name="theme" id="dark" type="radio" event={{onClick: change}}>
          Oscuro
        </Option>
      </FixedContainer>
    </>
  )
}

export default ThemeSettings