import { useReducer } from "react"
import Context from "."
import initialState from "./initialState"
import reducers from "./reducers"

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducers, initialState)

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

export default ContextProvider