import classes from "./chat-box.module.scss"
import { useState, useEffect } from "react"
import socketio from "../../../socketio"
import ScrollIntoView from "../../fragments/ScrollIntoView"
import ChatMessage from "./ChatMessage"

interface I_Message {
  body: string;
  from: string;
}

const ChatBox = () => {
  const [chatHistory, setChatHistory] = useState<I_Message[]>([])

  useEffect(() => {
    const receiveChat = (message: I_Message) => {
      setChatHistory(chats => chats.concat(message))
    }

    socketio.on("server:chat", receiveChat)

    return () => {
      socketio.off("server:chat", receiveChat)
    }
  }, [chatHistory])

  return (
    <section className={classes.messages}>
      {chatHistory.map((message, i) => (
        <ChatMessage
          body={message.body}
          isItMe={message.from === socketio.id}
          key={i}
        />
      ))}
      <ScrollIntoView />
    </section>
  )
}

export default ChatBox