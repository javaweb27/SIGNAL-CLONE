import "./index.scss"
import HeaderButton from "../../fragments/header-button"
import TimeleftCounter from "../home-header/TimeleftCounter"

const ChatHeader = () => {
  return (
    <header className="chat-header">
      <HeaderButton to="/home" iconName="arrow_left" />
      icono
      <h2>
        global - <TimeleftCounter />
      </h2>
      <p>ult. vez recientemente</p>
    </header>
  )
}

export default ChatHeader
