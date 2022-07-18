import { useAppearanceContext } from "../context/appearance"

const LangText = (props) => {
  const { language } = useAppearanceContext()[0]

  return props[language] ?? null
}

export default LangText