import classes from "./chat-box.module.scss"
import { useState, useEffect } from "react"
import socketio from "../../../socketio"
import ChatForm from "./ChatForm"
import ScrollIntoView from "../../fragments/ScrollIntoView"

interface I_Message {
  body: string;
  from: string;
}

const ChatBox = () => {
  const [chatHistory, setChatHistory] = useState<I_Message[]>([])
  const isItMe = (id: string) => socketio.id === id

  useEffect(() => {
    const receiveChat = (message: I_Message) => {
      setChatHistory(chats => chats.concat(message))
    }

    socketio.on("server:chat", receiveChat)

    return () => {
      socketio.off("server:chat", receiveChat)
    }
  }, [chatHistory])

  return <>
    <section className={classes.messages}>
      {chatHistory.map((message, i) =>
        <div className={classes["chatFrom" + (isItMe(message.from) ? "Me" : "Other")]} key={i}>
          <span>{isItMe(message.from) ? "Me" : "An user"}</span>:
          <span>{message.body}</span>
        </div>
      )}
      <ScrollIntoView />
    </section>
    <ChatForm />
  </>
}

export default ChatBox