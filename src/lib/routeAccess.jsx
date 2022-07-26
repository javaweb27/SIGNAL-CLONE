
import { Navigate } from "react-router-dom"
import { lsGetAuthToken } from "./localStorageHandlers"

/**
 * Verifies the token, if it is valid o GUEST, the user is redirected to Home page.
 * @param {*} Component page to render
 * @returns Component
 */
export const asPublic = (Component) => {
  const token = lsGetAuthToken()

  if (token || token === "GUEST") return < Navigate to="/home" />

  return Component
}

/**
 * Verifies the token, if there is no token, the user is redirected to Login page,
 * @param {*} Component page to render
 * @returns Component
 */
export const asPrivate = (Component) => {
  if (!lsGetAuthToken()) return < Navigate to="/login" />

  return Component
}