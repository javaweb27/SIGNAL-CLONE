import classes from "./index.module.scss"

interface I_Props {
  name: string;
  id: string;
  t: "text" | "radio" | "password"
  children: React.ReactNode;
  [x: string]: any;
}

/**
 * Used in options of FixedContainer
 */
const FixedContainerOption = ({ name, id, t, children, ...props }: I_Props) => {
  return (
    <li className={classes.item}>
      <label className={classes.option} htmlFor={id}>
        <input name={name} id={id} type={t} {...props} />
        {children}
      </label>
    </li>
  )
}

export default FixedContainerOption
