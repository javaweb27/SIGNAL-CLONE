import svgClasses from "../../svg/index.module.scss"
import { T_CtxThemeValue } from "../action-creators"

const setTheme = (theme: T_CtxThemeValue) => {
  const page = document.getElementById("main")!.classList

  switch (theme) {
    case "DEFAULT":
      page.remove("light-theme", svgClasses.light_icons)
      page.remove("dark-theme", svgClasses.dark_icons)
      return theme

    case "LIGHT":
      page.remove("dark-theme", svgClasses.dark_icons)
      page.add("light-theme", svgClasses.light_icons)
      return theme

    case "DARK":
      page.remove("light-theme", svgClasses.light_icons)
      page.add("dark-theme", svgClasses.dark_icons)
      return theme
  }
}

export default setTheme
