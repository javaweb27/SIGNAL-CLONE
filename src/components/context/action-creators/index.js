import { CHANGE_THEME } from "../action-types";

export const changeTheme = (theme = "") => ({
  type: "appearance",
  action: {
    type: CHANGE_THEME,
    theme
  }
})