import classes from "./index.module.scss"
import { Link } from "react-router-dom"

const LinkPrimary = ({ to, className, fill, children }) => {

  return <Link
    to={to}
    className={`${classes.link} ${classes[fill ? "fill" : "stroke"]}${className ? " " + className : ""}`}
  >
    {children}
  </Link>
}

export default LinkPrimary