import { Link } from "react-router-dom"

const Sublink = ({to, title, children}) => {
  return (
    <Link to={to} className="sublink">
      <span className="title">{title}</span>
      {children && <span className="subtitle">{children}</span>}
    </Link>
  )
}
export default Sublink