import "./index.scss"
import { Link } from "react-router-dom"
import LangText from "../../fragments/LangText"
import ProfilePhoto from "../../fragments/profile-photo"
import BasicHeader from "../../core-sections/basic-header"
import Svg from "../../svg"

const Profile = () => {
  return (
    <>
      <BasicHeader linkPath="/settings" titleType="h3" titleText={<LangText spanish="Perfil" english="Profile" />} />

      <section className="profile">
        <div className="photo-container">
          <ProfilePhoto />
        </div>

        <Link to="name" className="link">
          <Svg name="profile" />
          <div className="container">
            <span>Usuario</span>
            <span><LangText spanish="Tu nombre" english="Your name" /></span>
          </div>
        </Link>

        <Link to="biography" className="link">
          <Svg name="biography" />
          <div className="container">
            <span><LangText spanish="Biografia" english="About" /></span>
            <span><LangText spanish="Escribe unas pocas palabras sobre ti" english="Write a few words about yourself" /></span>
          </div>
        </Link>
        <p className="description">
          <LangText
            spanish="Tu perfil tambien esta cifrado de extremo a extremo. Solo tus contactos, las personas con las que inicias o aceptas un chat, y quienes participan en los grupos a los que te unes podran verlo."
            english="Your profile is end-toend escrypted. Your profile and changes to it will be visible to your contacts, when you initiate or accept new conversations, and when you join new groups."
          />
        </p>
      </section>
    </>
  )
}

export default Profile
