import HeaderButton from "../fragments/HeaderButton"

const Chats = () => {
  return (
    <section>
      <p className="message-no-chats">Todavia no hay chats. <br/> Comienza a chatear con tus amistades.</p>
      <div className="buttons-container">
        <div className="chat-btn c-gray"><HeaderButton iconName="camera"/></div>
        <div className="chat-btn c-primary"><HeaderButton to="new-message" iconName="biography"/></div>
      </div>
    </section>
  )
}

export default Chats