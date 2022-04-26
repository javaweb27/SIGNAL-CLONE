import HeaderButton from "../fragments/HeaderButton"
import LangText from "../fragments/LangText"

const Chats = () => {
  return (
    <section>
      <p className="message-no-chats">
        <LangText spanish="Todavia no hay chats." english="No chats yet." />
        <br />
        <LangText spanish="Comienza a chatear con tus amistades." english="Get started by messaging a friend" />
      </p>
      <div className="buttons-container">
        <div className="chat-btn c-gray"><HeaderButton iconName="camera" /></div>
        <div className="chat-btn c-primary"><HeaderButton to="new-message" iconName="biography" /></div>
      </div>
    </section>
  )
}

export default Chats