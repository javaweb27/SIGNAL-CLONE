import "./chats-list-container.scss"
import HeaderButton from "../../fragments/HeaderButton"
import List from "./List"

const ChatsListContainer = () => {
  return (
    <section>
      <List />
      <div className="buttons-container">
        <div className="chat-btn c-gray"><HeaderButton iconName="camera" /></div>
        <div className="chat-btn c-primary"><HeaderButton to="new-message" iconName="biography" /></div>
      </div>
    </section>
  )
}

export default ChatsListContainer