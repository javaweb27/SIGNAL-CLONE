import { useRef } from "react"
import HeaderButton from "./HeaderButton"

const Search = () => {
  const input = useRef()

  const toggleSearch = () => input.current.classList.toggle("open")

  return (
    <div className="search-container">
      <HeaderButton onClick={toggleSearch} iconName="search"/>
      <div ref={input} className="input-container">
        <HeaderButton onClick={toggleSearch} iconName="arrow_left"/>
        <input type="text" />
      </div>
    </div>
  )
}

export default Search