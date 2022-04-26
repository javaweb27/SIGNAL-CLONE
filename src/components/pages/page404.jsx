import { Link } from "react-router-dom"
import LangText from "../fragments/LangText"

const Page404 = () => (
  <>
    <h1>404, <LangText spanish="la pagina no existe" english="this page does not exist" /></h1>
    <div>
      <Link to="/">
        <LangText spanish="Ir al home" english="Go to home" />
      </Link>
      <hr />
      <Link to="/settings">
        <LangText spanish="Ir a ajustes" english="Go the settings page" />
      </Link>
    </div>
  </>
)

export default Page404