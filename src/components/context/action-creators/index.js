export const changeTheme = (theme = "") => ({
  action: "CHANGE-THEME",
  payload: theme
})

export const changeLanguage = (language = "") => ({
  action: "CHANGE-LANGUAGE",
  payload: language
})