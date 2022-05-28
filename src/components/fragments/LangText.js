import { useContext } from "react"
import AppearanceContext from "../context/appearance"

const LangText = (props) => {
  const { language } = useContext(AppearanceContext)[0]

  return props[language] ?? null
}

export default LangText