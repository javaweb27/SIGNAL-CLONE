import { dark_icons, light_icons } from "../../../styles/svg/.module.scss";

const setTheme = (theme) => {
  const page = document.getElementById("root").classList

  switch (theme) {
    case "DEFAULT":
      page.remove("light-theme", light_icons)
      page.remove("dark-theme", dark_icons)
      return { value: theme, text: "Predeterminado del dispositivo" }

    case "LIGHT":
      page.remove("dark-theme", dark_icons)
      page.add("light-theme", light_icons)
      return { value: theme, text: "Claro" }

    case "DARK":
      page.remove("light-theme", light_icons)
      page.add("dark-theme", dark_icons)
      return { value: theme, text: "Oscuro" }
  }
}

export default setTheme
