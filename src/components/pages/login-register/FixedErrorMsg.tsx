import classes from "./fixed-error-msg.module.scss"
import { useEffect } from "react"
import { emailRegex } from "../../../lib/regex"
import LangText from "../../fragments/LangText"
import { I_FormDataState, useFormDataContext } from "./FromDataContext"
import { langFixedErrorMgs as texts } from "./langFixedErrorMgs"

const getErrors = ({ email, password }: I_FormDataState) => ({
  emailNotValid: !emailRegex.exec(email),
  incompleteData: !email || !password,
})

export const isFormDataValid = (formData: I_FormDataState) => {
  const errors = Object.values(getErrors(formData))

  const isValid = !errors.find(value => value === true)

  return isValid
}

const Par = ({ children }: { children: React.ReactNode }) => (
  <p className={classes.msg}>{children}</p>
)

const FixedErrorMsg = ({ resetErrors }: { resetErrors: () => void }) => {
  const [formData] = useFormDataContext()
  const errors = getErrors(formData)

  // re-render is caused by setErrorsCount of the parent
  useEffect(() => {
    const timeoutId = setTimeout(() => resetErrors(), 6000)

    return () => clearTimeout(timeoutId)
  })

  return errors.incompleteData ? (
    <Par>
      <LangText {...texts.incompleteData} />
    </Par>
  ) : errors.emailNotValid ? (
    <Par>
      <LangText {...texts.emailNotValid} />
    </Par>
  ) : null
}

export default FixedErrorMsg
