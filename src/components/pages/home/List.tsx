import ListChat from "./ListChat"
import { useState } from "react"
import MsgNoChats from "./MsgNoChats"

const List = () => {
  const [contacts, setContacts] = useState<[] | [number]>([])

  if (contacts.length === 0) return <MsgNoChats onClick={() => setContacts([1])} />

  return (
    <div>
      {contacts.map(data => <ListChat key={data} />)}
    </div>
  )
}


export default List