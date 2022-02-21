import classes from "../../styles/fragments/subpage-link.module.scss"
import { Link } from "react-router-dom"

const SubpageLink = ({to, title, children}) => {
  return (
    <Link to={to} className={classes.link}>
      <span className={classes.title}>{title}</span>
      {children && <span className={classes.subtitle}>{children}</span>}
    </Link>
  )
}
export default SubpageLink