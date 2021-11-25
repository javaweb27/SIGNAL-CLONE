import { DEFAULT, LIGHT, DARK } from "../values";

const setTheme = (theme) => {
  const page = document.querySelector("body").classList

  switch (theme) {
    case DEFAULT:
      page.remove("light-theme")
      page.remove("dark-theme")
    return {value: theme, text: "Predeterminado del dispositivo"}

    case LIGHT:
      page.remove("dark-theme")
      page.add("light-theme")
    return {value: theme, text: "Claro"}

    case DARK:
      page.remove("light-theme")
      page.add("dark-theme")
    return {value: theme, text: "Oscuro"}
  }
}

export default setTheme
