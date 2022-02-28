import { CHANGE_THEME } from "../action-types"
import setTheme from "../js/setTheme"

const appearanceReducer = (state, {type, theme}) => {
  if (type === CHANGE_THEME) {
    state.appearance.theme.value = setTheme(theme).value
    state.appearance.theme.text = setTheme(theme).text
    return state
  }
}

export default appearanceReducer
