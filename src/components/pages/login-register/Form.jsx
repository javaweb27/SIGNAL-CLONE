import classes from "./form.module.scss"
import { useRef, useState } from "react"
import Svg from "../../svg"
import FieldLoginRegister from "./Field"
import { langForm as texts } from "./langForm"
import LangText from "../../fragments/LangText"

const FormLoginRegister = ({ handleSubmit, submitBtnText }) => {
  const [hidden, setHidden] = useState(true)
  const [userData, setUserData] = useState({ email: "", password: "" })
  const passwordRef = useRef()

  const onSubmit = (event) => {
    event.preventDefault()

    if (!userData.password || !userData.password) return console.log("datos incompletos")

    handleSubmit(userData)
  }

  const handleChange = ({ target }) => setUserData({
    ...userData,
    [target.name]: target.value
  })

  const toggleHidden = (event) => {
    event.preventDefault()
    setHidden(current => !current)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.container}>
        <FieldLoginRegister
          labelText={<LangText {...texts.email}/>}
          t="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <div className={classes.passwordContainer}>
          <FieldLoginRegister
            labelText={<LangText {...texts.password}/>}
            t={hidden ? "password" : "text"}
            name="password"
            inputRef={passwordRef}
            value={userData.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
          <button className={classes.btnHidden} onClick={toggleHidden}>
            <Svg name={hidden ? "eye" : "eye_slash"} width="1.9rem" height="1.9rem" />
          </button>
        </div>
      </div>
      <div>
        <button className={classes.btnSubmit}>{submitBtnText}</button>
      </div>
    </form>
  )
}

export default FormLoginRegister