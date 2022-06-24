import { langRegister as texts } from "./langRegister"
import LangText from "../../fragments/LangText"
import LinkPrimary from "../../fragments/link-primary"
import classes from "./index.module.scss"

const Register = () => (
  <section className={classes.container}>
    <h1><LangText {...texts.title} /></h1>
    <p><LangText {...texts.par} /></p>
    <LinkPrimary to="/home"><LangText {...texts.btnGuest} /></LinkPrimary>
  </section>
)

export default Register