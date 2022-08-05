import classes from "./index.module.scss"

interface I_Props {
  title: React.ReactNode;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

const FixedContainer = ({ title, containerRef, children }: I_Props) => {
  const closeMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement

    if (target.matches(`.${classes.container}`)) {
      containerRef.current!.classList.remove(classes.active)
    }
  }

  return (
    <div ref={containerRef} onClick={closeMenu} className={classes.container}>
      <div className={classes.menu}>
        <span>{title}</span>
        <ul>
          {children}
        </ul>
      </div>
    </div>
  )
}

export default FixedContainer
