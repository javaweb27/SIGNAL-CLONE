import classes from "../../styles/fragments/subpage-button.module.scss"

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

      {toggle && <span>boton</span>}
    </button>
  )
}
export default SubpageButton