import { langChatsList as texts } from "../langs/langChatsList"
import LangText from "../../fragments/LangText"
import ListChat from "./ListChat"
import { useState } from "react"

const List = () => {
  const [guest, setGuest] =useState([])
  const contacts = guest

  if (contacts.length === 0) {
    return <>
      <p className="message-no-chats">
        <LangText {...texts.noChats} />
        <br />
        <LangText {...texts.startChat} />
      </p>
      <button className="btn-guest" onClick={() => setGuest([1])}>
        <LangText {...texts.btnGuest}/>
      </button>
    </>
  }

  return (
    <div>
      {contacts.map(data => <ListChat key={data} />)}
    </div>
  )
}


export default List