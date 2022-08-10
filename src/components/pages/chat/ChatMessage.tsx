import classes from "./chat-message.module.scss"

interface I_Props {
  body: string
  isItMe: boolean
}

const ChatMessage = ({ body, isItMe }: I_Props) => {
  return (
    <div className={classes["msgFrom" + (isItMe ? "Me" : "Other")]}>
      <span>{isItMe ? "Me" : "An user"}</span>:<span>{" " + body}</span>
    </div>
  )
}

export default ChatMessage
