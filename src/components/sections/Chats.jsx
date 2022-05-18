import { langChats as texts } from "./langs/langChats"
import HeaderButton from "../fragments/HeaderButton"
import LangText from "../fragments/LangText"

const Chats = () => {
  return (
    <section>
      <p className="message-no-chats">
        <LangText {...texts.noChats} />
        <br />
        <LangText {...texts.startChat} />
      </p>
      <div className="buttons-container">
        <div className="chat-btn c-gray"><HeaderButton iconName="camera" /></div>
        <div className="chat-btn c-primary"><HeaderButton to="new-message" iconName="biography" /></div>
      </div>
    </section>
  )
}

export default Chats