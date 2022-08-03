import { useAppearanceContext } from "../context/appearance"

const LangText = (props: { spanish: any; english: any; }) => {
  const { language } = useAppearanceContext()[0]

  return props[language] ?? null
}

export default LangText