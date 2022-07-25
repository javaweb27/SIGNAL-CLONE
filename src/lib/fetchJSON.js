const NODE_API = import.meta.env.VITE_NODE_API || "http://localhost:3060"
/**
 * Fetchs or sends JSON data, try and catch is already included.
 * @param {string} endpoint base path of the Node API is already included, "/" is necessary.
 * @param {boolean} withDataBack if it is true, "json" prop is included in the object.
 * @param init - content JSON is already included in headers.
 * @returns Promise: object with "ok" prop, and "json" prop parsed JSON if it has data back, or NULL instead of object if the fetch fails.
 */
const fetchJSON = async (endpoint, withDataBack, init) => {
  try {
    const res = await fetch(`${NODE_API}${endpoint}`, {
      ...init,
      headers: {
        ...init.headers,
        "Content-Type": "application/json"
      }
    })

    return withDataBack ? {
      ok: res.ok,
      json: await res.json()
    } : { ok: res.ok }
  }
  catch (error) {
    console.error("error fetch json:", error)
    return null
  }
}

export default fetchJSON