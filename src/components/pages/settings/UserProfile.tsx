import classes from "./settings-link.module.scss"
import { Link } from "react-router-dom"
import profileClasses from "./user-profile.module.scss"
import ProfilePhoto from "../../fragments/profile-photo"

const UserProfile = () => {
  return (
    <Link to="profile" className={classes.link}>
      <ProfilePhoto/>
      <div className={profileClasses.container}>
        <span className={profileClasses.title}>Usuario</span>
        <span className={profileClasses.subtitle}>123456789</span>
      </div>
    </Link>
  )
}

export default UserProfile