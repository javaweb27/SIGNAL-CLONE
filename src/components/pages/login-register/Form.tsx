import classes from "./form.module.scss"
import { useRef, useState } from "react"
import Svg from "../../svg"
import FieldLoginRegister from "./Field"
import { langForm as texts } from "./langForm"
import LangText from "../../fragments/LangText"
import FixedErrorMsg, { isFormDataValid } from "./FixedErrorMsg"
import { I_FormDataState, useFormDataContext } from "./FromDataContext"

interface I_Props {
  handleSubmit: (param: I_FormDataState) => void
  submitBtnText: React.ReactNode
}

const FormLoginRegister = ({ handleSubmit, submitBtnText }: I_Props) => {
  const [errorsCount, setErrorsCount] = useState(0)
  const [hidden, setHidden] = useState(true)
  const [formData, setFormData] = useFormDataContext()
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    if (isFormDataValid(formData)) return handleSubmit(formData)

    setErrorsCount(current => current + 1)
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({
      ...formData,
      [target.name]: target.value,
    })

  const toggleHidden = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setHidden(current => !current)
  }

  return (
    <form>
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
            <Svg name={hidden ? "eye" : "eye_slash"} />
          </button>
        </div>
      </div>
      <div>
        <button onClick={onSubmit} className={classes.btnSubmit}>
          {submitBtnText}
        </button>
      </div>
      {errorsCount > 0 && <FixedErrorMsg resetErrors={() => setErrorsCount(0)} />}
    </form>
  )
}

export default FormLoginRegister
