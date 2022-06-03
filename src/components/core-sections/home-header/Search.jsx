import classes from "./search.module.scss"
import { useRef } from "react"
import HeaderButton from "../../fragments/header-button"

const Search = () => {
  const input = useRef()

  const toggleSearch = () => input.current.classList.toggle(classes.open)

  return (
    <div className={classes.container}>
      <HeaderButton onClick={toggleSearch} iconName="search"/>
      <div ref={input} className={classes.inputContainer}>
        <HeaderButton onClick={toggleSearch} iconName="arrow_left"/>
        <input className={classes.input}/>
      </div>
    </div>
  )
}

export default Search