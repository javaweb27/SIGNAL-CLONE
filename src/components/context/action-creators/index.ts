// CHANGE-THEME
export type T_CtxThemeValue = "DEFAULT" | "LIGHT" | "DARK"
export const changeTheme = (theme: T_CtxThemeValue) => ({
  action: "CHANGE-THEME" as const,
  payload: theme,
})
export type T_CtxThemeAction = ReturnType<typeof changeTheme>

// CHANGE-LANGUAGE
export type T_CtxLanguageValue = "english" | "spanish"
export const changeLanguage = (language: T_CtxLanguageValue) => ({
  action: "CHANGE-LANGUAGE" as const,
  payload: language,
})
export type T_CtxLanguageAction = ReturnType<typeof changeLanguage>
