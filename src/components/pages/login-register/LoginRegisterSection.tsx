import classes from "./login-register-section.module.scss"
import { FormDataProvider } from "./FromDataContext"

const LoginRegisterSection = ({ children }: { children: React.ReactNode }) => (
  <FormDataProvider>
    <section className={classes.rootTag}>{children}</section>
  </FormDataProvider>
)

export default LoginRegisterSection