import { useRef } from "react"
import SearchIcon from "../../svg/SearchIcon"

const Search = () => {
  const input = useRef()

  const toggleSearch = () => input.current.classList.toggle("open")

  return (
    <div className="search-container">
      <button onClick={toggleSearch} className="search"><SearchIcon/></button>
      <div ref={input} className="input-container">
        <button onClick={toggleSearch} className="search">flecha</button>
        <input type="text" />
      </div>
    </div>
  )
}

export default Search