import classes from "./index.module.scss"
import { Link } from "react-router-dom"

interface I_Props {
  to: string
  title: React.ReactNode
  children?: React.ReactNode
}

const SubpageLink = ({ to, title, children }: I_Props) => {
  return (
    <Link to={to} className={classes.link}>
      <span className={classes.title}>{title}</span>
      {children && <span className={classes.subtitle}>{children}</span>}
    </Link>
  )
}
export default SubpageLink
