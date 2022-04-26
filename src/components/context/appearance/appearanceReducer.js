import setTheme from "./setTheme";

const appearanceReducer = (state, { action, payload }) => {
  switch (action) {
    case "CHANGE-THEME":
      return {
        ...state,
        theme: {
          value: setTheme(payload).value,
          text: setTheme(payload).text
        }
      }
    case "CHANGE-LANGUAGE":
      return {
        ...state,
        language: {
          value: payload
        }
      }

    default:
      return state
  }
}

export default appearanceReducer