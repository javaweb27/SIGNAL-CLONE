import { dark_icons, light_icons } from "../../../styles/svg/.module.scss";

const setTheme = (theme) => {
  const page = document.getElementById("main").classList

  switch (theme) {
    case "DEFAULT":
      page.remove("light-theme", light_icons)
      page.remove("dark-theme", dark_icons)
      return theme

    case "LIGHT":
      page.remove("dark-theme", dark_icons)
      page.add("light-theme", light_icons)
      return theme

    case "DARK":
      page.remove("light-theme", light_icons)
      page.add("dark-theme", dark_icons)
      return theme
  }
}

export default setTheme
