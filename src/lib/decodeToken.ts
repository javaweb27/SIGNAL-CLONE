import jwt_decode from "jwt-decode"

/**
 * Decodes a token.
 * @param {string} token
 * @returns The data from the decoded token or null if the token is invalid.
 */
const decodeToken = <T>(token: string | null): T | null => {
  try {
    return jwt_decode(token as string)
  } catch (error) {
    return null
  }
}

export default decodeToken
