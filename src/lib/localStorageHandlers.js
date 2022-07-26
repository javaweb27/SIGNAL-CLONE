/**
 * Deletes the token that was saved in localStorage with the name "token"
 */
 export const lsDeleteAuthToken = () => localStorage.removeItem("token")

 /**
  * 
  * @returns The token that was saved in localStorage with the name "token", it may be null.
  */
 export const lsGetAuthToken = () => localStorage.getItem("token")
 
 /**
  * Saves the token in localStorage with the name "token".
  *
  * The token must be obtained when logging in.
  *
  * @param {string} token
  */
 export const lsSetAuthToken = (token) => localStorage.setItem("token", token)
