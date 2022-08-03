import { langThemeSettings as texts } from "./langs/langThemeSettings"
import { useRef } from "react"
import classes from "../../fragments/fixed-container/index.module.scss"
import FixedContainer from "../../fragments/fixed-container"
import Option from "../../fragments/fixed-container-option"
import SubpageButton from "../../fragments/subpage-button"
import { changeTheme } from "../../context/action-creators"
import LangText from "../../fragments/LangText"

const ThemeSettings = ({ context: [theme, dispatch] }: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const openMenu = () => containerRef.current!.classList.add(classes.active)

  const change = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLElement
    dispatch(changeTheme(target.id.toUpperCase() as any))
    containerRef.current!.classList.remove(classes.active)
  }

  return (
    <>
      <SubpageButton event={{ onClick: openMenu }} title={<LangText spanish="Tema" english="Theme" />}>
        {
          theme === "DEFAULT" ? <LangText {...texts.default} /> :
          theme === "DARK" ? <LangText {...texts.dark} /> :
          theme === "LIGHT" ? <LangText {...texts.light} /> : null
        }
      </SubpageButton>

      <FixedContainer containerRef={containerRef} title={<LangText spanish="Tema" english="Theme" />}>
        <Option t="radio" name="theme" id="default" onClick={change}>
          <LangText {...texts.inputDefault} />
        </Option>
        <Option t="radio" name="theme" id="light" onClick={change}>
          <LangText {...texts.inputLight} />
        </Option>
        <Option t="radio" name="theme" id="dark" onClick={change}>
          <LangText {...texts.inputDark} />
        </Option>
      </FixedContainer>
    </>
  )
}

export default ThemeSettings