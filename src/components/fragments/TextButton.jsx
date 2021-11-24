const TextButton = ({toggle, title, children, event}) => {
  return (
    <button className="text-button" {...event}>
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