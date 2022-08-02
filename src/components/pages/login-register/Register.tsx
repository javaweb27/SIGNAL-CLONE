import { langRegister as texts } from "./langRegister"
import classes from "./login-register-section.module.scss"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import LangText from "../../fragments/LangText"
import fetchJSON from "../../../lib/fetchJSON"
import FormLoginRegister from "./Form"
import { lsSetAuthToken } from "../../../lib/localStorageHandlers"
import { refreshLoginStatus, useLoginStatusContext } from "../../context/login-status"
import LoginRegisterSection from "./LoginRegisterSection"
import FixedMessage from "./FixedMessage"
import { I_FormDataState } from "./FromDataContext"

const Register = () => {
  const [, setLoginStatus] = useLoginStatusContext()
  const navigate = useNavigate()
  const [errors, setErrors] = useState(0)

  const handleSubmit = async (formData: I_FormDataState) => {
    const res = await fetchJSON("/register", true, {
      method: "PUT",
      body: JSON.stringify(formData)
    })

    if (res?.ok) return navigate("/login")

    setErrors(current => current + 1)
  }

  const handleGuest = () => {
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
      <Link to="/home" onClick={handleGuest} className={classes.linkGuest}>
        <LangText {...texts.btnGuest} />
      </Link>
      {errors > 0 && <FixedMessage
        resetErrors={() => setErrors(0)}
        msg={<LangText {...texts.emailNotAvailable} />}
      />}
    </LoginRegisterSection>
  )
}

export default Register