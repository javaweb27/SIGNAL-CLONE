import { DARK, DEFAULT, LIGHT } from "../values";

const setTheme = (theme) => {
  const page = document.querySelector("body").classList

  switch (theme) {
    case DEFAULT:
      page.remove("light-theme")
      page.remove("dark-theme")
    return "Predeterminado del dispositivo"

    case LIGHT:
      page.remove("dark-theme")
      page.add("light-theme")
    return "Claro"

    case DARK:
      page.remove("light-theme")
      page.add("dark-theme")
    return "Oscuro"
  }
}

export default setTheme
