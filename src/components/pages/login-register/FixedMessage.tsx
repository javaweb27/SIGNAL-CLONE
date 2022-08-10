import classes from "./fixed-error-msg.module.scss"
import { useEffect } from "react"

interface I_Props {
  resetErrors: () => void
  msg: React.ReactNode
}

const FixedMessage = ({ resetErrors, msg }: I_Props) => {
  // re-render is caused by setErrorsCount of the parent
  useEffect(() => {
    const timeoutId = setTimeout(() => resetErrors(), 6000)

    return () => clearTimeout(timeoutId)
  })

  return <p className={classes.msg}>{msg}</p>
}

export default FixedMessage
