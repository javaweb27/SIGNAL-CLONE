import { container, active, menu } from "../../styles/fragments/fixed-container.module.scss"

const FixedContainer = ({ title, containerRef, children }) => {
  const closeMenu = e => {
    if (e.target.matches(`.${container}`) || e.target.matches("ul *")) {
      containerRef.current.classList.remove(active)
    }
  }

  return (
    <div ref={containerRef} onClick={closeMenu} className={container}>
      <div className={menu}>
        <span>{title}</span>
        <ul>
          { children }
        </ul>
      </div>
    </div>
  )
}

export default FixedContainer
