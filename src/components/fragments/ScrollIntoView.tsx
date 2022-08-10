import { useEffect, useRef } from "react"

const ScrollIntoView = () => {
  const spanVisibleRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    spanVisibleRef.current!.scrollIntoView({ behavior: "smooth" })
  })

  return <span ref={spanVisibleRef}></span>
}

export default ScrollIntoView
