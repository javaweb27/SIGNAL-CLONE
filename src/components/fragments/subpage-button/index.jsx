import classes from "./index.module.scss"
import ButtonToggle from "../button-toggle"

const SubpageButton = ({toggle, title, children, event}) => {
  return (
    <button className={classes.button} {...event}>
      { children ?
        <div className={classes.container}>
          <span className={classes.title}>{title}</span>
          <span className={classes.subtitle}>{children}</span>
        </div>
        :
        <span className={classes.title}>{title}</span>
      }
      {toggle && <ButtonToggle/>}
    </button>
  )
}
export default SubpageButton