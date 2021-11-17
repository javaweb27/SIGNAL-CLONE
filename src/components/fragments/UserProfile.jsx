import { Link } from "react-router-dom"

const UserProfile = ({forHeader, forSettingsLink}) => {
  const path = (
    forHeader ? "settings" :
    forSettingsLink ? "profile" : ""
  )

  return (
    <Link to={path} className={`link user-profile ${forHeader && "for-header"}`}>
      <div className={`icon ${forHeader && "for-header"}`}>
        <span className="text">h</span>
      </div>
      { forSettingsLink &&
        <div className="container">
          <span>Usuario</span>
          <span>123456789</span>
        </div>
      }
    </Link>
  )
}

export default UserProfile