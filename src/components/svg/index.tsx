import classes from "./index.module.scss"
import pathsDarkLight from "./paths-dark-light"
import pathsNormal from "./paths-normal"

type T_PathsNormal = keyof typeof pathsNormal
type T_PathsDarkLight = keyof typeof pathsDarkLight

export type T_SvgPaths = T_PathsDarkLight | T_PathsNormal

interface I_Base {
  children: JSX.Element
  className?: string | undefined
}

const Base = ({ children, className }: I_Base) => (
  <svg
    className={className}
    width="27"
    height="27"
    fill="var(--title-color)"
    version="1.1"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
)

/**
 * @param {string} name
 * @returns An inline svg, it may have dark and light modes.
 */
const Svg = ({ name }: { name: T_PathsNormal | T_PathsDarkLight }) => {
  if (Object.hasOwn(pathsNormal, name)) {
    return <Base>{pathsNormal[name as T_PathsNormal]}</Base>
  }

  const icon = pathsDarkLight[name as T_PathsDarkLight]

  return (
    <>
      <Base className={classes.light}>{icon.light}</Base>
      <Base className={classes.dark}>{icon.dark}</Base>
    </>
  )
}

export default Svg
