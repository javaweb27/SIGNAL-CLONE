import { useEffect, useRef } from "react"
import { lsDeleteAuthToken } from "../../../lib/localStorageHandlers"
import { refreshLoginStatus, useLoginStatusContext } from "../../context/login-status"
import LangText from "../../fragments/LangText"
import { langChatsList } from "../../pages/home/langMsgNoChats"

const getCurrentTime = () => Math.trunc((new Date).getTime() / 1000)

/**
 * Shows a decreasing number if the user is logged, or "GUEST" text if the user is a guest.
 
 * When the number is less than 0, the token is deleted and the login status is refreshed.
 
 * NOTE: This component must be called only when the user is logged or is guest,
 * like the AsPrivate Component.
 */
const TimeleftCounter = () => {
  const [loginStatus, setLoginStatus] = useLoginStatusContext()
  const refTimeleft = useRef<HTMLElement | null>(null)
  const endDate = Number(loginStatus.data?.endDate)// if "data" is null, it results in 0

  useEffect(() => {
    // "isLogged" is false when "loginStatus.data" is null and the token is not "GUEST" text.
    if (!loginStatus.isLogged) return

    const idInterval = setInterval(() => {
      const timeleft = endDate - getCurrentTime()

      refTimeleft.current!.textContent = String(timeleft)

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
    {loginStatus && endDate - getCurrentTime()}
  </span>
}

export default TimeleftCounter