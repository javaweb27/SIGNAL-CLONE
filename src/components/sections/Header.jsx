import { Link } from "react-router-dom"
import MoreOptions from "../fragments/MoreOptions"
import Search from "../fragments/Search"
import UserProfile from "../fragments/UserProfile"

const Header = () => {
  return (
    <header className="home-header">
      <UserProfile forHeader/>
      <h1 className="title">Signal</h1>
      <Search/>
      <MoreOptions/>
    </header>
  )
}

export default Header