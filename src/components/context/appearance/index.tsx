import { createContext, useContext, useReducer } from "react"
import { T_CtxThemeValue, T_CtxLanguageValue, T_CtxLanguageAction, T_CtxThemeAction } from "../action-creators"
import appearanceReducer from "./appearanceReducer"

const Context = createContext<
  readonly [
    T_AppearanceInitialState,
    React.Dispatch<T_CtxLanguageAction | T_CtxThemeAction>
  ]
>(undefined!)

export type T_AppearanceInitialState = typeof initialState

const initialState = {
  theme: "DEFAULT" as T_CtxThemeValue,
  language: "english" as T_CtxLanguageValue
}

export const useAppearanceContext = () => useContext(Context)

export const AppearanceProvider = ({ children }: {children: JSX.Element}) => {
  const [state, dispatch] = useReducer(appearanceReducer, initialState)

  return <Context.Provider value={[state, dispatch]}>
    {children}
  </Context.Provider>
}