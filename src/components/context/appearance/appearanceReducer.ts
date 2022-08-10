import { T_AppearanceInitialState } from "." // index.tsx file
import { T_CtxLanguageAction, T_CtxThemeAction } from "../action-creators"
import setTheme from "./setTheme"

const appearanceReducer = (
  state: T_AppearanceInitialState,
  { action, payload }: T_CtxLanguageAction | T_CtxThemeAction
) => {
  switch (action) {
    case "CHANGE-THEME":
      return {
        ...state,
        theme: setTheme(payload),
      }
    case "CHANGE-LANGUAGE":
      return {
        ...state,
        language: payload,
      }

    default:
      return state
  }
}

export default appearanceReducer
