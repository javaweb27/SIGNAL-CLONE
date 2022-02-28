import { useState } from "react"
import SubmenuInput from "../../fragments/SubmenuInput"
import SubpageButton from "../../fragments/SubpageButton"
import { changeTheme } from "../../context/action-creators"

const ThemeSettings = ({ context: [theme, dispatch] }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = e => {
    if (e.target === document.querySelector(".container-fixed")) setOpenMenu(false)
    if (!openMenu) setOpenMenu(true)
  }

  const change = e => {
    dispatch(changeTheme(e.target.id.toUpperCase()))
    setOpenMenu(false)
  }

  return (
    <>
      <SubpageButton title="Tema" event={{onClick: toggleMenu}}>
        {theme.text}
      </SubpageButton>
      <div className={`container-fixed ${openMenu && "active"}`} onClick={toggleMenu}>
        <div className="menu-change-theme">
          <span>Tema</span>
          <ul>
            <SubmenuInput name="theme" id="default" type="radio" event={{onClick: change}}>
              Predeterminado del dispositivo
            </SubmenuInput>
            <SubmenuInput name="theme" id="light" type="radio" event={{onClick: change}}>
              Claro
            </SubmenuInput>
            <SubmenuInput name="theme" id="dark" type="radio" event={{onClick: change}}>
              Oscuro
            </SubmenuInput>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ThemeSettings