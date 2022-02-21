import { container, title, subtitle } from "../../styles/fragments/user-profile.module.scss"
import classes from "../../styles/fragments/settings-link.module.scss"
import { Link } from "react-router-dom"
import ProfilePhoto from "./ProfilePhoto"

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