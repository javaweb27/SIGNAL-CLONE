import appearanceReducer from "./appearance"

const reducers = (state, {type, action}) => {
  const types = {
    appearance: appearanceReducer
  }

  return types[type] ? types[type]({...state}, {...action}) : state
}

export default reducers
