import "./index.scss"
import HeaderButton from "../../fragments/header-button"

const ChatHeader = () => {
  return (
    <header className="chat-header">
      <HeaderButton to="/" iconName="arrow_left"/>
      icono
      <h2>global</h2>
      <p>ult. vez recientemente</p>
    </header>
  )
}

export default ChatHeader