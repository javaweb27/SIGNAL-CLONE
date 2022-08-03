import { langWelcome as texts } from "./langWelcome"
import { Link } from "react-router-dom"
import classes from "./index.module.scss"
import urlImagesignal from "../../../../icon-signal.png"
import LinkPrimary from "../../fragments/link-primary"
import LangText from "../../fragments/LangText"

const Welcome = () => (
  <section className={classes.container}>
    <img className={classes.img} src={urlImagesignal} alt="signal" />

    <h1 className={classes.title}>
      <LangText {...texts.title1} />
      <br />
      <LangText {...texts.title2} />
    </h1>

    <Link to="" className={classes.terms}><LangText {...texts.terms} /></Link>

    <LinkPrimary to="/register" fill><LangText {...texts.btnContinue} /></LinkPrimary>
    <LinkPrimary to=""><LangText {...texts.btnAccount} /></LinkPrimary>
  </section>
)

export default Welcome
