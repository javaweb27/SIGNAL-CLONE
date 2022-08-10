import classes from "./field.module.scss"

interface I_Props {
  t: "email" | "password" | "text"
  name: "email" | "password"
  labelText: React.ReactNode
  inputRef?: React.MutableRefObject<HTMLInputElement | null>
  [x: string]: any
}

const FieldLoginRegister = ({ t, name, labelText, inputRef, ...rest }: I_Props) => {
  return (
    <div className={classes.container}>
      <label htmlFor={name} className={classes.label}>
        {labelText}
      </label>
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
