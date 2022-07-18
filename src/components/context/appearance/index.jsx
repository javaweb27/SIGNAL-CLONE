import { createContext, useContext, useReducer } from "react"
import appearanceReducer from "./appearanceReducer"

const AppearanceContext = createContext()

const initialState = {
  theme: "DEFAULT",
  language: "english"
}

export const useAppearanceContext = () => useContext(AppearanceContext)

export const AppearanceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appearanceReducer, initialState)

  return <AppearanceContext.Provider value={[state, dispatch]}>
    {children}
  </AppearanceContext.Provider>
}