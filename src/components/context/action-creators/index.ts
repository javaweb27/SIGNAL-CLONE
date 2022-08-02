export type T_CtxThemeValue = "DEFAULT" | "LIGHT" | "DARK"
export type T_CtxThemeAction = ReturnType<typeof changeTheme>

export const changeTheme = (theme: T_CtxThemeValue) => ({
  action: "CHANGE-THEME" as "CHANGE-THEME",
  payload: theme
})

export type T_CtxLanguageValue = "english" | "spanish"
export type T_CtxLanguageAction = ReturnType<typeof changeLanguage>

export const changeLanguage = (language: T_CtxLanguageValue) => ({
  action: "CHANGE-LANGUAGE" as "CHANGE-LANGUAGE",
  payload: language
})