import { useEffect, useRef } from "react"

const ScrollIntoView = () => {
  const spanVisibleRef = useRef()

  useEffect(() => {
    spanVisibleRef.current.scrollIntoView({ behavior: "smooth" })
  })

  return <span ref={spanVisibleRef}></span>
}

export default ScrollIntoView