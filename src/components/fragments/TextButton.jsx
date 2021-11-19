const TextButton = ({toggle, title, children}) => {
  return (
    <button className="text-button">
      {!children && <span className="title">{title}</span>}

      { children &&
        <div className="container">
          <span className="title">{title}</span>
          <span className="subtitle">{children}</span>
        </div>
      }

      {toggle && <span>boton</span>}
    </button>
  )
}
export default TextButton