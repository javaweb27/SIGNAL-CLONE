import { useContext } from "react"
import AppearanceContext from "../context/appearance"

const LangText = ({ spanish, english }) => {
  const { language } = useContext(AppearanceContext)[0]

  return language === "spanish" ? spanish
    : language === "english" ? english : null
}

export default LangText