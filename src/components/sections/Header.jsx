import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to="settings">usuario</Link>
      <h1>Signal</h1>
    </header>
  )
}

export default Header