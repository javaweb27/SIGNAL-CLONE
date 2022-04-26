import { active } from "../../../styles/fragments/fixed-container.module.scss"
import { useRef } from "react"
import FixedContainer from "../../fragments/FixedContainer"
import Option from "../../fragments/FixedContainerOption"
import SubpageButton from "../../fragments/SubpageButton"
import { changeLanguage } from "../../context/action-creators"

const LanguageSettings = ({ context: [language, dispatch] }) => {
  const containerRef = useRef()

  const openMenu = () => containerRef.current.classList.add(active)

  const change = e => {
    dispatch(changeLanguage(e.target.id.toUpperCase()))
    containerRef.current.classList.remove(active)
  }

  return <>
    <SubpageButton event={{ onClick: openMenu }} title="Idioma">
      {language}
    </SubpageButton>

    <FixedContainer containerRef={containerRef} title="Idioma">
      <Option radio name="language" id="spanish" onClick={change}>Español</Option>
      <Option radio name="language" id="english" onClick={change}>Ingles</Option>
    </FixedContainer>
  </>
}

export default LanguageSettings