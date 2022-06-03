import classes from "./settings-link.module.scss"
import { Link } from "react-router-dom"
import { container, title, subtitle } from "./user-profile.module.scss"
import ProfilePhoto from "../../fragments/profile-photo"

const UserProfile = () => {
  return (
    <Link to="profile" className={classes.link}>
      <ProfilePhoto/>
      <div className={container}>
        <span className={title}>Usuario</span>
        <span className={subtitle}>123456789</span>
      </div>
    </Link>
  )
}

export default UserProfile