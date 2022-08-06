import classes from "./fixed-menu-item.module.scss"

export interface I_ItemPropsAsParam extends I_BaseProps {
  callback: () => void
}

interface I_BaseProps {
  name: string;
  id: string;
  t: "text" | "radio" | "password";
  children: React.ReactNode;
  [x: string]: any;
}

interface I_Props extends I_BaseProps {
  handleClick: () => void;
}

/**
 * @returns An input element that is used only in FixedMenuContainer.
 */
const FixedMenuItem = ({ t, name, id, handleClick, children, ...rest }: I_Props) => (
  <li className={classes.item}>
    <label className={classes.option} htmlFor={id}>
      <input {...rest} name={name} id={id} type={t} onClick={handleClick} />
      {children}
    </label>
  </li>
)

export default FixedMenuItem
