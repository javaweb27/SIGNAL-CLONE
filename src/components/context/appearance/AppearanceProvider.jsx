import { useReducer } from "react"
import AppearanceContext from "./AppearanceContext"
import AppearanceReducer from "./AppearanceReducer"
import { DEFAULT } from "./values"

const AppearanceProvider = ({children}) => {

  const initialState = {
    theme: {
      value: DEFAULT,
      text: "Predeterminado del dispositivo"
    }
  }
  
  const [state, dispatch] = useReducer(AppearanceReducer, initialState)

  return (
    <AppearanceContext.Provider value={[state, dispatch]}>
      {children}
    </AppearanceContext.Provider>
  )
}

export default AppearanceProvider
