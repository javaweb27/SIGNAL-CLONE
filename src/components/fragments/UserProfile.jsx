import { Link } from "react-router-dom"
import ProfilePhoto from "./ProfilePhoto"

const UserProfile = () => {
  return (
    <Link to="profile" className="link user-profile">
      <ProfilePhoto/>
      <div className="container">
        <span>Usuario</span>
        <span>123456789</span>
      </div>
    </Link>
  )
}

export default UserProfile