import { CHANGE_THEME } from "../actions"
import setTheme from "./js/setTheme";

const AppearanceReducer = (state, {type, theme}) => {  
  if (type === CHANGE_THEME) {
    state.theme.value = setTheme(theme).value
    state.theme.text = setTheme(theme).text
    return state
  }


}
export default AppearanceReducer
