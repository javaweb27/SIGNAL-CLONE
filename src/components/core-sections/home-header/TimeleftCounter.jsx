import { useEffect, useRef } from "react"
import { lsDeleteAuthToken } from "../../../lib/localStorageHandlers"
import { refreshLoginStatus, useLoginStatusContext } from "../../context/login-status"
import LangText from "../../fragments/LangText"
import { langChatsList } from "../../pages/home/langMsgNoChats"

const getCurrentTime = () => Math.trunc((new Date).getTime() / 1000)

/**
 * Shows a decreasing number if the user is logged, or "GUEST" text if the user is a guest.

 * When the number is less than 0, the token is deleted and the login status is refreshed.
 */
const TimeleftCounter = () => {
  const [loginStatus, setLoginStatus] = useLoginStatusContext()

  const refTimeleft = useRef(null)
  useEffect(() => {
    if (!loginStatus.isLogged) return

    const idInterval = setInterval(() => {
      const timeleft = loginStatus.data.endDate - getCurrentTime()

      refTimeleft.current.textContent = String(timeleft)

      if (timeleft < 0) {
        clearInterval(idInterval)
        lsDeleteAuthToken()
        setLoginStatus(refreshLoginStatus())
      }
    }, 1000)

    return () => clearInterval(idInterval)
  }, [])

  if (loginStatus.isGuest) return <span><LangText {...langChatsList.btnGuest} /></span>

  return <span ref={refTimeleft}>
    {loginStatus && loginStatus.data.endDate - getCurrentTime()}
  </span>
}

export default TimeleftCounter