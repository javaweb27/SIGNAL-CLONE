import classes from "./chat-box.module.scss"
import { useState, useEffect } from "react"
import socketio from "../../../socketio"
import ChatForm from "./ChatForm"
import ScrollIntoView from "../../fragments/ScrollIntoView"

const ChatBox = () => {
  const [chatHistory, setChatHistory] = useState([])

  useEffect(() => {
    socketio.on("server:chat", (name, msg) => {
      setChatHistory(chats => chats.concat({ name, msg }))
    })
    return () => socketio.off()
  }, [])

  return <>
    <section className={classes.messages}>
      {chatHistory.map((chat, i) =>
        <div key={i}>
          <span>{chat.name}</span>: <span>{chat.msg}</span>
        </div>
      )}
      <ScrollIntoView />
    </section>
    <ChatForm />
  </>
}

export default ChatBox