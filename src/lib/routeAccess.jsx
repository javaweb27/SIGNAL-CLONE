
import { Navigate } from "react-router-dom"
import { useLoginStatusContext } from "../components/context/login-status"

/**
 * Verifies the token, if it is valid o GUEST, the user is redirected to Home page.
 * @param {*} Component page to render, it must be called as a Component
 * @returns Component
 */
export const AsPublic = ({ page: Component }) => {
  const [loginStatus] = useLoginStatusContext()

  if (loginStatus.isLogged || loginStatus.isGuest) return < Navigate to="/home" />

  return Component
}

/**
 * Verifies the token, if there is no token and GUEST is false, the user is redirected to Login page,
 * @param {*} Component page to render, it must be called as a Component
 * @returns Component
 */
export const AsPrivate = ({ page: Component }) => {
  const [loginStatus] = useLoginStatusContext()

  if (!loginStatus.isLogged && !loginStatus.isGuest) return < Navigate to="/login" />

  return Component
}