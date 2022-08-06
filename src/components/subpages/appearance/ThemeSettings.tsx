import { langThemeSettings as texts } from "./langs/langThemeSettings"
import { useRef } from "react"
import SubpageButton from "../../fragments/subpage-button"
import { changeTheme, T_CtxThemeValue } from "../../context/action-creators"
import LangText from "../../fragments/LangText"
import FixedMenu, { openFixedMenu } from "../../fragments/fixed-menu"

const ThemeSettings = ({ context: [theme, dispatch] }: any) => {
  const fixedMenuRef = useRef<HTMLDivElement | null>(null)

  const callbackChange = (theme: T_CtxThemeValue) => {
    dispatch(changeTheme(theme))
  }

  return <>
    <SubpageButton
      event={{ onClick: () => openFixedMenu(fixedMenuRef.current!) }}
      title={<LangText spanish="Tema" english="Theme" />}
    >
      <LangText {...texts[theme.toLowerCase() as "default" | "dark" | "light"]} />
    </SubpageButton>

    <FixedMenu
      title={<LangText spanish="Tema" english="Theme" />}
      containerRef={fixedMenuRef}
      isChecked={id => id === theme}
    >
      {Item => <>
        <Item t="radio" name="theme" id="DEFAULT" callback={() => callbackChange("DEFAULT")}>
          <LangText {...texts.inputDefault} />
        </Item>
        <Item t="radio" name="theme" id="LIGHT" callback={() => callbackChange("LIGHT")}>
          <LangText {...texts.inputLight} />
        </Item>
        <Item t="radio" name="theme" id="DARK" callback={() => callbackChange("DARK")}>
          <LangText {...texts.inputDark} />
        </Item>
      </>}
    </FixedMenu>
  </>
}

export default ThemeSettings