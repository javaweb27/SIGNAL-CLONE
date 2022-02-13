import { useRef } from "react"
import Svg from "../svg"

const Search = () => {
  const input = useRef()

  const toggleSearch = () => input.current.classList.toggle("open")

  return (
    <div className="search-container">
      <button onClick={toggleSearch} className="search"><Svg name="search"/></button>
      <div ref={input} className="input-container">
        <button onClick={toggleSearch} className="search">flecha</button>
        <input type="text" />
      </div>
    </div>
  )
}

export default Search