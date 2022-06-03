import classes from "./index.module.scss"
import paths from "./paths"

const Svg = ({ name = "" }) => {

  //si no hay svg en el objeto paths entonces no renderizar
  if (!paths[name]) return null

  const SVG = ({ children, className = null}) => (
    <svg className={className} width="27" height="27" fill="var(--title-color)" version="1.1" viewBox="0 0 16 16" xmlns= "http://www.w3.org/2000/svg">
      { children }
    </svg>
  )

  //si el svg tiene tiene dark y light entonces renderizarlos
  //sino renderizar el svg existente
  if (paths[name].light && paths[name].dark) {
    return (
      <>
        <SVG className={classes.light}>{paths[name].light}</SVG>
        <SVG className={classes.dark}>{paths[name].dark}</SVG>
      </>
    )
  }
  else {
    return <SVG>{paths[name]}</SVG>
  }
}

export default Svg