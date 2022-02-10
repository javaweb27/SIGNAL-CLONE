import { useState } from "react"
import { CHANGE_THEME } from "../../context/actions"
import SubmenuInput from "../../fragments/SubmenuInput"
import TextButton from "../../fragments/TextButton"

const ThemeSettings = ({ context }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = e => {
    if (e.target === document.querySelector(".container-fixed")) setOpenMenu(false)
    if (!openMenu) setOpenMenu(true)
  }

  const changeThemeAndClose = e => {
    context.dispatch({
      type: CHANGE_THEME,
      theme: e.target.id.toUpperCase()
    })
    setOpenMenu(false)
  }

  return (
    <>
      <TextButton title="Tema" event={{onClick: toggleMenu}}>
        {context.theme.text}
      </TextButton>
      <div className={`container-fixed ${openMenu && "active"}`} onClick={toggleMenu}>
        <div className="menu-change-theme">
          <span>Tema</span>
          <ul>
            <SubmenuInput name="theme" id="default" type="radio" event={{onClick: changeThemeAndClose}}>
              Predeterminado del dispositivo
            </SubmenuInput>
            <SubmenuInput name="theme" id="light" type="radio" event={{onClick: changeThemeAndClose}}>
              Claro
            </SubmenuInput>
            <SubmenuInput name="theme" id="dark" type="radio" event={{onClick: changeThemeAndClose}}>
              Oscuro
            </SubmenuInput>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ThemeSettings