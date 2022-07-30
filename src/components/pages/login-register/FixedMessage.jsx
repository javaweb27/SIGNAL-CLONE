import classes from "./fixed-error-msg.module.scss"
import { useEffect } from "react"

const FixedMessage = ({ resetState, msg }) => {
  //re-render is caused by setErrorsCount of the parent
  useEffect(() => {
    const timeoutId = setTimeout(() => resetState(), 6000)
    
    return () => clearTimeout(timeoutId)
  })
  
  return <p className={classes.msg}>{msg}</p>
}

export default FixedMessage