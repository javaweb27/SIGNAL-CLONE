import { Link } from "react-router-dom"
import BasicHeader from "../core-sections/basic-header"
import LangText from "../fragments/LangText"

const Page404 = () => (
  <>
    <BasicHeader linkPath="#" titleType="h2" titleText="404"></BasicHeader>
    <div style={{ textAlign: "center",fontSize: "1.19rem" }}>
      <p><LangText spanish="Esta pagina no existe" english="This page does not exist" /></p>
      <hr />
      <div>
        <Link to="/home" style={{ color: "var(--title-color)"}}>
          <LangText spanish="Ir al home" english="Go to home" />
        </Link>
      </div>
      <br />
      <div>
        <Link to="/settings" style={{ color: "var(--title-color)"}}>
          <LangText spanish="Ir a la pagina ajustes" english="Go to settings page" />
        </Link>
      </div>
    </div>
  </>
)

export default Page404