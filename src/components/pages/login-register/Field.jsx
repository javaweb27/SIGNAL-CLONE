import classes from "./field.module.scss"

const FieldLoginRegister = ({ t, name, labelText, inputRef, ...rest }) => {
  return (
    <div className={classes.container}>
      <label htmlFor={name} className={classes.label}>{labelText}</label>
      <input
        {...rest}
        className={classes.input}
        type={t}
        id={name}
        name={name}
        ref={inputRef}
      />
    </div>
  )
}

export default FieldLoginRegister