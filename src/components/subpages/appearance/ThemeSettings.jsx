import { useState } from "react"
import { CHANGE_THEME } from "../../context/actions"
import LiField from "../../fragments/LiField"
import TextButton from "../../fragments/TextButton"

const ThemeSettings = ({context, data }) => {
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
            <LiField name="theme" id="default" type="radio" event={{onClick: changeThemeAndClose}}>
              Predeterminado del dispositivo
            </LiField>
            <LiField name="theme" id="light" type="radio" event={{onClick: changeThemeAndClose}}>
              Claro
            </LiField>
            <LiField name="theme" id="dark" type="radio" event={{onClick: changeThemeAndClose}}>
              Oscuro
            </LiField>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ThemeSettings