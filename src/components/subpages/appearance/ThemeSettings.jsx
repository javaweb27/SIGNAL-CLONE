import { active } from "../../../styles/fragments/fixed-container.module.scss"
import { useRef } from "react"
import FixedContainer from "../../fragments/FixedContainer";
import SubmenuInput from "../../fragments/SubmenuInput"
import SubpageButton from "../../fragments/SubpageButton"
import { changeTheme } from "../../context/action-creators"

const ThemeSettings = ({ context: [theme, dispatch] }) => {
  const containerRef = useRef()

  const openMenu = () => {
    containerRef.current.classList.add(active)
  }

  const change = e => {
    dispatch(changeTheme(e.target.id.toUpperCase()))
  }

  return (
    <>
      <SubpageButton title="Tema" event={{onClick: openMenu}}>
        {theme.text}
      </SubpageButton>
      <FixedContainer title="Tema" containerRef={containerRef}>
        <SubmenuInput name="theme" id="default" type="radio" event={{onClick: change}}>
          Predeterminado del dispositivo
        </SubmenuInput>
        <SubmenuInput name="theme" id="light" type="radio" event={{onClick: change}}>
          Claro
        </SubmenuInput>
        <SubmenuInput name="theme" id="dark" type="radio" event={{onClick: change}}>
          Oscuro
        </SubmenuInput>
      </FixedContainer>
    </>
  )
}

export default ThemeSettings