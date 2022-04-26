import { createContext, useReducer } from "react";
import appearanceReducer from "./appearanceReducer";

const AppearanceContext = createContext()

const initialState = {
  theme: "DEFAULT",
  language: "spanish"
}

const AppearanceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appearanceReducer, initialState)

  return <AppearanceContext.Provider value={[state, dispatch]}>
    {children}
  </AppearanceContext.Provider>
}

export { AppearanceProvider }
export default AppearanceContext
