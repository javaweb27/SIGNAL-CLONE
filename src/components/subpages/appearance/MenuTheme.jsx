import setTheme from "../../context/appearance/js/setTheme"

const MenuTheme = ({updateActualTheme, setMenuState, menuState}) => {

  const closeMenu = e => {
    if (e.target === document.querySelector(".menu-fixed")) {
      setMenuState(false)
    }
  }

  const changeThemeAndClose = e => {
    const theme = e.target.id.toUpperCase()
    updateActualTheme(setTheme(theme))
    setMenuState(false)
  }

  return (
    <div className={`menu-fixed ${menuState && "active"}`} onClick={closeMenu}>
      <div className="menu-change-theme">
        <span>Tema</span>
        <ul>
          <li>
            <label htmlFor="default">
              <input name="theme" id="default" type="radio" onClick={changeThemeAndClose} />Predeterminado
            </label>
          </li>

          <li>
            <label htmlFor="light">
              <input name="theme" id="light" type="radio" onClick={changeThemeAndClose} />Claro
            </label>
          </li>

          <li>
            <label htmlFor="dark">
              <input name="theme" id="dark" type="radio" onClick={changeThemeAndClose} />Oscuro
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuTheme
