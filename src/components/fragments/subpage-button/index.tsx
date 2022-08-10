import classes from "./index.module.scss"
import ButtonToggle from "../button-toggle"

interface I_Props {
  toggle?: boolean
  title: React.ReactNode
  children?: React.ReactNode
  event?: any
}

const SubpageButton = ({ toggle, title, children, event }: I_Props) => {
  return (
    <button className={classes.button} {...event}>
      {children ? (
        <div className={classes.container}>
          <span className={classes.title}>{title}</span>
          <span className={classes.subtitle}>{children}</span>
        </div>
      ) : (
        <span className={classes.title}>{title}</span>
      )}
      {toggle && <ButtonToggle />}
    </button>
  )
}
export default SubpageButton
