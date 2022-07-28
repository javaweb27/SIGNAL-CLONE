import classes from "./login-register-section.module.scss"
import { Link, useNavigate } from "react-router-dom"
import { langRegister as texts } from "./langRegister"
import LangText from "../../fragments/LangText"
import fetchJSON from "../../../lib/fetchJSON"
import FormLoginRegister from "./Form"
import { lsSetAuthToken } from "../../../lib/localStorageHandlers"
import { refreshLoginStatus, useLoginStatusContext } from "../../context/login-status"
import LoginRegisterSection from "./LoginRegisterSection"

const Register = () => {
  const [, setLoginStatus] = useLoginStatusContext()
  const navigate = useNavigate()

  const handleSubmit = async (formData) => {
    const res = await fetchJSON("/register", true, {
      method: "PUT",
      body: JSON.stringify(formData)
    })

    if (res?.ok) navigate("/login")
  }

  const handleLoginStatus = () => {
    lsSetAuthToken("GUEST")
    setLoginStatus(refreshLoginStatus())
  }

  return (
    <LoginRegisterSection>
      <div className={classes.container}>
        <h1><LangText {...texts.title} /></h1>
        <p><LangText {...texts.par} /></p>
      </div>
      <FormLoginRegister
        handleSubmit={handleSubmit}
        submitBtnText={<LangText {...texts.btnNext} />}
      />
      <Link to="/home" onClick={handleLoginStatus} className={classes.linkGuest}>
        <LangText {...texts.btnGuest} />
      </Link>
    </LoginRegisterSection>
  )
}

export default Register