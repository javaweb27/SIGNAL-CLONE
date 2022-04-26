import setTheme from "./setTheme";

const appearanceReducer = (state, { action, payload }) => {
  switch (action) {
    case "CHANGE-THEME":
      return {
        ...state,
        theme: setTheme(payload)
      }
    case "CHANGE-LANGUAGE":
      return {
        ...state,
        language: payload
      }

    default:
      return state
  }
}

export default appearanceReducer