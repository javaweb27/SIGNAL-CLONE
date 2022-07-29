import { createContext, useContext, useState } from "react"
import decodeToken from "../../../lib/decodeToken"
import { lsDeleteAuthToken, lsGetAuthToken } from "../../../lib/localStorageHandlers"

const Context = createContext()

export const refreshLoginStatus = () => {
  const authToken = lsGetAuthToken()

  const data = getDataFromToken(authToken)
  const isGuest = authToken === "GUEST"

  if (!isGuest && !data) lsDeleteAuthToken()

  return ({
    data,
    isGuest,
    isLogged: Boolean(data) && !isGuest,
  })
}

const initialState = refreshLoginStatus()

export const useLoginStatusContext = () => useContext(Context)

export const LoginStatusProvider = ({ children }) => {

  const [status, setStatus] = useState(initialState)

  return <Context.Provider value={[status, setStatus]}>
    {children}
  </Context.Provider>
}

function getDataFromToken(token) {
  const decoded = decodeToken(token)

  if (!decoded) {
    return null
  }

  try {
    return {
      // name: atob(decoded.userData.name),
      // email: atob(decoded.userData.email),
      endDate: decoded.userData.endDate
    }
  }
  catch {
    return null
  }
}