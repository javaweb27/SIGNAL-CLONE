import classes from "./index.module.scss"
import { useNavigate } from "react-router-dom"
import { langLogin as texts } from "./langLogin"
import LangText from "../../fragments/LangText"
import fetchJSON from "../../../lib/fetchJSON"
import FormLoginRegister from "./Form"

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = async (userData) => {
    const res = await fetchJSON("/login", true, {
      method: "POST",
      body: JSON.stringify(userData)
    })

    if (res?.ok) navigate("/home")
    console.log(userData, res)
  }

  return (
    <section className={classes.rootTag}>
      <div className={classes.container}>
        <h1><LangText {...texts.title} /></h1>
      </div>
      <FormLoginRegister
        handleSubmit={handleSubmit}
        submitBtnText={<LangText {...texts.title} />}
      />
    </section>
  )
}

export default Login