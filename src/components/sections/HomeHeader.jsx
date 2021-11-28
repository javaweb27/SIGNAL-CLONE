import MoreOptions from "../fragments/MoreOptions"
import Search from "../fragments/Search"
import UserProfile from "../fragments/UserProfile"

const HomeHeader = () => {
  return (
    <header className="home-header">
      <UserProfile forHeader/>
      <h1 className="title">Signal</h1>
      <Search/>
      <MoreOptions/>
    </header>
  )
}

export default HomeHeader