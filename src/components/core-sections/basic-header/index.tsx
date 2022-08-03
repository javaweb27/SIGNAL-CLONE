import "./index.scss"
import HeaderButton from "../../fragments/header-button"
import TimeleftCounter from "../home-header/TimeleftCounter"
import { createElement } from "react"

interface I_Props {
  linkPath: string,
  titleTag: "h2" | "h3" | "h4",
  titleText: React.ReactNode
}

const BasicHeader = ({ linkPath, titleTag, titleText }: I_Props) => (
  <header className="basic-header">
    <HeaderButton to={linkPath} iconName="arrow_left" />
    {createElement(
      titleTag,
      {
        className: "title"
      } as React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
      titleText
    )}
    <TimeleftCounter />
  </header>
)

export default BasicHeader