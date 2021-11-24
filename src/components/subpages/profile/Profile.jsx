import { Link } from "react-router-dom"
import ProfileIcon from "../../../svg/ProfileIcon"
import UserProfile from "../../fragments/UserProfile"
import BiographyIcon from "../../../svg/BiographyIcon"
import BasicHeader from "../../sections/BasicHeader"

const Profile = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText="Perfil"/>

      <section className="profile">
        <UserProfile forProfilePage/>

        <Link to="name" className="link">
          <ProfileIcon/>
          <div className="container">
            <span>Usuario</span>
            <span>Tu nombre</span>
          </div>
        </Link>

        <Link to="biography" className="link">
          <BiographyIcon/>
          <div className="container">
            <span>Biografia</span>
            <span>Escribe unas pocas palabras sobre ti</span>
          </div>
        </Link>
        <p className="description">Tu perfil tambien esta cifrado de extremo a extremo.<br />Solo tus contactos, las personas con las que inicias o aceptas un chat, y quienes participan en los grupos a los que te unes podran verlo</p>
      </section>
    </>
  )
}
export default Profile