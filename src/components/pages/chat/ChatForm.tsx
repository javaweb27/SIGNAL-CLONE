import classes from "./chat-box.module.scss"
import { langChat as texts } from "./langChat"
import { useRef, useState } from "react"
import socketio from "../../../socketio"
import adjustHeight from "../../../lib/adjustHeight"
import LangText from "../../fragments/LangText"

const ChatForm = () => {
  const [message, setMessage] = useState(``)
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (message.length === 0) return

    socketio.emit("client:chat", { from: "Me", body: message })
    adjustHeight(true, textAreaRef.current!)
    setMessage("")
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <textarea
        ref={textAreaRef}
        className={classes.textArea}
        onInput={() => adjustHeight(false, textAreaRef.current!, 127)}
        onChange={({ target }) => setMessage(target.value)}
        value={message}
        placeholder={LangText(texts.writeMessage)}
        rows={1}
      />
      <button className={classes.btn}>
        <LangText {...texts.btnSend} />
      </button>
    </form>
  )
}

export default ChatForm
