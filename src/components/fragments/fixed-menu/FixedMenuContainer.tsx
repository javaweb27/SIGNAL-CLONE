import classes from "./fixed-menu-container.module.scss"
import FixedMenuItem, { I_ItemPropsAsParam } from "./FixedMenuItem"
import { closeFixedMenu } from "./fixedMenuMethods"

interface I_Props {
  title: React.ReactNode;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  isChecked: (id: string) => boolean,
  children: (Item: (props: I_ItemPropsAsParam) => JSX.Element) => React.ReactNode;
}

/**
 * The Item component is provided from the param of the children prop that is a callback function.
 * @returns Items returned by the "children" prop in a centered menu.
 */
const FixedMenuContainer = ({
  title,
  containerRef,
  isChecked,
  children,
}: I_Props) => {
  return (
    <div
      ref={containerRef}
      onClick={({ target }) => closeFixedMenu(target as HTMLDivElement)}
      className={classes.container}
    >
      <div className={classes.menu}>
        <span>{title}</span>
        <ul>
          {children(({ callback, ...rest }) => (
            <FixedMenuItem
              readOnly
              checked={isChecked(rest.id)}
              {...rest}
              handleClick={() => {
                callback()
                containerRef.current!.classList.remove(classes.active)
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FixedMenuContainer
