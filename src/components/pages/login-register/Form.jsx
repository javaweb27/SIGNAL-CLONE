import classes from "./form.module.scss"
import { useRef, useState } from "react"
import Svg from "../../svg"
import FieldLoginRegister from "./Field"
import { langForm as texts } from "./langForm"
import LangText from "../../fragments/LangText"
import FixedErrorMsg, { isFormDataValid } from "./FixedErrorMsg"
import { useFormDataContext } from "./FromDataContext"

const FormLoginRegister = ({ handleSubmit, submitBtnText }) => {
  const [errorsCount, setErrorsCount] = useState(0)
  const [hidden, setHidden] = useState(true)
  const [formData, setFormData] = useFormDataContext()
  const passwordRef = useRef()

  const onSubmit = (event) => {
    event.preventDefault()

    if (isFormDataValid(formData)) return handleSubmit(formData)

    setErrorsCount(current => current + 1)
  }

  const handleChange = ({ target }) => setFormData({
    ...formData,
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
          labelText={<LangText {...texts.email} />}
          t="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className={classes.passwordContainer}>
          <FieldLoginRegister
            labelText={<LangText {...texts.password} />}
            t={hidden ? "password" : "text"}
            name="password"
            inputRef={passwordRef}
            value={formData.password}
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
      {errorsCount > 0 && <FixedErrorMsg resetErrors={() => setErrorsCount(0)} />}
    </form>
  )
}

export default FormLoginRegister