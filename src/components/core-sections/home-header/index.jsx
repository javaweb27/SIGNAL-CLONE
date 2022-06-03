import "./index.scss"
import { Link } from "react-router-dom"
import MoreOptions from "./MoreOptions"
import Search from "./Search"
import ProfilePhoto from "../../fragments/profile-photo"

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