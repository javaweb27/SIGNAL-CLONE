import { Link } from "react-router-dom"
import ArrowIcon from "../../svg/ArrowIcon"

const BasicHeader = ({linkPath, titleType, titleText}) => (
  <header className="basic-header">
    <Link to={linkPath} className="link"><ArrowIcon/></Link>
    {titleType==="h2" && <h2 className="title">{titleText}</h2>}
    {titleType==="h3" && <h3 className="title">{titleText}</h3>}
    {titleType==="h4" && <h4 className="title">{titleText}</h4>}
  </header>
)

export default BasicHeader