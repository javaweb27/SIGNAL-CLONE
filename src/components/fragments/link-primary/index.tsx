import classes from "./index.module.scss"
import { Link } from "react-router-dom"

interface I_Props {
  to: string;
  className?: string;
  fill?: boolean;
  children: React.ReactNode;
}

const LinkPrimary = ({ to, className, fill, children }: I_Props) => {

  return (
    <Link
      to={to}
      className={`${classes.link} ${classes[fill ? "fill" : "stroke"]}${className ? " " + className : ""}`}
    >
      {children}
    </Link>
  )
}

export default LinkPrimary