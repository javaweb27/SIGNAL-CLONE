import classes from "./list-chat.module.scss"
import { Link } from "react-router-dom"

function Chat() {
  return (
    <Link to="/chat" className={classes.link}>
      <article className={classes.chat}>
        <span className={classes.userImg}></span>
        <div>
          <span className={classes.title}>Global</span>
          <span className={classes.subtitle}>?</span>
        </div>

        <div className={classes.lastColumn}>
          <span className={classes.date}>icono fecha</span>
          <div className={classes.number}>
            <span>?</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Chat