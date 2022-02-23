import HeaderButton from "../fragments/HeaderButton"

const BasicHeader = ({linkPath, titleType, titleText}) => (
  <header className="basic-header">
    <HeaderButton to={linkPath} iconName="arrow_left"/>
    {titleType==="h2" && <h2 className="title">{titleText}</h2>}
    {titleType==="h3" && <h3 className="title">{titleText}</h3>}
    {titleType==="h4" && <h4 className="title">{titleText}</h4>}
  </header>
)

export default BasicHeader