import classes from "./fixed-menu-container.module.scss"

/**
 * Opens the fixed menu.
 * @param target ref of the fixed menu to add the "active" class name.
 */
export const openFixedMenu = (target: HTMLDivElement) => {
  target.classList.add(classes.active)
}

/**
 * Is used only in the FixedMenuContainer component.
 *
 * Closes the fixed menu when the user clicks in the container part,
 * not the centered menu or its items
 * @param target ref of the fixed menu to remove the "active" class name.
 */
export const closeFixedMenu = (target: HTMLDivElement) => {
  if (target.matches(`.${classes.container}`)) {
    target.classList.remove(classes.active)
  }
}
