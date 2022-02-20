import { Link } from "react-router-dom"
import MoreOptions from "../fragments/MoreOptions"
import ProfilePhoto from "../fragments/ProfilePhoto"
import Search from "../fragments/Search"

const HomeHeader = () => {
  return (
    <header className="home-header">
      <Link to="settings" className="link-photo">
        <ProfilePhoto mini/>
      </Link>
      <h1 className="title">Signal</h1>
      <Search/>
      <MoreOptions/>
    </header>
  )
}

export default HomeHeader