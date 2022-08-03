import { langChatsList as texts } from "./langMsgNoChats"
import LangText from "../../fragments/LangText"

const MsgNoChats = ({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => <>
  <p className="message-no-chats">
    <LangText {...texts.noChats} />
    <br />
    <LangText {...texts.startChat} />
  </p>
  <button className="btn-guest" onClick={onClick}>
    <LangText {...texts.btnGuest} />
  </button>
</>

export default MsgNoChats