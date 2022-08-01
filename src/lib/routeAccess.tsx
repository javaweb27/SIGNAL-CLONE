
import { Navigate } from "react-router-dom"
import { useLoginStatusContext } from "../components/context/login-status"

interface I_Props { page: JSX.Element }

/**
 * Verifies the login status, if the user is logged or guest, it is redirected to Home page.
 * @param {*} Component page to render, it must be called as a Component
 * @returns Component
 */
export const AsPublic = ({ page: Component }: I_Props) => {
  const [loginStatus] = useLoginStatusContext()

  if (loginStatus.isLogged || loginStatus.isGuest) return < Navigate to="/home" />

  return Component
}

/**
 * Verifies the login status, if isLogged and isGuest are false, the user is redirected to Login page,
 * @param {*} Component page to render, it must be called as a Component
 * @returns Component
 */
export const AsPrivate = ({ page: Component }: I_Props) => {
  const [loginStatus] = useLoginStatusContext()

  if (!loginStatus.isLogged && !loginStatus.isGuest) return < Navigate to="/login" />

  return Component
}