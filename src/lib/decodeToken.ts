import jwt_decode from "jwt-decode"

/**
 * Decodes a token.
 * @param {string} token
 * @returns The data from the decoded token or null if the token is invalid.
 */
const decodeToken = (token: string) => {
  try {
    return jwt_decode(token || "")
  }
  catch (error) {
    return null
  }
}

export default decodeToken