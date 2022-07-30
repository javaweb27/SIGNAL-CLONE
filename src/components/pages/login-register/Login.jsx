import classes from "./login-register-section.module.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import { langLogin as texts } from "./langLogin"
import LangText from "../../fragments/LangText"
import fetchJSON from "../../../lib/fetchJSON"
import FormLoginRegister from "./Form"
import { lsSetAuthToken } from "../../../lib/localStorageHandlers"
import { refreshLoginStatus, useLoginStatusContext } from "../../context/login-status"
import LoginRegisterSection from "./LoginRegisterSection"
import FixedMessage from "./FixedMessage"

const Login = () => {
  const [, setLoginStatus] = useLoginStatusContext()
  const [errors, setErrors] = useState(0)

  const handleSubmit = async (formData) => {
    const res = await fetchJSON("/login", true, {
      method: "POST",
      body: JSON.stringify(formData)
    })

    if (res?.ok) {
      lsSetAuthToken(res.json.token)
      setLoginStatus(refreshLoginStatus())
      return
    }

    setErrors(current => current + 1)
  }

  return (
    <LoginRegisterSection>
      <div className={classes.container}>
        <h1><LangText {...texts.title} /></h1>
      </div>
      <FormLoginRegister
        handleSubmit={handleSubmit}
        submitBtnText={<LangText {...texts.title} />}
      />
      <Link to="/register" className={classes.linkGuest}>
        <LangText {...texts.linkToRegister} />
      </Link>
      {errors > 0 && <FixedMessage
        resetErrors={() => setErrors(0)}
        msg={<LangText {...texts.incorrectData} />}
      />}
    </LoginRegisterSection>
  )
}

export default Login