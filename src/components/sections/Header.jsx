import { Link } from "react-router-dom"
import MoreOptions from "../fragments/MoreOptions"
import Search from "../fragments/Search"

const Header = () => {
  return (
    <header className="home-header">
      <Link className="user-icon" to="settings">
        <img src="" alt="" />
        <span>icon</span>
      </Link>
      <h1 className="title">Signal</h1>
      <Search/>
      <MoreOptions/>
    </header>
  )
}

export default Header