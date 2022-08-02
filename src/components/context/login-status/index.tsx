import { createContext, useContext, useState } from "react"
import decodeToken from "../../../lib/decodeToken"
import { lsDeleteAuthToken, lsGetAuthToken } from "../../../lib/localStorageHandlers"

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

type T_InitialState = typeof initialState

const Context = createContext<readonly [
  T_InitialState,
  React.Dispatch<React.SetStateAction<T_InitialState>>
]>(undefined!)

export const useLoginStatusContext = () => useContext(Context)

export const LoginStatusProvider = ({ children }: { children: JSX.Element }) => {

  const [status, setStatus] = useState(initialState)

  return <Context.Provider value={[status, setStatus]}>
    {children}
  </Context.Provider>
}

interface I_TokenData {
  userData: { endDate: number }
}

function getDataFromToken(token: string | null) {
  const decoded = decodeToken<I_TokenData>(token)
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