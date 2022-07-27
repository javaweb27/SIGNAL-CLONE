import { createContext, useContext, useReducer, useState } from "react"
import { lsGetAuthToken } from "../../../lib/localStorageHandlers"

const LoginStatusContext = createContext()

export const refreshLoginStatus = () => {
  const authToken = lsGetAuthToken()
  return ({
    isLogged: authToken && authToken !== "GUEST" ? true : false,
    isGuest: authToken === "GUEST" ? true : false
  })
}

const initialState = refreshLoginStatus()

export const useLoginStatusContext = () => useContext(LoginStatusContext)

export const LoginStatusProvider = ({ children }) => {
  const [status, setStatus] = useState(initialState)

  return <LoginStatusContext.Provider value={[status, setStatus]}>
    {children}
  </LoginStatusContext.Provider>
}