import { Link } from "react-router-dom"

const UserProfile = ({forHeader, forSettingsLink, forProfilePage}) => {
  const path = forHeader ? "settings" : forSettingsLink ? "profile" : ""
  const className = forHeader ? "for-header" : forProfilePage ? "for-profile-page" : ""

  return (
    <Link to={path} className={`link user-profile ${className}`}>
      <div className="icon">
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